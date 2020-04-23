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
import Stock from '@/components/Stock.vue'
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: 'BMW', price: '200' },
        { id: 2, name: 'Apple', price: '100' },
        { id: 3, name: 'Twitter', price: '40' },
        { id: 4, name: 'Lexus', price: '300' }
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>

<style scoped></style>
