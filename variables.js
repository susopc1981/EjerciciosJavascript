// Ejercicio 1
// Define una variable count dentro de la funcion, incrementa su valor en uno y retornala

function defineVariable() {
  let count = 0;
  count = ++count;
  return count;
}
console.log(defineVariable());

//Ejercicio 2
//DEfine una variable que no pueda ser reasignada y dale el valor de 2020

function defineVAriable() {
  const year = 2020;
}

//Ejercicio 3

function defineVariable2(valor) {
  return valor > 18 ? true : false;
}
console.log(defineVariable2(15));

// Ejercicio 4
// Crear unha funcion que calcule si un numero aleatorio e mayor de 0,5

function calculateNumber() {
  let number = Math.random();
  number > 0.5
    ? console.log(`${number} es mayor de 0.5`)
    : console.log(`${number} es menor de 0.5`);
}
calculateNumber();

//Crear una funcion anonima e unha arrowfunction

const defineVariable3 = (valor) => {
  if (valor > 18) {
    return true;
  } else return false;
};
console.log(defineVariable3(20));

const defineVariable = function () {
  let count = 0;
  count = ++count;
  return count;
};
console.log(defineVariable());

//Una funcion que reciva 3 parametros. en funcion del tercer parametro que es un operador hacemos la operacion

function calculator(par1, par2, oper) {
  switch (oper) {
    case "+": {
      return par1 + par2;
    }
    case "-": {
      return par1 - par2;
    }
    case "*": {
      return par1 * par2;
    }
    case "/": {
      return par1 / par2;
    }
    default:
      return "Este operador no esta soportado";
  }
}
console.log(calculator(4, 8, "-"));

function calculator(par1, par2, oper) {
  if (oper === "+") return par1 + par2;
  if (oper === "-") return par1 - par2;
  if (oper === "/") return par1 / par2;
  if (oper === "*") return par1 * par2;
  return "Este operador no esta soportado";
}

console.log(calculator(4, 8, "*"));

function calculator(par1, par2, oper) {
  if (oper === "+") return opSum(par1, par2);
  if (oper === "-") return opRest(par1, par2);
  if (oper === "/") return opMult(par1, par2);
  if (oper === "*") return opDivide(par1, par2);
  return "Este operador no esta soportado";
}

function opSum(par1, par2) {
  return par1 + par2;
}
function opRest(par1, par2) {
  return par1 - par2;
}
function opMult(par1, par2) {
  return par1 * par2;
}
function opDivide(par1, par2) {
  return par1 / par2;
}
console.log(calculator(4, 8, "+"));
console.log(calculator(4, 8, "-"));
console.log(calculator(4, 8, "*"));
console.log(calculator(4, 8, "/"));
console.log(calculator(4, 8, "?"));

// Ejercicio
// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del numero, te devuelva la siguiente clasificacion:
// 0-4 Insuficiente
// 5-6 Suficiente
// 7-8 Notable
//9-10 Sobresaliente

function evalExam(note) {
  switch (true) {
    case note < 5:
      return "Insuficiente";
    case note >= 5 && note < 7:
      return "Suficiente";
    case note >= 7 && note < 9:
      return "Notable";
    case note >= 9 && note <= 10:
      return "Sobresaliente";
    default:
      return "Esa nota no existe";
  }
}

console.log(evalExam(7));
console.log(evalExam(6, 1));
console.log(evalExam(10));
console.log(evalExam(3));
console.log(evalExam(9));
console.log(evalExam(11));

function evalExam2(note) {
  if (note < 5) return noteIns(note);
  if (note >= 5 && note < 7) return noteSuf(note);
  if (note >= 7 && note < 9) return noteNotable(note);
  if (note >= 9 && note <= 10) return noteSobre(note);
  return `${note} no es una nota valida`;
}

function noteSobre(note) {
  return `${note} es un sobresaliente`;
}

function noteNotable(note) {
  return `${note} es un notable`;
}

function noteSuf(note) {
  return `${note} es un suficiente`;
}

function noteIns(note) {
  return `${note} es un insuficiente`;
}

console.log(evalExam2(7));
console.log(evalExam2(6.1));
console.log(evalExam2(10));
console.log(evalExam2(3));
console.log(evalExam2(9));
console.log(evalExam2(11));
