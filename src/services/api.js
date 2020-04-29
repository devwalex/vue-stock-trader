import axios from 'axios'
import Nprogress from 'nprogress'

export const apiClient = axios.create({
  baseURL: 'https://vue-stock-trader-ced52.firebaseio.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': `https://vue-stock-trader-ced52.firebaseio.com/data`,
    // 'Access-Control-Allow-Credentials': true
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
