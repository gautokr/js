// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    return 10>=9;
}
console.log(compareTenAndNine(), '10 es mayor o igual a 9');

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    return 0===0;
}
console.log(compareZeroAndZero(), '0 es igual a 0');

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    return 7>8 && 7<10;
}
console.log(compareSeven(), '7 no es mayor que 8, sí menor que 10');

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct(producto, descuento, plata){
    const COSTO_PRODUCTO = producto-(producto*descuento/100);

    if (COSTO_PRODUCTO<plata || COSTO_PRODUCTO===plata){
        console.log('Puedes comprar el producto');
    }
    else {
        console.log('No puedes comprar el producto');
    }
}
console.log(canBuyProduct(1500, 25, 1150));

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let varMensaje = 'Hola JavaScript';
    return varMensaje
}
console.log(createMessageVariable());

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let varResultado = 2 + 3;
    return varResultado;
}
console.log(createSumVariable());

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true;
    return IS_DISABLED;
}
console.log(createDisabledConstant());

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    let capacidad = null;
    return capacidad;
}
console.log(createNullVariable());

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    let dinero = undefined;
    return dinero;
}
console.log(createUndefinedVariable());

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    let userName = 'nombre';
    return typeof userName;
}
console.log(checkUserNameType());


// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    let dogId = 'cadena de texto';
    return typeof dogId;
}
console.log(checkDogIdIsString())

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    let logMensaje = 'Hola Mundo';
    return logMensaje;
}
console.log(logMessage());

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let logEdad = 30;
    return logEdad;
}
console.log(logAge());

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    let primeroMensaje = 'La versión de JavaScript es ';
    let segundoVersion = 2024;
    return primeroMensaje + segundoVersion;
}
console.log(logVersion());


// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};
