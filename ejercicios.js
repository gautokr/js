// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    let compareDiezyNueve = 10 >= 9;
    console.log(compareDiezyNueve, '10 es mayor o igual a 9');
}
compareTenAndNine();

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    let compareCero = 0===0;
    console.log(compareCero, '0 es igual a 0');
}
compareZeroAndZero();

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    let sieteOcho = 7 > 8;
    let sieteDiez = 7 < 10;
    console.log(sieteOcho, sieteDiez, '7 no es mayor que 8, sí menor que 10');
}
compareSeven();

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct(){
    let unoProducto = 1500;
    let dosDescuento = 25;
    let tresPlata = 1150;
    
    const COSTO_PRODUCTO = unoProducto-(unoProducto*dosDescuento/100);

    if (COSTO_PRODUCTO<tresPlata || COSTO_PRODUCTO===tresPlata){
        console.log('Puedes comprar el producto');
    }
    else {
        console.log('No puedes comprar el producto');
    }
}
canBuyProduct();

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let varMensaje = 'Hola JavaScript';
    console.log(varMensaje);
}
createMessageVariable();

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let varResultado = 2 + 3;
    console.log(varResultado);
}
createSumVariable();

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true;
    console.log(IS_DISABLED);
}
createDisabledConstant();

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    let capacidad = null;
    console.log(capacidad);
}
createNullVariable();

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    let dinero = undefined;
    console.log(dinero);
}
createUndefinedVariable();

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    let userName = 'nombre';
    console.log(typeof userName);
}
checkUserNameType();


// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    let dogId = 'cadena de texto';
    console.log(typeof dogId);
}
checkDogIdIsString();

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    let logMensaje = 'Hola Mundo';
    console.log(logMensaje);
}
logMessage();

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let logEdad = 30;
    console.log(logEdad);
}
logAge();

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    let primeroMensaje = 'La versión de JavaScript es ';
    let segundoVersion = 2024;
    console.log(primeroMensaje + segundoVersion);
}
logVersion();


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
