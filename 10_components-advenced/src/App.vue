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
    <course-goals>
      <template #default="slotProps">
        <!-- slot prop is an arbitrary name, its an object hold all 
        the passed props from CourseGoal slot, default slot in this case  -->
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";

export default {
  components: {
    "badge-list": BadgeList,
    UserInfo,
    CourseGoals,
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
