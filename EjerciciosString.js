// Ejercicio 1

function getNameLength(name) {
  return name.length;
}

console.log(getNameLength("John Wick"));
console.log(getNameLength("Es una prueba!"));
console.log(getNameLength("Carlos"));

// Ejercicio 2

function nameInUpperCase(name) {
  return name.toUpperCase();
}
console.log(nameInUpperCase("John Wick"));
console.log(nameInUpperCase("Es una prueba!"));
console.log(nameInUpperCase("Carlos"));

// Ejercicio 3

function nameInLowerCase(name) {
  return name.toLowerCase();
}
console.log(nameInLowerCase("John Wick"));
console.log(nameInLowerCase("ES UNA PRUEBA"));
console.log(nameInLowerCase("CARLOS"));

// Ejercicio 4

function getFirstCharacter(name) {
  return name[0];
}

console.log(getFirstCharacter("John Wick"));
console.log(getFirstCharacter("ES UNA PRUEBA"));
console.log(getFirstCharacter("CARLOS"));

// Ejercicio 5

function getLastCharacter(name) {
  return name[name.length - 1];
}

console.log(getLastCharacter("John Wick"));
console.log(getLastCharacter("ES UNA PRUEBA"));
console.log(getLastCharacter("CARLOS"));

// Ejercicio 6

function skipFirstCharacter(name) {
  return name.substring(1);
}

console.log(skipFirstCharacter("John Wick"));
console.log(skipFirstCharacter("ES UNA PRUEBA"));
console.log(skipFirstCharacter("CARLOS"));

// Ejercicio 7

function getThreeChars(name) {
  return name.substring(1, 4);
}
console.log(getThreeChars("John Wick"));
console.log(getThreeChars("ES UNA PRUEBA"));
console.log(getThreeChars("CARLOS"));

// Ejercicio 8

function concatInitials(firstNameInitial, lastNameInitial) {
  return firstNameInitial + lastNameInitial;
}

console.log(concatInitials("J", "D"));

// Ejercicio 9

function sayHello(name) {
  return "Hello " + name;
}

console.log(sayHello("Carlos"));

// Ejercicio 10

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(getFullName("John", "Doe"));

// Ejercicio 11

function getMultilineString() {
  return `Los template string
    permiten interpolación`;
}

console.log(getMultilineString());

// Ejercicio 12

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
console.log(capitalize("aaa"));
console.log(capitalize("text"));
console.log(capitalize("BLaaaa"));

// Ejercicio 13

function removeExtraWhitespace(text) {
  return text.trim();
}

console.log(removeExtraWhitespace(" What's up "));

// Ejercicio 14

function amsterdamIsFirstWord(description) {
  if (description.substring(0, 9) == "Amsterdam") {
    return true;
  } else {
    return false;
  }
}
console.log(amsterdamIsFirstWord("Amsterdam es la capital de NL"));
