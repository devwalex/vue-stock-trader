<template>
  <div>
    <h1>Portolio</h1>
    <app-stock
      v-for="stock in stockPortfolio"
      :stock="stock"
      :key="stock.id"
    ></app-stock>
  </div>
</template>

<script>
import Stock from '@/components/portfolio/Stock.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    appStock: Stock
  },
  computed: mapGetters('portfolio', ['stockPortfolio'])
}
</script>

<style scoped></style>
