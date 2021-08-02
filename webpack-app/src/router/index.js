const routes = [
  {
    path: "/",
    redirect: "/webpack-app/about"
  },
  {
    path: "/webpack-app/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

export default routes;
