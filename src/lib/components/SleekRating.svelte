<script lang="ts">
	import { passwordStrength } from '../../password';
</script>

<div class="flex w-full">
	<progress
		max="4"
		value={$passwordStrength}
		class="w-full [&::-moz-progress-bar]:bg-emerald-300 [&::-webkit-progress-bar]:h-1 [&::-webkit-progress-bar]:bg-zinc-600 [&::-webkit-progress-value]:bg-emerald-300"
	/>
</div>
