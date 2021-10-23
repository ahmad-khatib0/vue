<template>
  <the-header title="RememberMe"></the-header>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
// import { v4 as uuidv4 } from 'uuid';
export default {
  components: {
    TheHeader,
  },
  data() {
    return {
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
};
</script>

<style></style>
