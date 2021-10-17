<template>
  <li>
    <h2>{{ name }} {{ isFavoriteFriend === "1" ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">
      Toggle Favorite
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong> {{ phoneNumber }}</li>
      <li><strong>Email: </strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: "0", //default can be a function
      // validator: function(value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "manuel lorenz",
        email: "manuel@localhost.com",
        phone: "224-333-2222",
      },

      isFavoriteFriend: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // if (this.isFavorite === "1") this.isFavorite = "0";
      // else this.isFavorite = "1"; //this tow lines of code incorrect ,
      // because props in vue are immutable, so the solution was to assign it to isFavoriteFriend

      if (this.isFavoriteFriend === "1") this.isFavoriteFriend = "0";
      else this.isFavoriteFriend = "1";
    },
  },
};
</script>

<style></style>
