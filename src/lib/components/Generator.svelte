<script lang="ts">
	import { passwordLength, settings, password } from '../../password';
	import Settings from './Settings.svelte';

	const generate = () => {
		// https://stackoverflow.com/questions/70706563/javascript-password-generator-sometimes-not-including-character-selections

		// THIS METHOD IS A MESS AND NEEDS IMPROVING
		const lowercase = 'abcdefghijklmnopqrstuvwxyz';
		const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const numbers = '0123456789';
		const symbols = "!@#$%&'()*+,^-./:;<=>?[]_`{~}|";

		const shuffleStr = (str: string) =>
			str
				.split('')
				.sort(() => 0.5 - Math.random())
				.join('');

		const factor = Math.ceil(
			$passwordLength / Object.values($settings).reduce((a, b) => (b ? a + 1 : a), 0)
		);

		let str = '';
		str += shuffleStr(lowercase.repeat(factor)).substring(0, factor);

		$settings.map((s) => {
			if (s.state && s.name === 'lowercase') {
				str += shuffleStr(lowercase.repeat(factor)).substring(0, factor);
			}

			if (s.state && s.name === 'uppercase') {
				str += shuffleStr(uppercase.repeat(factor)).substring(0, factor);
			}

			if (s.state && s.name === 'symbols') {
				str += shuffleStr(symbols.repeat(factor)).substring(0, factor);
			}

			if (s.state && s.name === 'numbers') {
				str += shuffleStr(numbers.repeat(factor)).substring(0, factor);
			}
		});

		password.set(shuffleStr(str).substring(0, $passwordLength));
	};

	$: isValid = $settings.some((x) => {
		if (x.state === true && $passwordLength > 0) return true;
	});
</script>

<!-- <pre class="text-white">{JSON.stringify(isValid)}</pre> -->
<div class="flex w-full flex-col gap-8 bg-zinc-900 px-10 py-10 tracking-wide">
	<Settings />

	<button
		class={`flex flex-row items-center justify-center gap-2  py-4 font-semibold uppercase outline outline-2 transition-all duration-300  ${
			!isValid
				? 'bg-zinc-800 text-zinc-500 outline-zinc-700'
				: 'bg-emerald-300 text-zinc-950 outline-emerald-300 hover:bg-transparent hover:text-emerald-300 '
		}`}
		disabled={!isValid}
		on:click={() => generate()}
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
