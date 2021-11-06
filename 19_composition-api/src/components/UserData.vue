<template>
  <section>
    <div class="container">
      <h2>{{ userName }}</h2>
      <!-- <h3>{{ age }}</h3> -->
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['firstName', 'lastName'],

  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    console.log(context);
    // context.emit('save-num' ,1 ) // = this.$emit('save-num' , 1 )
    return { userName: uName };
  },
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   },
  // },
};
</script>


<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>