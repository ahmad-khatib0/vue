import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', redirect: '/teams' }, or with alias
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
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
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter: (_, _2, next) => {
        console.log('this run on each time we hit the /users');
        next();
      },
    },
    // it tells the view router that the dynamic parameters should be passed into
    //  this component as props rather than just on the $route property.
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active', // to replace the router-link-active with this
  scrollBehavior(_, _2, savedPosition) {
    // which is basically an indicator that I have to take these arguments  in order to reach
    //  the third one, but then I don't plan on using them (which prevent error of unused vars)
    // console.log(to, from, savedPosition);
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.group();
  console.log('Global beforeEach, run on each navigation');
  console.log(to, from);
  console.groupEnd();
  next(); //or
  // next(false); //or
  // if (to.name === 'team-members') next();
  // else next({ name: 'team-members', params: { teamId: 't2' } }); //or
});

router.afterEach((to, from) => {
  // could be useful, eg sending analytics data
  console.log('Global afterEach , runs on leaving routes');
  console.log(to, from);
});
const app = createApp(App);
app.use(router);

app.mount('#app');
