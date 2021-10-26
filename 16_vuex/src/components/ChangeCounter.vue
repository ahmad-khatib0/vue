<template>
  <!-- <button @click="addOne">Add One</button> -->
  <button @click="addTow">Add 2</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // this.$store.state.counter++; bad approach
      this.$store.commit('increment');
    },
    // addTow() {
    //   this.$store.commit('increment');
    // },
    addTow() {
      this.$store.dispatch('increment');
    },
  },
};
</script>

<style></style>
