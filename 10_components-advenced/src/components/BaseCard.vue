<template>
  <div>
    <header>
      <slot name="header"></slot>
      <!-- name is up to you, you can to have just one  unnamed slot -->
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
