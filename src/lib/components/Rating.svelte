<script lang="ts">
	import { password, isTouched } from '../../password';

	import { passwordStrength } from 'check-password-strength';

	$: textRating = '';

	$: strengthChecker = () => {
		if (!$isTouched) return 0;

		// This rating is very poor and needs improving. Thinking of removing the external lib and creating some sort of internal rating.

		textRating = passwordStrength($password).value;

		switch (textRating) {
			case 'Too weak':
				return 1;
				break;
			case 'Weak':
				return 2;
				break;
			case 'Medium':
				return 3;
				break;
			case 'Strong':
				return 4;
				break;
			default:
				return 0;
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
					strengthChecker() >= index + 1 ? 'bg-emerald-300 outline-emerald-300' : 'outline-zinc-400'
				}`}
			/>
		{/each}
	</div>
</div>
