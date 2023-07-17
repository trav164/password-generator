<script>
	import Generator from '$lib/components/Generator.svelte';
	import PasswordDisplay from '$lib/components/PasswordDisplay.svelte';
	import { password, settings, passwordLength } from '../password';
</script>

<main class="flex flex-col gap-6">
	<h1 class="mx-auto text-2xl text-zinc-600">Password Generator</h1>

	<pre class="text-white">{JSON.stringify($passwordLength)}</pre>
	<pre class="text-white">{JSON.stringify($password)}</pre>
	<pre class="text-white">{JSON.stringify($settings)}</pre>
	<PasswordDisplay />
	<Generator />
</main>
