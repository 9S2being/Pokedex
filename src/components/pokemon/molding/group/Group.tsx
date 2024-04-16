/* eslint-disable @typescript-eslint/no-explicit-any */
 // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values

// Função para dividir o array em grupos
export  const groupLimit = (arr: any[], size: number) => {
    const pokemonArr = [];
    for (let i = 0; i < arr.length; i += size) {
        pokemonArr.push(arr.slice(i, i + size));
    }
    return pokemonArr;
};