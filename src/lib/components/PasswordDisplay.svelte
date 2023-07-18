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

	// Used to glow newly generated password for 700ms
	$: newPw = false;
	password.subscribe(() => {
		newPw = true;
		setTimeout(() => {
			newPw = false;
		}, 700);
	});
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
			class={`text-xl font-semibold transition-colors duration-700 ease-out md:text-3xl ${
				newPw ? 'text-emerald-300' : 'text-zinc-200'
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

<div class="flex w-full flex-row items-center justify-between gap-4 px-3 py-2 md:hidden">
	<button
		class="group flex w-full flex-col items-center gap-2 p-4 transition-all duration-300 hover:bg-zinc-900"
		on:click|preventDefault={() => generatePassword($settings, $passwordLength)}
	>
		<span class="text-sm text-zinc-300">Generate</span>
		<RefreshIcon />
	</button>

	<button
		class="group flex w-full flex-col items-center gap-2 p-4 transition-all duration-300 hover:bg-zinc-900"
		on:click|preventDefault={() => copyPassword()}
	>
		<span class="text-sm text-zinc-300">Copy</span>
		<CopyIcon />
	</button>

	<button
		class="group flex w-full flex-col items-center gap-2 p-4 transition-all duration-300 hover:bg-zinc-900"
		on:click|preventDefault={() => IsSettingsOpen.set(!$IsSettingsOpen)}
	>
		<span class="text-sm text-zinc-300">Settings</span>
		<SettingsIcon />
	</button>
</div>
