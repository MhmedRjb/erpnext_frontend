<template>
	<div class="h-screen flex flex-col">
		<!-- add workspaceResource as json -->
		 <div>
		 </div>
		<div class="flex flex-grow basis-auto mt-10 mb-10">
			<!-- <button @click="toggleFilter" class="mb-4 p-2 bg-blue-500 text-white rounded">Filter Workspaces</button> -->
			<div class="w-52"></div>
			<div class="flex-grow overflow-auto lg:overflow-hidden">
				<div
					class="flex flex-wrap gap-4 justify-center mx-auto w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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
    The best way to predict
    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-600 relative inline-block">
        <span class="relative text-white">the future</span>
    </span>
    is to
    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
        <span class="relative text-white">invent it</span>
    </span>
    <br>
    <br>
	with 
	<span class="before:block  before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#0d99ff] relative inline-block">
        <span class="relative text-white"> &nbsp;&nbsp;&nbsp; ERPnext  &nbsp;&nbsp;&nbsp;</span>
    </span>
</blockquote>




		</div>
	</div>
</template>

<script setup>
import { createListResource } from 'frappe-ui'
import { computed ,ref ,watch} from 'vue'
import WorkspaceCard from '../components/WorkspaceCard.vue'
import { getColor ,getSvgData ,getUrl} from'../utils/workspaceUtils'

const workspaceResource = createListResource({
	doctype: 'Workspace',
	fields: ['title','parent_page'],
	idx: 'title',
	auto: true,
})

const workspaceList = computed(() => workspaceResource.list.data || [])

const filteredWorkspaces = ref([])

watch(workspaceList, (newList) => {
    filteredWorkspaces.value = newList
}, { immediate: true })


const isFiltered = ref(false)


const toggleFilter = () => {
	let allowedParentPages=['']
    if (isFiltered.value) {
        filteredWorkspaces.value = workspaceList.value
    } else {
		allowedParentPages.push("Accounting")
		console.log(allowedParentPages)
		filteredWorkspaces.value = workspaceList.value.filter(
			workspace => allowedParentPages.includes(workspace.parent_page));
    }
    isFiltered.value = !isFiltered.value
}


	</script>

