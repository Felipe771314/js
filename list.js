// Un array objeto es mutable
const list = []
// list.push(157)
// list.concat([157])
const anotheList = list.concat([157])

// Añadir un elemento mas en un array de elementos
console.log(anotheList)

const persona = {
    name: 'Felipe',
    twitter: '@fvira',
    age: '18',
    links: ['www.felipevirasoro.com.ar', 'www.hola.com.ar']
}

console.log(persona.name)
console.log(persona.links[0])


// El nombre de una propiedad guardada en una constante, como un string
const field = 'twitter'

// como puedo acceder a una propiedad dianmica

// version 1, entra al objeto persona => entra a la propiedad field es una variable con el valor twitter
console.log(persona[field])
// se trasnformara en twitter
persona['twitter'] 
// y eso te va a trasnformar en
persona.twitter

// Version 2, va a intentar acceder al campo con el valor field y va a ser undefined ['field']
console.log(persona['field']) 

// Funciones, function expression a una constante se le acciona una funcion.

const sumar = (operando1 , operando2) => {
    console.log(operando1)
    console.log(operando2)
    return operando1 + operando2
}

const resultado = sumar(2,2)
console.log(sumar(2,2))

const restar = (a,b) => {
    console.log(a)
    console.log(b)
    return a - b
}

const op1 = 8
const op2 = 2

console.log(restar(op1, op2))

// Declaracion, javascript lee todo el documento y las funciones las genera en memoria

function dividir (a, b) {
    return a % b
}

// Para comparar ver el valor y no solo el tipo se usan los tres ===, si usamos dos == va a mirar solo el valor

