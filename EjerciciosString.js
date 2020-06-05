// Ejercicio 1
// Completa la función getNameLength de modo que retorne la longitud del parámetro name
// que recibe

function getNameLength(name) {
  return name.length;
}

console.log(getNameLength("John Wick"));
console.log(getNameLength("Es una prueba!"));
console.log(getNameLength("Carlos"));

// Ejercicio 2
// Completa la función nameInUpperCase de modo que retorne el parámetro name que recibe en
// mayusculas

function nameInUpperCase(name) {
  return name.toUpperCase();
}
console.log(nameInUpperCase("John Wick"));
console.log(nameInUpperCase("Es una prueba!"));
console.log(nameInUpperCase("Carlos"));

// Ejercicio 3
// Completa la función nameInLowerCase de modo que retorne el parámetro name que recibe en
// minúsculas

function nameInLowerCase(name) {
  return name.toLowerCase();
}
console.log(nameInLowerCase("John Wick"));
console.log(nameInLowerCase("ES UNA PRUEBA"));
console.log(nameInLowerCase("CARLOS"));

// Ejercicio 4
// Completa la función getFirstCharacter de modo que retorne el primer carácter del parámetro
// name que recibe

function getFirstCharacter(name) {
  return name[0];
}

console.log(getFirstCharacter("John Wick"));
console.log(getFirstCharacter("ES UNA PRUEBA"));
console.log(getFirstCharacter("CARLOS"));

// Ejercicio 5
// Completa la función getLastCharacter de modo que retorne el último carácter del parámetro
// name que recibe

function getLastCharacter(name) {
  return name[name.length - 1];
}

console.log(getLastCharacter("John Wick"));
console.log(getLastCharacter("ES UNA PRUEBA"));
console.log(getLastCharacter("CARLOS"));

// Ejercicio 6
// Completa la función skipFirstCharacter de modo que retorne todos los caracteres exceptuando
// el primero

function skipFirstCharacter(name) {
  return name.substring(1);
}

console.log(skipFirstCharacter("John Wick"));
console.log(skipFirstCharacter("ES UNA PRUEBA"));
console.log(skipFirstCharacter("CARLOS"));

// Ejercicio 7
// Completa la función getThreeChars de modo que retorne 3 caracteres empezando en el segundo
// carácter del parámetro name que recibe la función

function getThreeChars(name) {
  return name.substring(1, 4);
}
console.log(getThreeChars("John Wick"));
console.log(getThreeChars("ES UNA PRUEBA"));
console.log(getThreeChars("CARLOS"));

// Ejercicio 8
// Completa la función concatInitials de modo que retorne la primera inicial seguida de la
// segunda inicial que pasamos cómo parámetro

function concatInitials(firstNameInitial, lastNameInitial) {
  return firstNameInitial + lastNameInitial;
}

console.log(concatInitials("J", "D"));

// Ejercicio 9
// Completa la función sayHello de modo que retorne el texto ‘hola ’ seguido de la variables
// que pasamos por parámetro

function sayHello(name) {
  return "Hello " + name;
}

console.log(sayHello("Carlos"));

// Ejercicio 10
// Completa la función sayHello de modo que retorne el nombre completo usando la
// interpolación de variables

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(getFullName("John", "Doe"));

// Ejercicio 11
// Completa la función getMultilineString de modo que retorne el siguiente texto:
//
// Los template string
// permiten interpolación

function getMultilineString() {
  return `Los template string
    permiten interpolación`;
}

console.log(getMultilineString());

// Ejercicio 12
// Completa la función capitalize de modo que retorne el texto que recibe cómo parámetro
// capitalizado. No existe el método capitalize en Javascript, por lo que deberás
// escribirlo tú.

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
console.log(capitalize("aaa"));
console.log(capitalize("text"));
console.log(capitalize("BLaaaa"));

// Ejercicio 13
// Completa la función removeExtraWhitespace de modo que retorne el texto sin espacios en
// blanco al inicio o final del texto

function removeExtraWhitespace(text) {
  return text.trim();
}

console.log(removeExtraWhitespace(" What's up "));

// Ejercicio 14
// Completa la función amsterdamIsFirstWord de modo que retorne true si la primera palabra del
// parámetro description es Amsterdam, en caso contrario debe retornar false

function amsterdamIsFirstWord(description) {
  return description.substring(0, 9).toUpperCase() === "AMSTERDAM";
}
console.log(amsterdamIsFirstWord("Amsterdam es la capital de NL"));
