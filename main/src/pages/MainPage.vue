<template>
	<div class="h-screen flex flex-col">
		<nav class="bg-gray-800 text-white flex mb-10 basis-1.5">Navigation Bar</nav>
		<!-- add workspaceResource as json -->
		 <div>
		 </div>
		<div class="flex flex-grow basis-auto">
			<div class="w-52"></div>

			<div class="flex-grow overflow-auto lg:overflow-hidden">
				<div
					class="flex flex-wrap gap-4 justify-center mx-auto w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
				>
					<WorkspaceCard
						v-for="workspace in filteredWorkspaces"
						:key="workspace.title"
						:workspace="workspace"
						:color="getColor(workspace.title)"
						:svgData="getSvgData(workspace.title)"
						:url="getUrl(workspace.title)"
					/>
				</div>
			</div>
			<div class="w-52"></div>
		</div>
		<div class="flex justify-center basis-44">
			<blockquote class="text-2xl font-semibold italic text-center text-slate-900">
				The best way to predict .
				<span
					class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-600 relative inline-block"
				>
					<span class="relative text-white">the future</span>
				</span>
				is to
				<span
					class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block"
				>
					<span class="relative text-white">invent it</span>
				</span>
			</blockquote>
		</div>
	</div>
</template>

<script setup>
import { createListResource } from 'frappe-ui'
import { computed } from 'vue'
import WorkspaceCard from '../components/WorkspaceCard.vue'
const workspaceResource = createListResource({
	doctype: 'Workspace',
	fields: ['title','parent_page'],
	auto: true,
})

const workspaceList = computed(() => {
	if (workspaceResource.list.data) {
		return workspaceResource.list.data
	}
})

const filteredWorkspaces =computed(()=>{
    return workspaceList.value.filter(workspace => workspace.parent_page === '');
	
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
	Accounting: 'https://img.icons8.com/?size=100&id=22462&format=png&color=000000',
	Assets: 'https://img.icons8.com/?size=100&id=22467&format=png&color=000000',
	Build: 'https://img.icons8.com/?size=100&id=rZkxuhikMLfr&format=png&color=000000',
	Buying: 'https://img.icons8.com/?size=100&id=13012&format=png&color=000000',
	CRM: 'https://img.icons8.com/?size=100&id=rJl8pTEO0lyZ&format=png&color=000000',
	'Financial Reports': 'https://img.icons8.com/?size=100&id=22462&format=png&color=000000',
	Home: 'https://img.icons8.com/?size=100&id=12229&format=png&color=000000',
	Integrations: 'https://img.icons8.com/?size=100&id=24459&format=png&color=000000',
	Manufacturing: 'https://img.icons8.com/?size=100&id=108785&format=png&color=000000',
	Payables: 'https://img.icons8.com/?size=100&id=32747&format=png&color=000000',
	Projects: 'https://img.icons8.com/?size=100&id=104230&format=png&color=000000',
	Quality: 'https://img.icons8.com/?size=100&id=20539&format=png&color=000000',
	Receivables: 'https://img.icons8.com/?size=100&id=13017&format=png&color=000000',
	Selling: 'https://img.icons8.com/?size=100&id=v2btWkQ6FQYW&format=png&color=000000',
	Settings: 'https://img.icons8.com/?size=100&id=22998&format=png&color=000000',
	Stock: 'https://img.icons8.com/?size=100&id=VWrzCw0rvxVx&format=png&color=000000',
	Support: 'https://img.icons8.com/?size=100&id=13556&format=png&color=000000',
	Tools: 'https://img.icons8.com/?size=100&id=85740&format=png&color=000000',
	Users: 'https://img.icons8.com/?size=100&id=11901&format=png&color=000000',
	Website: 'https://img.icons8.com/?size=100&id=102562&format=png&color=000000', // This color is already in the default palette
}

const getSvgData = (title) => {
	return svgMap[title] || defaultSvgUrl
}

const urlMap = {
	Build: 'app/Build',
}
const getUrl = (title) => {
	console.log(`/app/${title.toLowerCase().replace(/ /g, '-')}`)
	return `/app/${title.toLowerCase().replace(/ /g, '-')}`
}

const defaultSvgUrl = 'https://redpixelthemes.com/assets/images/icon-portfolio-green.svg'
const defaultUrl = '/app/home'
</script>

<script></script>
