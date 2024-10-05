<template>
	<div class="h-screen flex flex-col">
		<div class="flex flex-grow basis-auto my-10 md:ml-16">
			<div class="flex-grow lg:overflow-hidden">
				<div
					class="flex flex-wrap gap-4 justify-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
				>
					<WorkspaceCard
						v-for="workspace in workspaceList"
						:key="workspace.title"
						:workspace="workspace"
						:color="getColor(workspace.title)"
						:svgData="workspace.custom_second_icon"
						:url="getUrl(workspace.title)"
					/>
				</div>
			</div>
		</div>
		<div class="flex justify-center basis-44">
			<!-- <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
				Nothing is built on
				<span
					class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-600 relative inline-block"
				>
					<span class="relative text-white">stone</span>
				</span>
				all is built on
				<span
					class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 relative inline-block"
				>
					<span class="relative">sand</span>
				</span>

				<br />
				<br />
				but we must build as if the
				<span
					class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 relative inline-block"
				>
					<span class="relative">sand</span>
				</span>
				were
				<span
					class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-600 relative inline-block"
				>
					<span class="relative text-white">stone</span>
				</span>
			</blockquote> -->
		</div>
	</div>
</template>

<script setup>
import { createListResource } from 'frappe-ui'

import { computed, ref, watch, onMounted, onBeforeMount } from 'vue'
import WorkspaceCard from '../components/WorkspaceCard.vue'
import { getColor, getUrl } from '../utils/workspaceUtils'

const workspaces = ref([])
const bootinfo = ref([])
const fetchedData = ref(null) // Make fetchedData reactive

const fetchBootinfo = async () => {
	try {
		const response = await fetch('/api/method/erpnext_frontend.api.get_bootinfo')
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const data = await response.json()
		console.log(data.message)
		workspaces.value = data.message
		bootinfo.value = data.message
		fetchedData.value = data.message // Assign fetched data to the reactive variable
	} catch (error) {
		console.error('Error fetching bootinfo:', error)
	}
}

onBeforeMount(() => {
	fetchBootinfo()
})

const workspaceResource = ref(null)

watch(fetchedData, (newValue) => {
	if (newValue) {
		workspaceResource.value = createListResource({
			doctype: 'Workspace',
			fields: ['*'],
			idx: 'title',
			filters: [
				['parent_page', 'in', ['']],
				['title', 'in', newValue],
			],
			auto: true,
		})
	}
})

const workspaceList = computed(() => workspaceResource.value?.list.data || [])
</script>
