import { apiClient } from './api'

export default {
  saveTradeData(data) {
    return apiClient.put('/data', data)
  },
  loadTradeData() {
    return apiClient.get('/data')
  }
}
