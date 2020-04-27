import stocks from '../../data/stocks'
export default {
  namespaced: true,
  state: {
    stocks: []
  },
  mutations: {
    SET_STOCK(state, stocks) {
      state.stocks = stocks
    },
    RANDOM_STOCK(state, stocks) {
      state.stocks = stocks
    }
  },
  actions: {
    buyStock({ commit }) {
      commit()
    },
    initStocks({ commit }) {
      commit('SET_STOCK', stocks)
    },
    randomizeStocks({ commit }) {
      commit('RANDOM_STOCK')
    }
  },
  getters: {
    stocks: state => {
      return state.stocks
    }
  }
}
