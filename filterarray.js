function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Exemple d'utilisation :
const numbers = [3, 5, 7, 2, 8];
const isEven = (num) => num % 2 === 0;
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers);  // Sortie: [2, 8]
