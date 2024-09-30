<template>
	<div class="h-screen flex flex-col">
		<!-- Navigation Bar -->
		<nav class="bg-gray-800 text-white flex h-10 mb-10">Navigation Bar</nav>

		<!-- Main Content Area -->
		<div class="flex flex-grow mb-56">
			<div class="w-52"></div>

			<!-- Right Column -->
			<div class="flex-grow overflow-auto lg:overflow-hidden">
				<div
					class="flex flex-wrap gap-4 justify-center mx-auto w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
				>
					<WorkspaceCard
						v-for="workspace in workspaceList"
						:key="workspace.title"
						:workspace="workspace"
						:color="getColor(workspace.title)"
						:svgData="getSvgData(workspace.title)"
					/>
				</div>
			</div>

			<div class="w-52"></div>
		</div>
	</div>
</template>

<script setup>
import { createListResource } from 'frappe-ui'
import { computed } from 'vue'
import WorkspaceCard from '../components/WorkspaceCard.vue'
const workspaceResource = createListResource({
	doctype: 'Workspace',
	fields: ['title'],
	auto: true,
})

const workspaceList = computed(() => {
	if (workspaceResource.list.data) {
		return workspaceResource.list.data
	}
})

const colorMap = {
	Accounting: 'bg-teal-500',
	Assets: 'bg-red-500',
	Build: 'bg-blue-500',
	Buying: 'bg-yellow-500',
	CRM: 'bg-green-500',
	'Financial Reports': 'bg-purple-500',
	Home: 'bg-pink-500',
	Integrations: 'bg-teal-500',
	Manufacturing: 'bg-orange-500',
	Payables: 'bg-cyan-500',
	Projects: 'bg-green-500',
	Quality: 'bg-amber-500',
	Receivables: 'bg-emerald-500',
	Selling: 'bg-gray-500',
	Settings: 'bg-rose-500',
	Stock: 'bg-violet-500',
	Support: 'bg-purple-500',
	Tools: 'bg-gray-500',
	Users: 'bg-stone-500',
	Website: 'bg-red-600', // This color is already in the default palette
}
const getColor = (title) => {
	return colorMap[title] || 'bg-teal-500'
}

const svgMap = {
	Accounting: 'https://redpixelthemes.com/assets/images/icon-portfolio-green.svg',
	CRM: 'https://redpixelthemes.com/assets/images/icon-business-green.svg',
	Projects: 'https://redpixelthemes.com/assets/images/icon-startup-green.svg',
	Selling: 'https://redpixelthemes.com/assets/images/icon-ecommerce-green.svg',
}

const getSvgData = (title) => {
	return svgMap[title] || defaultSvgUrl
}

const defaultSvgUrl = 'https://redpixelthemes.com/assets/images/icon-portfolio-green.svg'
</script>

<script></script>
