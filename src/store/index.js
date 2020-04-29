import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stock'
import portfolio from './modules/portfolio'
import tradeData from '../services/data'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stocks,
    portfolio
  },
  actions: {
    async loadData({ commit }) {
      const response = await tradeData.loadTradeData()
      let data = response.data
      if (data) {
        const stocks = data.stocks
        const funds = data.funds
        const stockPortfolio = data.stockPortfolio

        const portfolio = {
          stockPortfolio,
          funds
        }

        commit('stocks/SET_STOCK', stocks)
        commit('portfolio/SET_PORTFOLIO', portfolio)
      }
    }
  }
})
