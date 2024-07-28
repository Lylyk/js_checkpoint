function isPrime(num) {
    if (num <= 1) {
        return false; // Les nombres <= 1 ne sont pas premiers
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Si num est divisible par i, ce n'est pas un nombre premier
        }
    }
    return true; // Si aucun diviseur n'a été trouvé, c'est un nombre premier
}

// Exemple d'utilisation :
const number = 7;
const result = isPrime(number);
console.log(result);  // Sortie: true
