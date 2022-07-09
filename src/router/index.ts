import { createRouter, createWebHistory } from "vue-router";

const Router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("../views/Home.vue"),
		},
		{
			path: "/notfound",
			name: "NotFound",
			component: () => import("../views/NotFound.vue"),
		},
	],
});
export default Router;
