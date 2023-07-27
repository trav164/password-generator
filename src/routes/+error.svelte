<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col gap-4 text-center text-zinc-200">
	<h1 class="text-9xl text-zinc-200">{$page.status}</h1>
	<h2 class="text-3xl">{$page?.error?.message}</h2>
	<p>
		We're sorry, but the page you're looking for seems to be missing. It might have been moved,
		deleted, or never existed in the first place.
	</p>

	<a
		href="/"
		class="mt-4 p-2 text-xl font-semibold text-zinc-200 outline outline-1 outline-zinc-300 transition-all duration-300 hover:bg-emerald-300 hover:text-zinc-950 hover:outline-emerald-300"
		>Home</a
	>
</div>
