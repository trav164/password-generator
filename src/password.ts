import { writable } from "svelte/store";

export const password = writable("P4$5W0rD!");

export const settings = writable([
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
        state: false
    }
]);

export const passwordLength = writable(0);