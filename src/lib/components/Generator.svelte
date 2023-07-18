<script lang="ts">
	import { passwordLength, settings, password, isTouched } from '../../password';
	import Rating from './Rating.svelte';
	import Settings from './Settings.svelte';

	const generate = () => {
		// https://stackoverflow.com/questions/68617403/how-to-properly-generate-a-random-password-with-the-window-crypto-property

		const lowercase = 'abcdefghijklmnopqrstuvwxyz';
		const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const numbers = '0123456789';
		const symbols = "!@#$%&'()*+,^-./:;<=>?[]_`{~}|";

		let chars: string[] = [];
		let generatedPassword = '';

		$settings.map((setting) => {
			if (setting.state && setting.name === 'lowercase') chars.push(...lowercase);
			if (setting.state && setting.name === 'uppercase') chars.push(...uppercase);
			if (setting.state && setting.name === 'symbols') chars.push(...symbols);
			if (setting.state && setting.name === 'numbers') chars.push(...numbers);
		});

		const array = new Uint32Array(chars.length);
		window.crypto.getRandomValues(array);

		for (let i = 0; i < $passwordLength; i++) {
			generatedPassword += chars[array[i] % chars.length];
		}

		password.set(generatedPassword);
		isTouched.set(true);
	};

	$: isValid = $settings.some((x) => {
		if (x.state === true && $passwordLength > 0) return true;
	});
</script>

<div class="flex w-full flex-col gap-8 bg-zinc-900 px-10 py-10 tracking-wide">
	<Settings />

	<Rating />

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
