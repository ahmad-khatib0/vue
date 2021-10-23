<template>
  <ul>
    <learning-resources
      v-for="resource in resources"
      :key="resource.id"
      :title="resource.title"
      :link="resource.link"
      :description="resource.description"
    >
    </learning-resources>
  </ul>
</template>

<script>
import LearningResources from './LearningResource.vue';
export default {
  components: {
    LearningResources,
  },
  props: ['resources'],
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
