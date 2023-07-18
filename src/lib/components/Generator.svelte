<script lang="ts">
	import { generatePassword } from '$lib/generator';
	import { fly } from 'svelte/transition';
	import { passwordLength, settings, IsSettingsOpen } from '../../password';
	import Rating from './Rating.svelte';
	import Settings from './Settings.svelte';

	$: isValid = $settings.some((x) => {
		if (x.state === true && $passwordLength > 0) return true;
	});
</script>

{#if $IsSettingsOpen}
	<div
		class="flex w-full flex-col gap-8 bg-zinc-900 px-10 py-10 tracking-wide"
		in:fly={{ y: -200, duration: 500 }}
		out:fly={{ y: -200, duration: 500 }}
	>
		<Settings />

		<Rating />

		<button
			class={`flex flex-row items-center justify-center gap-2  py-4 font-semibold uppercase outline outline-2 transition-all duration-300  ${
				!isValid
					? 'bg-zinc-800 text-zinc-500 outline-zinc-700'
					: 'bg-emerald-300 text-zinc-950 outline-emerald-300 hover:bg-transparent hover:text-emerald-300 '
			}`}
			disabled={!isValid}
			on:click={() => generatePassword($settings, $passwordLength)}
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
{/if}
