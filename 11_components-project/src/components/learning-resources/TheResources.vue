<template>
  <base-card>
    <base-button @click="setSelectedTap('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTap('add-resource')"
      >Add Resource
    </base-button>
  </base-card>

  <component :is="selectedTap"></component>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
import StoredResources from './StoredResources.vue';

export default {
  components: { BaseButton, BaseCard, StoredResources },
  data() {
    return {
      selectedTap: 'stored-resources',
    };
  },
  methods: {
    setSelectedTap(tap) {
      this.selectedTap = tap;
    },
  },
};
</script>

<style></style>
