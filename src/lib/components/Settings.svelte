<script lang="ts">
	import { settings, passwordLength } from '../../password';
</script>

<div class="flex flex-col gap-8">
	<div class="jusify-center font-roboto flex items-center justify-between">
		<span class="text-lg text-zinc-200">Character Length</span>
		<span class="text-3xl text-emerald-300">{$passwordLength}</span>
	</div>

	<input
		class="range h-2 w-full cursor-pointer appearance-none bg-zinc-950 accent-zinc-200 active:accent-emerald-300"
		min="0"
		max="20"
		type="range"
		name="passwordLength"
		bind:value={$passwordLength}
	/>

	<div class="flex flex-col gap-2">
		{#each $settings as setting}
			<div class="flex items-center gap-4 text-zinc-200">
				<input
					class="h-4 w-4 appearance-none bg-transparent outline outline-1 outline-zinc-200 checked:bg-emerald-300"
					id="uppercase"
					type="checkbox"
					bind:checked={setting.state}
				/>
				<label for="uppercase">{setting.label}</label>
			</div>
		{/each}
	</div>
</div>
