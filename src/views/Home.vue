<template>
  <div class="mt-5">
    <h1>Trade or View your Portfolio</h1>
    <h6>You may Save and Load your Data</h6>
    <h6>Click on <b>End Day</b> to begin a New Day!</h6>
    <hr />
    <p>Your Funds: {{ funds }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters['portfolio/funds']
    }
  }
}
</script>

<style scoped></style>
