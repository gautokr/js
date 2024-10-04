// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
function despedir(){
    console.log("Adiós");
}
despedir();

// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
function multiplicarPorDos(numero){
    return numero * 2;
}
console.log(multiplicarPorDos(25));

// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
function esMayorDeEdad(numero){
    if (numero > 18){
        return true;
    }
    else{   
        return false;
    }
}
console.log(esMayorDeEdad(20));

// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
function multiplicar(a, b){
    return a * b;
}
console.log(multiplicar(2, 3));

// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
function saludarPersonalizado(nombre, apellido){
    return 'Hola, ' + nombre + apellido;
}
console.log(saludarPersonalizado('Juan ', 'Gómez'));

// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
function calcularPotencia(base, exponente){
    return base ** exponente;
}
console.log(calcularPotencia(5, 2));

// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
function restar(a, b){
    return a - b;
}
console.log(restar(15, 10));

// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
function dividir(a, b){
    return a / b;
}
console.log(dividir(15, 5));

// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `multiplicar`.
let expressionMultiplicar = function(a, b){
    return a * b;
}
console.log(multiplicar(2, 3)); 
    
// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
let saludar = function(nombre){
    return 'Hola, ' + nombre;
}
console.log(saludar('María'));

// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
let esPar = function(numero){
    if (numero % 2 === 0 ){
        return true;
    }
    else{
        return false;
    }
}
console.log(esPar(10));

// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
const multiplicarFlecha = (a, b) => {
    return a * b;
}
console.log(multiplicarFlecha(3, 4));

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
const saludarFlecha = (nombre) => {
    return 'Hola ' + nombre;
}
console.log(saludarFlecha('Karen'));

// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = radio => {
    let result = Math.PI * radio * radio;
    return result;
}
console.log(calcularArea(10));

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    if (n === 0){
        return 0;
    }
    let result = n + suma (n-1);
    console.log(result);
    return result;
}
suma(4);

// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n) {
    if (n===0){
        return 0;
    }
    if (n===1){
        return 1;
    }
    let result = fibonacci(n - 1) + fibonacci (n - 2);
    console.log(result);
    return result;
}
fibonacci(4);

// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    if (n===0){
        return 1;
    }
    if (n===1){
        return 1;
    }
    let result = n * factorial(n - 1);
    console.log(result);
    return result;
}
factorial(6);

// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    if (exponente===0){
        return 1;
    }
    if (exponente===1){
        return base;
    }
    let result = base * potencia(base, exponente - 1);
    console.log(result);
    return result;
}
potencia(3, 3);

// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};
