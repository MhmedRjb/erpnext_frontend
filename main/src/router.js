import { createRouter, createWebHistory } from 'vue-router'
import { session } from './data/session'
import { userResource } from '@/data/user'
import { compile } from 'vue'

const routes = [
	{
		name: 'MainPage',
		path: '/mainpage',
		component: () => import('@/pages/MainPage.vue'),
		meta: { requiresAuth: true },
	},
	{
		name: 'Login',
		path: '/login',
		// component: () => import('@/pages/Login.vue'),
	},
	// {
	// 	name: 'MainPageWithDetails',
	// 	path: '/MainPageWithDetails',
	// 	component: () => import('@/pages/MainPageWithDetails.vue'),
	// },
]

let router = createRouter({
	history: createWebHistory('/main'),
	routes,
})

router.beforeEach(async (to, from, next) => {
	let isLoggedIn = session.isLoggedIn
	try {
		await userResource.promise
	} catch (error) {
		isLoggedIn = false
	}
	if (to.meta.requiresAuth && !isLoggedIn) {
        const redirectTo = encodeURIComponent(to.fullPath);
        window.location.href = `/login?redirect-to=${redirectTo}`;
        return;
	}
	next()
})

export default router
