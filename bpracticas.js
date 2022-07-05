//  desestructurar un objeto

const user = {
    name:'Felipe',
    age:'30',
    job:'developer'
}

// Destructurar un objeto
const {name, age, job} = user;
console.log(user.name);
console.log(user.age);
console.log(user.job);
// var name;
// console.log(name);
//  name = 'Felipe';
// let name = "pedro";
// console.log(name);

// // asignar un valor a un color
// // amarillo, rojo, verde
// // banana, manazana, sandia, uva

// // Forma optimzada

// const frutas = {
//     amarillo: 'banana',
//     rojo: 'manzana',
//     verde: 'sandia'
// }

// const color = "rosa";
// let fruta = frutas[color] ||  'uva';

// console.log(fruta)
// if (color === "amarillo") {
//   fruta = "banana";
// } else if (color === "rojo") {
//   fruta = "manzana";
// } else if (color === verde) {
//   fruta = "sandia";
// } else {
//   fruta = "uva";
// }

// Holsting a variable

// console.log(1 == 1); //solo compara valores el ==
// console.log(1 === 1); //compara valores y tipos de dato
// console.log(1 == "1"); // '' valor de string es true
// console.log(1 === "1"); // false


