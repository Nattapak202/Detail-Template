const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: '/home', component: () => import('pages/IndexPage.vue') },
      {
        path: "/Q&A",
        component: () =>
          import("pages/questionAndAnswer/QuestionAndAnswerPage.vue"),
      },
      {
        path: "/Instructions",
        component: () => import("pages/Instructions/InstructionPage.vue"),
        children: [
          {
            path: ":service",
            component: () => import("pages/Instructions/InstructionPage.vue"),
          },
        ],
      },
      { path: "/", component: () => import("pages/home/HomePage.vue") },
      {
        path: "/checkStatus",
        component: () => import("pages/checkStatus/CheckStatusPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
