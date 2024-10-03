<template>
 <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 </head>


  <div class="w-full flex h-svh max-h-svh">
   <div class="hidden  h-full flex-[0.2] md:block">
    <!-- Left Sidebar -->
    <div class="grid h-full place-content-center bg-green-600">
     <h1 class="text-xl">Left</h1>
     <h1 class="text-xl">Sidebar</h1>
    </div>
   </div>

   <div class="flex h-full flex-1 flex-col">
    <!-- Main Content Area-->
    <div class="flex h-full flex-col justify-between overflow-y-scroll">
     <div class=" top-0 w-full sticky z-50">
		
      <!-- Header -->
	  <nav class="mx-auto sticky flex max-w-none gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4 bg-[white]">
        <div class="relative flex items-center">
            <a href="/">
                <img  src="https://www.svgrepo.com/show/499831/target.svg" loading="lazy" style="color:transparent" width="32" height="32"></a>
        </div>
        <ul class="hidden items-center justify-center gap-6 md:flex">
            <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
                <a href="#">Pricing</a>
            </li>
            <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
                <a href="#">Blog</a>
            </li>
            <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
                <a href="#">Docs</a>
            </li>
        </ul>
        <div class="flex-grow"></div>
        <div class="hidden items-center justify-center gap-6 md:flex">
            <a href="#" class="font-dm text-sm font-medium text-slate-700">Sign in</a>
            <a href="#"
                class="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">Sign
                up for free
            </a>
        </div>
		
        <div class="relative flex items-center justify-center md:hidden">
            <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-auto text-slate-900"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
            </button>
        </div>
    </nav>
     </div>

     <div>
      <!-- Content -->
	  <div class=" m-10 flex-grow overflow-auto lg:overflow-hidden">
				<div
					class="flex flex-wrap gap-4 justify-center mx-auto w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
					<WorkspaceCard
						v-for="workspace in filteredWorkspaces"
						:key="workspace.title"
						:workspace="workspace"
						:color="getColor(workspace.title)"
						:url="getUrl(workspace.title)"
					/>
				</div>
			</div>
     </div>

     <div class="w-full bg-cyan-900">
      <!-- Footer -->
     </div class="bg-cyan-900 w-52" >
	 sadasdsaasdasd
    </div>

    <div class="sticky top-0 block bg-pink-500 py-5 md:hidden">
     <h1 class="text-center text-xl">Bottom Navigation</h1>
    </div>
   </div>

   


  </div>
</template>
<style>

*{
	top: 0;
	font-style: italic;
}


	
</style>


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

