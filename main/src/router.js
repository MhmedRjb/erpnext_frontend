import { createRouter, createWebHistory } from 'vue-router'
import { session } from './data/session'
import { userResource } from '@/data/user'
import { compile } from 'vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/pages/Home.vue'),
		redirect: {
			name: 'MainPage',
		},
	},
	{
		name: 'MainPage',
		path: '/mainpage',
		component: () => import('@/pages/MainPage.vue'),
	},
	{
		name: 'Login',
		path: '/account/login',
		component: () => import('@/pages/Login.vue'),
	},
	{
		name :'MainPageWithDetails',
		path:'/MainPageWithDetails',
		component :()=> import('@/pages/MainPageWithDetails.vue')
	},
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
		window.location.href = '/mainpage'
	}
	next()
})

export default router
