<script lang="ts">
	import Settings from './Settings.svelte';
</script>

<div class="flex w-full flex-col gap-8 bg-zinc-900 px-10 py-10 tracking-wide">
	<Settings />

	<button
		class="flex flex-row items-center justify-center gap-2 bg-emerald-300 py-4 font-semibold uppercase text-zinc-950 outline outline-2 outline-emerald-300 transition-all duration-300 hover:bg-transparent hover:text-emerald-300"
	>
		<span>Generate</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-arrow-narrow-right"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M5 12l14 0" />
			<path d="M15 16l4 -4" />
			<path d="M15 8l4 4" />
		</svg>
	</button>
</div>
