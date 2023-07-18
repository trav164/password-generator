<script lang="ts">
	import CopyIcon from '$lib/assets/CopyIcon.svelte';
	import RefreshIcon from '$lib/assets/RefreshIcon.svelte';
	import SettingsIcon from '$lib/assets/SettingsIcon.svelte';
	import { generatePassword } from '$lib/generator';
	import { password, settings, passwordLength, IsSettingsOpen } from '../../password';

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
		<div class="flex flex-row gap-6">
			<button on:click|preventDefault={() => generatePassword($settings, $passwordLength)}>
				<RefreshIcon />
			</button>

			<CopyIcon />

			<button on:click|preventDefault={() => IsSettingsOpen.set(!$IsSettingsOpen)}>
				<SettingsIcon />
			</button>
		</div>
	</button>
</div>
