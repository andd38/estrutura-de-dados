let str = "Hello, world!";
let arr = str.split(""); // Converte a string em um array de caracteres*
arr[7] = 'W'; // Modifica um caracter* específico
str = arr.join(""); // Converte o array de volta para string
console.log(str)