<script lang="ts">
	import { passwordStrength } from '../../password';

	$: textRating = '';
	$: $passwordStrength, calculateTextRating();

	const calculateTextRating = () => {
		switch ($passwordStrength) {
			case 0:
				textRating = 'Too Weak';
			case 1:
				textRating = 'Weak';
				break;
			case 2:
				textRating = 'Medium';
				break;
			case 3:
				textRating = 'Strong';
				break;
			case 4:
				textRating = 'Very Strong';
				break;
			default:
				break;
		}
	};
</script>

<div
	class="flex w-full flex-col items-center justify-between gap-4 bg-zinc-950 px-8 py-6 md:flex-row md:gap-0"
>
	<span class="text-xs font-bold uppercase text-zinc-400 md:text-base">Strength</span>

	<div class="flex flex-row items-center justify-center gap-3">
		<span class="mr-1 text-sm uppercase text-zinc-300 md:text-2xl">{textRating}</span>

		{#each Array(4) as _, index (index)}
			<div
				class={`h-6 w-1 outline outline-2  ${
					$passwordStrength >= index + 1 ? 'bg-emerald-300 outline-emerald-300' : 'outline-zinc-400'
				}`}
			/>
		{/each}
	</div>
</div>
