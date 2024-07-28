function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Exemple d'utilisation :
const inputSentence = "hello world";
const capitalizedSentence = capitalizeWords(inputSentence);
console.log(capitalizedSentence);  // Sortie: Hello World
