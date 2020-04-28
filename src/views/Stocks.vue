<template>
  <div>
    <h1>Stocks</h1>

    <div class="row">
      <app-stock
        v-for="stock in stocks"
        :key="stock.id"
        :stock="stock"
      ></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from '@/components/stocks/Stock.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    appStock: Stock
  },
  computed: mapGetters('stocks', ['stocks'])
}
</script>

<style scoped></style>
