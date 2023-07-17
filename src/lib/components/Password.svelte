<script lang="ts">
	export let password: string = 'P4$5W0rD!';

	const copyPassword = () => {
		navigator.clipboard.writeText(password);
	};
</script>

<div class="flex items-center justify-between bg-zinc-900 p-6">
	<span class="tracking text-3xl font-semibold text-zinc-600">{password}</span>

	<button on:click|preventDefault={() => copyPassword()}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-copy text-emerald-300 hover:text-emerald-400"
			width="32"
			height="32"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
			<path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
		</svg>
	</button>
</div>
