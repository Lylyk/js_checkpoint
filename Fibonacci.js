function fibonacci(n) {
    const sequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequence.push(0); // Le premier terme est 0
        } else if (i === 1) {
            sequence.push(1); // Le deuxième terme est 1
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]); // Chaque terme est la somme des deux précédents
        }
    }
    return sequence;
}
