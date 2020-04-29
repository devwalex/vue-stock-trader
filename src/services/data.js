import { apiClient } from './api'

export default {
  saveTradeData(data) {
    return apiClient.put('data.json', data)
  },
  loadTradeData() {
    return apiClient.get('data.json')
  }
}
