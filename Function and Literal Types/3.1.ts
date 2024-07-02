function findMaxPositive(...numbers: number[]): number {
    const positiveNumbers = numbers.filter(num => num > 0);
    return Math.max(...positiveNumbers);
}

console.log(findMaxPositive(1, -2, 3, 4, -5));
