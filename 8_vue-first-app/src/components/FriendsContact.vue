<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
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
    id: {
      type: String,
      required: true,
    },
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
      default: false, //default can be a function
      // validator: function(value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
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
      // this.isFavoriteFriend = !this.isFavoriteFriend;
      this.$emit("toggle-favorite", this.id);

      // And this allows you to emit your own custom event to which you then can listen
      // from inside the parent component... note that the name is in kepab-case
      // and the second arg is the data you wanna to pass it up to the parent
    },
  },
};
</script>

<style></style>
