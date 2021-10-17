import { createApp } from "vue";
import App from "./App.vue";
import FriendsContact from "./components/FriendsContact.vue";
const app = createApp(App);
app.component("friends-contact", FriendsContact);
app.mount("#app");
