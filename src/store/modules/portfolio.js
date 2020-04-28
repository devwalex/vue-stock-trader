export default {
  namespaced: true,
  state: {
    funds: 10000,
    stocks: []
  },
  mutations: {
    BUY_STOCK(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(element => element.id == stockId)
      if (record) {
        record.quantity += quantity
      } else {
        state.stocks.push({
          id: stockId,
          quantity: quantity
        })
      }
      state.funds -= stockPrice * quantity
    },
    SELL_STOCK(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(element => element.id == stockId)
      if (record.quantity > quantity) {
        record.quantity -= quantity
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1)
      }
      state.funds += stockPrice * quantity
    }
  },
  actions: {
    sellStock({ commit }, order) {
      commit('SELL_STOCK', order)
    }
  },
  getters: {
    stockPortfolio: (state, rootGetters, getters) => {
      return state.stocks.map(stock => {
        console.log('GETTERS', getters['stocks'].stocks)

        const record = getters['stocks'].stocks.find(
          element => element.id == stock.id
        )
        console.log('RECORD', record)

        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price
        }
      })
    },
    funds: state => {
      return state.funds
    }
  }
}