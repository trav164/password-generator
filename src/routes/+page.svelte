<script>
	import Footer from '$lib/components/Footer.svelte';
	import Generator from '$lib/components/Generator.svelte';
	import PasswordDisplay from '$lib/components/PasswordDisplay.svelte';
</script>

<svelte:head>
	<title>Password Generator</title>
</svelte:head>

<main class="flex flex-col gap-6">
	<h1 class="mx-auto text-2xl text-zinc-500">Password Generator</h1>
	<div class="flex flex-col">
		<PasswordDisplay />
	</div>

	<Generator />
	<Footer />
</main>
