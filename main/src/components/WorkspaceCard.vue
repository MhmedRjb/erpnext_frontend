<template>
	<div
		:class="[
			' w-20  h-40 sm:flex-grow md:flex-none  relative 2xl:pt-10 overflow-hidden rounded-lg shadow-lg group border-2 border-amber-400  hover:shadow-blue-600    sm:w-36  lg:size-52 xl:size-[52]   ',
			color,
		]"
	>
		<svg
			class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
			viewBox="0 0 375 283"
			fill="none"
			style="opacity: 0.1"
		></svg>
		<div
			class="relative px-7 py-5 sm:px-6 md:py-5 xl:py-5 sm:pt-10 md:pt-10 xl:pt-10 md:px-7 xl:px-7 flex items-center justify-center group-hover:scale-110 transition-transform"
		>
			<a :href="url" class="py-2 md:py-0 text-center size-36 2xl:size-52">
				<img
					:src="svgData"
					class="block mx-auto size-20 md:size-20"
					alt="Workspace Icon"
				/>
				<p class="pt-4 py-9 md:py-0 md:pt-0 xl:pt-5 capitalize font-bold text-red-700">
					{{ workspace.title }}
				</p>
			</a>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	workspace: {
		type: Object,
		required: true,
	},
	color: {
		type: String,
		required: true,
	},

	svgData: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
})
</script>
