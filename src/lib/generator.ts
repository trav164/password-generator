import { isTouched, password } from "../password";

export const generatePassword = (settings: PasswordSettings[], passwordLength: number) => {
    // https://stackoverflow.com/questions/68617403/how-to-properly-generate-a-random-password-with-the-window-crypto-property

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = "!@#$%&'()*+,^-./:;<=>?[]_`{~}|";

    let chars: string[] = [];
    let generatedPassword = '';

    settings.map((setting) => {
        if (setting.state && setting.name === 'lowercase') chars.push(...lowercase);
        if (setting.state && setting.name === 'uppercase') chars.push(...uppercase);
        if (setting.state && setting.name === 'symbols') chars.push(...symbols);
        if (setting.state && setting.name === 'numbers') chars.push(...numbers);
    });

    const array = new Uint32Array(chars.length);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < passwordLength; i++) {
        generatedPassword += chars[array[i] % chars.length];
    }

    password.set(generatedPassword);
    isTouched.set(true);
};