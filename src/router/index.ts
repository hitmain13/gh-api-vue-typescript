import { createRouter, createWebHistory, useRoute } from "vue-router";

const Router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/home",
			name: "Home",
			component: () => import("../views/Home.vue"),
		},
		{
			path: '/',
			redirect: {name: "Home"}
		},
		{
			path: "/*",
			name: "NotFound",
			component: () => import("../views/NotFound.vue"),
		},
		{
			path: "/profile/:id",
			name: "Profile",
			component: () => import("../views/Profile.vue"),
			props: true
		},
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: () => import("@/views/NotFound.vue"),
		},
	],
});
export default Router;
