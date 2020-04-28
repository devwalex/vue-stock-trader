<template>
  <div class="col-sm-6 col-md-4">
    <div class="card mb-3">
      <div class="card-header text-white bg-success">
        {{ stock.name }}
        <small
          >(Price: {{ stock.price }} | Quality: {{ stock.quantity }})</small
        >
      </div>
      <div class="card-body">
        <form class="form-inline">
          <input
            class="form-control"
            type="number"
            v-model="quantity"
            placeholder="Quality"
          />
          <button
            @click.prevent="sellStock"
            class="btn btn-success ml-3"
            :disabled="quantity <= 0 || !Number.isInteger(Number(quantity))"
          >
            Sell
          </button>
          <!-- {{ console.log(typeof quantity) }} -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      }
      console.log('SELL STOCK', typeof this.quantity, this.quantity, order)
      this.$store.dispatch('portfolio/sellStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style scoped></style>
