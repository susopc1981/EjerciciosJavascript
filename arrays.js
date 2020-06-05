//Ejercicio 1
//Completa la función para que retorne un array vacio
function getEmptyArray() {
  let arr = [];
  return arr;
}

console.log(getEmptyArray());

//Ejercicio 2
//Completa la función para que retorne el número de elementos que contiene el array que recibimos cómo parámetro

function getNumberOfElements(elem1) {
  const arr = elem1;
  return arr.length;
}
console.log(getNumberOfElements(["a", "b", "c"]));

//Ejercicio 3
//Completa la función para que añada “nuevo dato recibido” al array que recibe como parámetro

function useCalculator(apps) {
  const arr = apps;
  arr.push("nuevo dato recibido");
  return arr;
}

console.log(useCalculator(["Facebook", "Twitter"]));

//Ejercicio 4
//Completa la función para que añada el parámetro recibido app al array que también recibimos por parámetro
function useApp(apps, app) {
  const arr = apps;
  arr.push(app);
  return arr;
}

console.log(useApp(["Clock", "Twitter"], "Firefox"));

//Ejercicio 5
//Completa la función para que retorne el primer elemento del array

function getFirstApp(apps) {
  return apps[0];
}
console.log(getFirstApp(["Chrome", "Clock", "Twitter"]));

//Ejercicio 6
//Completa la función para que retorne el último elemento del array

function getLastApp(apps) {
  return apps[apps.length - 1];
}

console.log(getLastApp(["Chrome", "Clock", "Twitter"]));

// Ejercicio 7
// Crea las siguientes funciones para simular un sistema de autentificación
// login: recibe dos parámetros
// - email
// - password
// Debe retornar el nombre del usuario en caso de que el email que recibimos como parámetros se
// encuentra en el array de usuarios. Si no lo encuentra retorna el mensaje “usuario no encontrado

const users = [
  { email: "cgonzalez@hubescuela.com", pass: "password" },
  { email: "test@test.com", pass: "password" },
];

function access(email, pass) {
  if (getAccesssMail(email, pass) !== "ok")
    return `Usuario o contraseña incorrectos`;
  return `Bienvenido ${email}`;
}
function getAccesssMail(email, pass) {
  if (users.find((value) => value.email === email && value.pass === pass)) {
    return "ok";
  }
}
console.log(access("test@test.com", "password"));

const users = [
  { email: "cgonzalez@hubescuela.com", pass: "password" },
  { email: "test@test.com", pass: "password" },
];
function deleteUser(email) {
  const data = users.find((value) => value.email === email);
  if (data === undefined) {
    return `El usuario ${email} no existe, no se puede eliminar`;
  }
  const dataindex = users.indexOf(email);
  const deletedUsers = users.splice(dataindex, 1); //declarada aquí ainda que me parece que debería declararse no scope global
  console.log(deletedUsers);
  return `El usuario ${deletedUsers[0].email} ha sido eliminado con éxito`;
}
console.log(users);
console.log(deleteUser("test@test.com"));
console.log(users);

const users = [
  { email: "cgonzalez@hubescuela.com", pass: "password" },
  { email: "test@test.com", pass: "password" },
];
function register(name, surname, email, pass, pass2, age) {
  let errors = [];
  getAccessPass(pass, pass2, errors);
  getAccessAge(age, errors);
  getAccesssMail(email, errors);
  if (errors.length !== 0) {
    return errors;
  }
  users.unshift({ email, pass });
  return `El usuario ${email} creado con éxito`;
}
function getAccessPass(pass, pass2, errors) {
  if (pass !== pass2) errors.push("Las contraseñas no coinciden");
  return errors;
}
function getAccessAge(age, errors) {
  if (age < 18) errors.push("Debe ser mayor de 18 años");
  return errors;
}
function getAccesssMail(email, errors) {
  if (users.find((value) => value.email === email))
    errors.push("El email ya existe");
  return errors;
}
console.log(users);
console.log(
  register("suso", "pombo", "test@test1.com", "password", "password", 19)
);
console.log(users);

// RESET PASSWORD

