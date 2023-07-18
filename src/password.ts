import { writable } from "svelte/store";

export const password = writable("P4$5W0rD!");

export const IsSettingsOpen = writable(false);

export const settings = writable([
    {
        name: 'uppercase',
        label: 'Include Uppercase Letters',
        state: true
    },
    {
        name: 'lowercase',
        label: 'Include Lowercase Letters',
        state: true
    },
    {
        name: 'numbers',
        label: 'Include Numbers',
        state: true
    },
    {
        name: 'symbols',
        label: 'Include Symbols',
        state: true
    }
]);

export const passwordLength = writable(12);

export const isTouched = writable(false);