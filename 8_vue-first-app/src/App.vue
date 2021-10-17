<template>
  <header><h1>My Friends</h1></header>
  <friends-contact
    name="ahmad khatib"
    email-address="ahmad@localhost.com"
    phone-number="444-33333-54"
    is-favorite="1"
  ></friends-contact>
  <friends-contact
    name="ali khatib"
    email-address="ali@localhost.com"
    phone-number="444-33333-54"
    is-favorite="0"
  ></friends-contact>
</template>

<script>
import FriendsContact from "./components/FriendsContact.vue";
export default {
  components: { FriendsContact },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "manuel lorenz",
          email: "manuel@localhost.com",
          phone: "224-333-2222",
        },
        {
          id: "julie",
          name: "julie lorenz",
          email: "julie@localhost.com",
          phone: "224-333-2222",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
