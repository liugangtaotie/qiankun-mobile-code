export default [
  // router redirect
  {
    path: "/",
    redirect: "/home",
  },
  // home
  {
    path: "/home",
    meta: {
      requiresAuth: true,
      keepAlive: false,
      title: "home",
    },
    component: () => import("@VIE/home/index.vue"),
  },
  // about
  {
    path: "/about",
    meta: {
      requiresAuth: true,
      keepAlive: false,
      title: "about",
    },
    component: () => import("@VIE/about/index.vue"),
  },
  // tabs-two
  {
    path: "/tabTwo",
    meta: {
      requiresAuth: true,
      keepAlive: false,
      title: "tabTwo",
    },
    component: () => import("@VIE/tabs/tabTwo.vue"),
  },
  // tabs-three
  {
    path: "/tabThree",
    meta: {
      requiresAuth: true,
      keepAlive: false,
      title: "tabThree",
    },
    component: () => import("@VIE/tabs/tabThree.vue"),
  },
  // tabs-four
  {
    path: "/tabFour",
    meta: {
      requiresAuth: true,
      keepAlive: false,
      title: "tabFour",
    },
    component: () => import("@VIE/tabs/tabFour.vue"),
  },
];
