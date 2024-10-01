<template>
	<div :class="['flex-auto relative overflow-hidden rounded-lg shadow-lg group border-2 border-amber-400  hover:shadow-blue-600 ', color]"
	
	>
		<svg
			class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
			viewBox="0 0 375 283"
			fill="none"
			style="opacity: 0.1"
		>
			<rect
				x="159.52"
				y="175"
				width="152"
				height="152"
				rx="8"
				transform="rotate(-45 159.52 175)"
				fill="white"
			/>
			<rect
				y="107.48"
				width="152"
				height="152"
				rx="8"
				transform="rotate(-45 0 107.48)"
				fill="white"
			/>
		</svg>
		<div
			class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform" style="d"
		>
			<div
				class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
				style="
					background: radial-gradient(black, transparent 60%);
					transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1);
					opacity: 0.2;
				"
			></div>
			<a  :href="url" class="py-2 text-center size-36">
				<img :src="svgData" class="block mx-auto size-20" alt="Workspace Icon" />
				<p
					class="pt-4 py-10 text-sm font-medium capitalize font-body text-green-900 sm:text-base md:text-lg lg:text-xl xl:text-2xl md:pt-6"
				>
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
