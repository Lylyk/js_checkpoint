function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Exemple d'utilisation :
const numbers = [3, 5, 7, 2, 8];
const totalSum = sumArray(numbers);
console.log(totalSum);  // Sortie: 25
