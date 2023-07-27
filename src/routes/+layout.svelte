<script>
	import '../app.css';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="flex h-screen">
	<div class="m-auto w-full max-w-2xl p-4 md:p-0">
		<slot />
	</div>
</div>
