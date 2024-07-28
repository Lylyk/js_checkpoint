function reverseString(str) {
    // Divise la chaîne en un tableau de caractères
    let charArray = str.split('');
    // Inverse l'ordre des éléments dans le tableau
    charArray.reverse();
    // Joint les éléments du tableau en une seule chaîne
    let reversedStr = charArray.join('');
    return reversedStr;
}

// Exemple d'utilisation
const inputString = "Bonjour";
const reversedString = reverseString(inputString);
console.log(reversedString);  // Sortie: ruojnoB
