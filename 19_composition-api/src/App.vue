<template>
  <section class="container">
    <!-- <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>  method 1-->
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>  method 2 -->
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';
export default {
  setup() {
    // const UName = ref('Maximilian'); method
    // const userAge = ref(44);
    // under the hood, it creates an object. This string is stored in that object
    // and Vue will watch this object, so that whenever we assign a new value instead
    // of that original string.Vue will be aware of it and is able to update the DOM.

    // setTimeout(() => {
    //   UName.value = 'Ahmad';
    //   userAge.value = 22;
    // }, 2000);
    // return { userName: UName, age: userAge }; method 1 end

    // const user = ref({    //method 2
    //   name: 'Maximilian ',
    //   age: 33,
    // });
    // setTimeout(() => {
    //   user.value.name = 'Ahmad';
    //   user.value.age = 23;
    // }, 2000);
    // return { user };  //method 2 end

    const user = reactive({
      //method 3, reactive works just with objects, while ref works with all
      name: 'Maximilian ',
      age: 33,
    });
    setTimeout(() => {
      user.name = 'Ahmad';
      user.age = 23;
    }, 2000);
    return { user }; //method 3 end
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
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