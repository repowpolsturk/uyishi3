const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

function findCommonElements(array1: number[], array2: number[]): number[] {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    return [...set1].filter(num => set2.has(num)).sort();
}

console.log(findCommonElements(array1, array2)); 
