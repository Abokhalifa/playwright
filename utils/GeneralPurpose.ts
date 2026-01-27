export function generateRandomText(length:number, characters?:string):string{
    const defaultCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charSet = characters || defaultCharacters;
    let result = '';

    for (let i = 0 ; i<length ; i++){
        const randomIndex = Math.floor(Math.random() * charSet.length);
        result += charSet.charAt(randomIndex);
    }

    return result;
}