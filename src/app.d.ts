// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}


	}

	interface PasswordSettings {
		// name: 'uppercase' | 'lowercase' | 'symbols' | 'numbers';
		name: string;
		label: string;
		state: boolean;
	}
}

export { };
