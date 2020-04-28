import axios from 'axios'
import Nprogress from 'nprogress'

export const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(config => {
  Nprogress.start()
  return config
})
apiClient.interceptors.response.use(response => {
  Nprogress.done()
  return response
})
