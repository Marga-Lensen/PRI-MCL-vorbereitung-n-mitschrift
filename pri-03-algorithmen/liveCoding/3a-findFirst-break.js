// Aufgabe: finde den ersten Zahl, der durch 5 teilbar ist

let numbers = [12, 16, 22, 20, 33, 99, 7, 40, 75];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
        console.log('First divisible by 5:', numbers[i]);  // 20
        /* break;  */ // Early exit!
    }
}