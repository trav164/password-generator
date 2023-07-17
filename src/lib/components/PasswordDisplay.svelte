<script lang="ts">
	import { password } from '../../password';

	$: copiedNotification = false;

	const copyPassword = () => {
		navigator.clipboard.writeText($password);

		copiedNotification = true;

		setTimeout(() => {
			copiedNotification = false;
		}, 3000);
	};
</script>

<div class="flex items-center justify-between bg-zinc-900 px-8 py-6">
	<span
		class={`tracking text-3xl font-semibold  ${
			$password !== 'P4$5W0rD!' ? 'text-zinc-200' : 'text-zinc-600'
		}`}>{$password}</span
	>

	<button
		class="flex flex-row items-center justify-center gap-2"
		on:click|preventDefault={() => copyPassword()}
	>
		<span
			class={`transition-all duration-500 ${
				copiedNotification ? 'text-zinc-300 opacity-100' : 'opacity-0'
			}`}>Copied</span
		>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-copy text-emerald-300 transition-all duration-300 hover:text-zinc-200"
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
