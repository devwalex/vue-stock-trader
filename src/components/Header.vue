<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <router-link :to="{ name: 'Stocks' }" class="nav-item" active-class="active" tag="li">
              <a class="nav-link">Stocks</a>
            </router-link>
            <router-link
              :to="{ name: 'Portfolio' }"
              class="nav-item"
              active-class="active"
              tag="li"
            >
              <a class="nav-link">Portfolio</a>
            </router-link>
          </ul>
          <ul class="navbar-nav navbar-right">
            <li>
              <a class="nav-link" href="#" @click="endDay">End Day</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Save & Load</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
              </div>
            </li>
            <li class="m-auto text-white">
              <strong>Funds: {{ funds | currency }}</strong>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import tradeData from '../services/data'
export default {
  computed: {
    funds() {
      return this.$store.getters['portfolio/funds']
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'stocks/randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks()
    },
    async saveData() {
      const data = {
        funds: this.$store.getters['portfolio/funds'],
        stockPortfolio: this.$store.getters['portfolio/stockPortfolio'],
        stocks: this.$store.getters['stocks/stocks']
      }
      await tradeData.saveTradeData(data)
    },
    async loadData() {
      this.fetchData()
    }
  }
}
</script>

<style scoped></style>
