<template>
  <div class="col-sm-6 col-md-4">
    <div class="card mb-3">
      <div class="card-header text-white bg-primary">
        {{ stock.name }} <small>(Price: {{ stock.price }})</small>
      </div>
      <div class="card-body">
        <form class="form-inline">
          <input
            class="form-control"
            type="number"
            v-model="quantity"
            placeholder="Quality"
            :class="{ danger: insufficientFunds }"
          />
          <button
            @click.prevent="buyStock"
            class="btn btn-primary ml-3"
            :disabled="
              insufficientFunds ||
                quantity <= 0 ||
                !Number.isInteger(Number(quantity))
            "
          >
            Buy
          </button>
          <small class="mt-2 text-red">{{
            insufficientFunds ? 'Insufficient Funds' : ''
          }}</small>
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
  computed: {
    funds() {
      return this.$store.getters['portfolio/funds']
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      }
      console.log('BUY STOCK', typeof this.quantity, this.quantity, order)
      this.$store.dispatch('stocks/buyStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style scoped>
.danger {
  border: 1px solid red !important;
}
.text-red {
  color: red;
}
</style>
