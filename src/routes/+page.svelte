<script>
	import Footer from '$lib/components/Footer.svelte';
	import Generator from '$lib/components/Generator.svelte';
	import PasswordDisplay from '$lib/components/PasswordDisplay.svelte';
	import SleekRating from '$lib/components/SleekRating.svelte';
</script>

<svelte:head>
	<title>Password Generator</title>
</svelte:head>

<main class="flex flex-col gap-6">
	<h1 class="mx-auto text-2xl text-zinc-500">Password Generator</h1>

	<!-- <pre class="text-white">{JSON.stringify($passwordLength)}</pre>
	<pre class="text-white">{JSON.stringify($password)}</pre>
	<pre class="text-white">{JSON.stringify($settings)}</pre> -->
	<div class="flex flex-col">
		<PasswordDisplay />
		<SleekRating />
	</div>

	<Generator />
	<Footer />
</main>
