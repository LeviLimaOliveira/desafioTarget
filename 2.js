function isFibonacciNumber(num) {
    let a = 0;
    let b = 1;

    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    if (b === num) {
        return true;
    } else {
        return false;
    }
}

const number = 13; // Substitua pelo número desejado
const isFibonacci = isFibonacciNumber(number);

if (isFibonacci) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}