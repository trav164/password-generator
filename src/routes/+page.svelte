<script>
	import Footer from '$lib/components/Footer.svelte';
	import Generator from '$lib/components/Generator.svelte';
	import PasswordDisplay from '$lib/components/PasswordDisplay.svelte';
	import { generatePassword } from '$lib/generator';
	import { onMount } from 'svelte';
	import { passwordLength, settings } from '../password';

	onMount(() => {
		generatePassword($settings, $passwordLength);
	});
</script>

<svelte:head>
	<title>Password Generator</title>
</svelte:head>

<main class="flex flex-col justify-start gap-6">
	<h1 class="mx-auto text-2xl text-zinc-400">Password Generator</h1>
	<div class="flex flex-col">
		<PasswordDisplay />
	</div>

	<Generator />
	<Footer />
</main>
