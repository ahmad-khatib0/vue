<template>
  <base-card>
    <base-button
      @click="setSelectedTap('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTap('add-resource')"
      :mode="addResButtonMode"
      >Add Resource
    </base-button>
  </base-card>

  <component :is="selectedTap"></component>
  <!-- to understand this better,think of it as the component element will be  -->
  <!-- replaced either by <storedResources/> or <AddResource /> instead -->
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
      storedResources: [
        {
          id: 'officialGuide',
          title: 'Official Guide',
          description: 'the official vue js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Goggle',
          description: 'Learn how to goggle things',
          link: 'https://google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTap === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTap === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTap(tap) {
      this.selectedTap = tap;
    },
  },
};
</script>

<style></style>
