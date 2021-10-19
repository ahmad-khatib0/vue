<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <!-- or <user-info></user-info> works as well  -->
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  components: {
    "badge-list": BadgeList,
    UserInfo,
    "the-header": TheHeader, //or :
    //  TheHeader: TheHeader, //and you'll still using it like:
    // <the-header></the-header>  or <TheHeader />
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
