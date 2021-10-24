import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    // it tells the view router that the dynamic parameters should be passed into
    //  this component as props rather than just on the $route property.
  ],
  linkActiveClass: 'active', // to replace the router-link-active with this
});

const app = createApp(App);
app.use(router);

app.mount('#app');
