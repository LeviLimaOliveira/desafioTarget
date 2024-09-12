// Define a string
const inputString = "Hello, Target!";

// Inicializa uma string vazia para armazenar a string invertida
let reversedString = "";

// Itera cada caractere da string de entrada na ordem inversa
for (let i = inputString.length - 1; i >= 0; i--) {
    // Append each character to the reversed string
    reversedString += inputString[i];
}

// Imprime a string invertida
console.log(reversedString);