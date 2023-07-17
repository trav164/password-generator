<script lang="ts">
	$: charLength = 0;

	$: settings = [
		{
			name: 'uppercase',
			label: 'Include Uppercase Letters',
			state: false
		},
		{
			name: 'lowercase',
			label: 'Include Lowercase Letters',
			state: false
		},
		{
			name: 'numbers',
			label: 'Include Numbers',
			state: false
		},
		{
			name: 'symbols',
			label: 'Include Symbols',
			state: true
		}
	];

	const updateSettings = (setting: string) => {
		const toUpdate = settings.find((s) => s.name === setting);

		if (!toUpdate) return;

		toUpdate.state = !toUpdate.state;
	};
</script>

<div class="flex w-full flex-col gap-8 bg-zinc-900 px-10 py-10 tracking-wide">
	<div class="jusify-center font-roboto flex items-center justify-between">
		<span class="text-lg text-zinc-200">Character Length</span>
		<span class="text-3xl text-emerald-200">{charLength}</span>
	</div>

	<div class="flex flex-col gap-8">
		<input
			class="range h-2 w-full cursor-pointer appearance-none bg-zinc-950 accent-zinc-200"
			min="0"
			max="20"
			type="range"
			name="passwordLength"
			bind:value={charLength}
		/>

		<div class="flex flex-col gap-2">
			{#each settings as setting}
				<div class="flex items-center gap-4 text-zinc-200">
					<input
						class="h-4 w-4 appearance-none bg-transparent outline outline-1 outline-zinc-200 checked:bg-emerald-300"
						id="uppercase"
						type="checkbox"
						checked={setting.state}
						on:change={() => updateSettings(setting.name)}
					/>
					<label for="uppercase">{setting.label}</label>
				</div>
			{/each}
		</div>

		<div
			class="flex w-full flex-col items-center justify-between gap-4 bg-zinc-950 px-8 py-6 md:flex-row md:gap-0"
		>
			<span class="text-xs font-bold uppercase text-zinc-400 md:text-base">Strength</span>

			<div class="flex flex-row items-center justify-center gap-3">
				<span class="mr-1 text-sm uppercase text-zinc-300 md:text-2xl">strong</span>

				{#each Array(4) as _, index (index)}
					<div class="h-6 w-1 bg-emerald-300 outline outline-2 outline-emerald-300" />
				{/each}

				<!-- <div class="h-6 w-1 bg-yellow-300 outline outline-2 outline-yellow-300" />
				<div class="h-6 w-1 bg-yellow-300 outline outline-2 outline-yellow-300" />
				<div class="h-6 w-1 bg-yellow-300 outline outline-2 outline-yellow-300" />
				<div class="h-6 w-1 outline outline-2 outline-zinc-400" /> -->
			</div>
		</div>

		<button
			class="flex flex-row items-center justify-center gap-2 bg-emerald-300 py-4 font-semibold uppercase text-zinc-950 outline outline-2 outline-emerald-300 transition-all duration-300 hover:bg-transparent hover:text-emerald-300"
		>
			<span>Generate</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-arrow-narrow-right"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M5 12l14 0" />
				<path d="M15 16l4 -4" />
				<path d="M15 8l4 4" />
			</svg>
		</button>
	</div>
</div>
