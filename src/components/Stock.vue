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
          />
          <button
            @click.prevent="buyStock"
            class="btn btn-primary ml-3"
            :disabled="quantity <= 0 || !Number.isInteger(parseInt(quantity))"
          >
            Buy
          </button>
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
    buyStock() {
      console.log('BUY STOCK', typeof this.quantity)
    }
  }
}
</script>

<style scoped></style>