function resetPassword(email) {
  const Mail = changePassword(email);
  const result = addPassword(Mail);
  return result;
}
function changePassword(email) {
  let newmail = replaceData(email, [/@/gi, /[.]/gi], "-");
  return newmail;
}
function addPassword(data) {
  const newData = `https://resetpassword.com/${data}`;
  return newData;
}

function replaceData(email, chars, finalchar) {
  let newMail = email;
  chars.forEach((value) => {
    newMail = newMail.replace(value, finalchar);
  });
  return newMail;
}

console.log(resetPassword("susopc@gmail.com"));

// DASHBOARD LISTAR USUARIOS

const users = [
  { email: "cgonzalez@hubescuela.com", pass: "password" },
  { email: "test@test.com", pass: "password" },
  { email: "juan@hotmail.com", pass: "password" },
];

function listUsers(callback) {
  const arrUsers = addUsers();
  return callback(arrUsers);
}
function addUsers() {
  const arrUsers = [];
  users.forEach((value) => {
    arrUsers.push(value.email);
  });
  return arrUsers;
}
function changeUser(dataUser) {
  dataUser.splice(dataUser.length - 1, 1, "Pendiente de validar");
  return dataUser.join(", ");
}

console.log(listUsers(changeUser));

// SUMAR EDAD

const users = [
  { email: "cgonzalez@hubescuela.com", pass: "password", age: 25 },
  { email: "test@test.com", pass: "password", age: 40 },
  { email: "juan@hotmail.com", pass: "password", age: 51 },
];

function ageCalculator() {
  const totalAge2 = users.reduce((prev, next) => prev + next.age, 0);
  if (totalAge2 === 0) return "No hay ningun usuario registrado";
  return `La edad total de los usuarios registrados es ${totalAge2}`;
}
console.log(ageCalculator());

// LISTADO USUARIOS

const users = [
  { email: "cgonzalez@hubescuela.com", pass: "password", age: 25 },
  { email: "test@test.com", pass: "password", age: 40 },
  { email: "juan@hotmail.com", pass: "password", age: 51 },
  { email: "oscar@hubescuela.com", pass: "password", age: 25 },
  { email: "marta@hubescuela.com", pass: "password", age: 25 },
  { email: "marina@hubescuela.com", pass: "password", age: 25 },
  { email: "joser@hubescuela.com", pass: "password", age: 25 },
  { email: "alejandro@hubescuela.com", pass: "password", age: 25 },
  { email: "ariadna@hubescuela.com", pass: "password", age: 25 },
  { email: "nacho@hubescuela.com", pass: "password", age: 25 },
  { email: "martiño@hubescuela.com", pass: "password", age: 25 },
  { email: "elias@hubescuela.com", pass: "password", age: 25 },
  { email: "pablo@hubescuela.com", pass: "password", age: 25 },
  { email: "suso@hubescuela.com", pass: "password", age: 25 },
  { email: "abel@hubescuela.com", pass: "password", age: 25 },
  { email: "isabel@hubescuela.com", pass: "password", age: 25 },
  { email: "damian@hubescuela.com", pass: "password", age: 25 },
];

function listUsers(countstart, countend) {
  const userPage = users.filter((value, index) => {
    if (index > countstart - 1 && index < countend) return value;
  });
  if (userPage.length < 1) return "No hay usuarios que mostrar";
  return userPage;
}
function showPage(page) {
  const countstart = page * 5 - 5;
  const countend = page * 5;
  return listUsers(countstart, countend);
}

function showLastPage() {
  let countPage = Math.ceil(users.length / 5);
  return showPage(countPage);
}

console.log(showPage(2));
// console.log(showLastPage());

//Calcular año de nacimiento con el año actual

const users = [
  { email: "cgonzalez@hubescuela.com", pass: "password", age: 25 },
  { email: "test@test.com", pass: "password", age: 40 },
  { email: "juan@hotmail.com", pass: "password", age: 51 },
];

function calculateAgeBirth() {
  const result = [];
  users.forEach((value) => {
    const arrUsers = {};
    const birthyear = new Date().getFullYear() - value.age;
    arrUsers.email = value.email;
    arrUsers.birth = birthyear;
    const mixObj = { ...value, ...arrUsers };
    result.push(mixObj);
  });
  console.log(result);
}

calculateAgeBirth();
