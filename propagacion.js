// // Operador de Propagación
// //En este artículo vamos a conocer un nuevo operador de Javascript que viene con la versión de ECMAScript 2016 ( ES6 ).
// Se trata del "spread operator" u operador de propagación, 
// que nos puede ayudar a ahorrar unas cuantas líneas de código en muchas ocasiones,
//  así como crear un código más consistente.📓
 
 
// 🔎 Este mismo tiene relación con el operador rest que vimos en otro artículo.
// Lo que hacer es que genera un array a partir de una lista de valores,
// mientras que el operador spread genera una lista de valores a partir de un array.
// Ambos operadores cobraron vida en la versión ECMAScript 2016 (ES6)

// Spread operator en funcionamiento:
// ♾️ Para este ejemplo vamos a usar la función min() de la clase Math de Javascript.
//  Esta función espera recibir 
// cualquier número de parámetros numéricos y devuelve el que tenga el valor menor.

Math.min(2,5,7,1,9); //1

// 👉 Para hacer uso del spread operator necesitamos partir de un array y conseguiremos 
// convertir ese array en una lista de parámetros, de la siguiente manera:

let miArray = [2,5,7,1,9];
let mminimo = Math.min(...miArray); //1

// Tal como se ve, el operador de propagación es idéntico al operador rest. 
// Lo único que aquí lo estamos usando en la invocación de una función.

// Otro uso del spread operator:
// El operador de propagación también se 
// puede usar al definir un array en base a otros arrays. 

let misCursos = ['html', 'css', 'javascript'];

let misProyectos = ['landing page', 'calculadora'];

let miPortfolio = [...misCursos, ...misProyectos, 'idiomas'];

// Para la creación del array "miPortfolio", estamos usando dos veces el operador de propagación.
//  Una para incorporar todos los valores de "misCursos", y luego lo contenido por el array "misProyectos".