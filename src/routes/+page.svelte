<script>
	import Generator from '$lib/components/Generator.svelte';
	import Password from '$lib/components/Password.svelte';
</script>

<main class="flex flex-col gap-6">
	<h1 class="mx-auto text-2xl text-zinc-600">Password Generator</h1>
	<Password />
	<Generator />
</main>
