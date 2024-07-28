function factorial(n) {
    if (n < 0) {
        return "Erreur : le factoriel n'est pas défini pour les nombres négatifs.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Exemple d'utilisation :
const number = 5;
const fact = factorial(number);
console.log(fact);  // Sortie: 120
