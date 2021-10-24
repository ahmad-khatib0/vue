import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', redirect: '/teams' }, or with alias
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      alias: '/',
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    }, //but alias don't update path
    { path: '/users', component: UsersList },
    // it tells the view router that the dynamic parameters should be passed into
    //  this component as props rather than just on the $route property.
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active', // to replace the router-link-active with this
});

const app = createApp(App);
app.use(router);

app.mount('#app');
