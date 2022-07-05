// Los tipos de datos primitivos son: números, cadenas, booleanos, indefinidos y nulos 
// (también símbolos, aunque estos sean nuevos y su mayor utilización sea para debuggear). 
Booleans
Strings
Numbers
null
undefined
Symbols

true;
"hello";
3.14;
null;
undefined;

// 📋 Booleans:

function acceptsBoolean (value: boolean) {
    //...
}

acceptsBoolean(true);
acceptsBoolean(false);
acceptsBoolean("foo");

// JavaScript también puede convertir implícitamente otros tipos de valores en valores booleanos,
//  entiende estas conversiones y permitirá cualquiera de ellas como parte de una
//   if declaration y otros tipos de expresiones para validarlas.

if (42) {} // 42 => true
if ("") {} // "" => false

// JavaScript solo tiene un tipo de número. Estos valores pueden aparecer como 42 o 3.14. 
// JavaScript también considera Infinity y NaN cómo de tipo números.

// 📋 Numbers: 

function acceptNumber(value: number) {}

acceptNumber(42);
acceptNumber(3.14);
acceptNumber(NaN);
acceptNumber(Infinity);
acceptNumber("foo");

// 📋 Strings:

function aceptsString(value: string) {}
aceptsString("foo"); //correcto
aceptsString(false); // incorrecto


// Los tipos primitivos están en el lenguaje como valores literales.
 
"foo" + 42; //foo42

// Solo aceptará cadenas y números cuando los concatene en cadenas.

"foo" +"foo"; //corrceto
"foo" + 42; //correcto
"foo" + {}; //incorrecto
"foo" + []; //incorrecto

// 📋 Null:
// Este tipo de valor nos ayuda a representar la ausencia de valor.
// 📋 Undefined:
// Se considera como valor de un dato o variable desconocido. Solo hay un valor con este tipo: undefined.
// 🧷 Siempre que creamos una variable, el primer valor que se le asigna a esa variable es undefined.
// Para analizar si el valor de una variable es null,.
//  en este caso, podemos utilizar la comparación de tipo de dato == (compara si el valor es igual) y de === (compara valor y tipo de dato)

let ejemplo = null;
console.log(ejemplo===null); // true
console.log(ejemplo==null); // true

// Si el operador == (compara si el valor es igual) nos imprimirá true. 
// Ya que null es vacío y undifined equivaldría a no definido y entonces, 
// JavaScript interpreta que ambos son relativamente iguales al representar 
// un valor vacío devolviéndonos un true.

let vacio = null;
let sinDefinir;
console.log(vacio===sinDefinir); //false
console.log(vacio==sinDefinir); //true

// Pero en cambio, si comparamos con el operador === (compara valor y tipo de dato)
//  vemos que da false porque como ya hemos visto, aunque en valor para JavaScript sería el 
//  mismo (la ausencia de valor), también estamos comparando por tipo de dato 
// y null vs undefined no son iguales por lo que el resultado arrojado será un false.



// 🔰Básicamente, si está almacenando un dato simple, se almacena de manera simple. 
// 🪐Cuando establece una variable con este tipo, la variable es ese valor exacto y allí finaliza.
// 🪐Si cambia ese valor, la variable simplemente se convierte en un nuevo valor.

let color1 = 'green';
let color2 = 'color1';
color1 = 'purple';
console.log(color1);

console.log(color2);

// A color1 se le asigna el valor de cadena 'green', lo que significa que la variable color1 es esencialmente lo mismo que una cadena 'green'.
// 💥 Cuando usamos color1 para asignar un valor a color2, habría sido lo mismo que si literalmente le asignamos un valor de cadena.
// Entonces, cuando reasignamos color1 el valor no tiene absolutamente ningún impacto en color2.
// ☄️Ambos valores siempre fueron sólo cadenas de ahorro o saving strings, así que no tenían vínculos duraderos entre ellos. Pero este no es el caso con los tipos de referencia.

let car1 = {
    wheels: 4,
    seats: 2,
};
let car2 = car1;
car1.brand = 'ford';
console.log(car1.brand);
console.log(car2.brand);

// Nunca asignamos en car2 una propiedad de marca, pero tiene una. A pesar de que las situaciones se parecen al ejemplo con datos primitivos, el comportamiento es el opuesto.
// 🚗 Eso es porque a car1 nunca se le asignó el valor del objeto, sólo la referencia a él. Entonces, si cambia car1, eso va a alterar el mismo lugar en la memoria que car2 esté mirando en ese momento dado.
// 🚨¡Cuidado!🚨
// Al agregar esa propiedad de marca (brand), alteramos permanentemente el objeto original. Eso se llama mutación.
// 👉 Para evitar esto, solo tenemos que crear una nueva referencia a un nuevo objeto. De esa forma, cada variable apuntará a su propio objeto y no tendrá ninguna superposición.
// Los objetos son mutables, lo que significa que pueden cambiar (a menos que los congele, pero eso lo veremos en otro posteo).
// // 🛸 Sin embargo, los tipos primitivos son inmutables. Es decir, no puede mutar el número 1 en 2, simplemente reemplaza por completo el valor. Lo que significa que no cambiamos nuestro string 'green', directamente lo reemplazó con una nueva cadena, 'purple'

let car1 = {
    wheels: 4,
    seats: 2,
};
let car2 = {...car1};
car1.brand = 'ford';
console.log(car1.brand);
console.log(car2.brand);




