<script lang="ts">
	import CopyIcon from '$lib/assets/CopyIcon.svelte';
	import RefreshIcon from '$lib/assets/RefreshIcon.svelte';
	import SettingsIcon from '$lib/assets/SettingsIcon.svelte';
	import { fade } from 'svelte/transition';
	import { generatePassword } from '$lib/generator';
	import { password, settings, passwordLength, IsSettingsOpen } from '../../password';
	import SleekRating from './SleekRating.svelte';

	$: copiedNotification = false;

	const copyPassword = () => {
		navigator.clipboard.writeText($password);

		copiedNotification = true;

		setTimeout(() => {
			copiedNotification = false;
		}, 3000);
	};
</script>

<div class="flex w-full items-center justify-between bg-zinc-900 px-8 py-6">
	{#if copiedNotification}
		<span
			class={`text-base font-semibold text-zinc-200 ${
				copiedNotification ? 'text-zinc-300 opacity-100' : 'opacity-0'
			}`}>Copied to Clipboard</span
		>
	{:else}
		<span
			in:fade
			class={`text-xl font-semibold md:text-3xl  ${
				$password !== 'P4$5W0rD!' ? 'text-zinc-200' : 'text-zinc-600'
			}`}>{$password}</span
		>
	{/if}

	<div class="hidden flex-row gap-6 md:flex">
		<button on:click|preventDefault={() => generatePassword($settings, $passwordLength)}>
			<RefreshIcon />
		</button>

		<button on:click|preventDefault={() => copyPassword()}>
			<CopyIcon />
		</button>

		<button on:click|preventDefault={() => IsSettingsOpen.set(!$IsSettingsOpen)}>
			<SettingsIcon />
		</button>
	</div>
</div>

<SleekRating />

<!-- MOBILE FRIENDLY VERSION -->

<div class="flex w-full flex-1 flex-row items-center justify-center gap-4 p-2">
	<button
		class="group flex flex-row items-center gap-2 p-2 transition-all duration-300 hover:bg-zinc-900"
		on:click|preventDefault={() => generatePassword($settings, $passwordLength)}
	>
		<RefreshIcon />
		<span class="text-sm text-zinc-300">Generate</span>
	</button>

	<button
		class="t group flex flex-row items-center gap-2 p-2"
		on:click|preventDefault={() => copyPassword()}
	>
		<CopyIcon />
		<span class="text-sm text-zinc-300">Copy</span>
	</button>

	<button
		class="t group flex flex-row items-center gap-2 p-2"
		on:click|preventDefault={() => IsSettingsOpen.set(!$IsSettingsOpen)}
	>
		<SettingsIcon />
		<span class="text-sm text-zinc-300">Settings</span>
	</button>
</div>
