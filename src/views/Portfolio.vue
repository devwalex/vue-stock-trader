<template>
  <div class="mt-5">
    <h1 class="mb-4">Portolio</h1>
    <div class="row">
      <app-stock
        v-for="stock in stockPortfolio"
        :stock="stock"
        :key="stock.id"
      ></app-stock>
    </div>
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
