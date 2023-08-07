// JavaScript tiene una serie de métodos para trabajar con listas. Aquí están algunos de los métodos más comunes, junto con un ejemplo de cómo se usan:

//     push(): Agrega un elemento al final de una lista.

// const myList = [1, 2, 3];
// myList.push(4);
// console.log(myList); // [1, 2, 3, 4]

//     pop(): Elimina el último elemento de una lista.

// const myList = [1, 2, 3, 4];
// const lastElement = myList.pop();
// console.log(myList); // [1, 2, 3]
// console.log(lastElement); // 4

//     unshift(): Agrega un elemento al principio de una lista.

// const myList = [1, 2, 3];
// myList.unshift(0);
// console.log(myList); // [0, 1, 2, 3]

//     shift(): Elimina el primer elemento de una lista.

// const myList = [0, 1, 2, 3];
// const firstElement = myList.shift();
// console.log(myList); // [1, 2, 3]
// console.log(firstElement); // 0

//     indexOf(): Busca un elemento en una lista y devuelve su índice.

// const myList = [1, 2, 3, 4];
// const index = myList.indexOf(3);
// console.log(index); // 2

//     lastIndexOf(): Busca un elemento en una lista y devuelve su índice, empezando por el final.

// const myList = [1, 2, 3, 4];
// const index = myList.lastIndexOf(3);
// console.log(index); // 3

//     slice(): Devuelve una nueva lista que es una copia de una parte de la lista original.

// const myList = [1, 2, 3, 4, 5];
// const newList = myList.slice(2, 4);
// console.log(newList); // [3, 4]

//     concat(): Concatena dos listas en una nueva lista.

// const myList1 = [1, 2, 3];
// const myList2 = [4, 5, 6];
// const newList = myList1.concat(myList2);
// console.log(newList); // [1, 2, 3, 4, 5, 6]

//     sort(): Ordena los elementos de una lista.

// const myList = [3, 1, 2, 5, 4];
// myList.sort();
// console.log(myList); // [1, 2, 3, 4, 5]

//     reverse(): Invierte el orden de los elementos de una lista.

// const myList = [3, 1, 2, 5, 4];
// myList.reverse();
// console.log(myList); // [5, 4, 2, 1, 3]

//     filter(): Devuelve una nueva lista que contiene solo los elementos que cumplen una determinada condición.

// const myList = [1, 2, 3, 4, 5];
// const newList = myList.filter(number => number % 2 === 0);
// console.log(newList); // [2, 4]

//     map(): Devuelve una nueva lista que contiene los resultados de aplicar una función a cada elemento de la lista original.

// const myList = [1, 2, 3, 4, 5];
// const newList = myList.map(number => number * 2);
// console.log(newList); // [2, 4, 6, 8, 10]

///////////////////////////////////////////////////////////////////////////////////////////

let autos = [
    {
        name: "AUTO1",
        price: 100,
        id: 1,
        anio: 2020,
    },
    {
        name: "AUTO2",
        price: 200,
        id: 2,
        anio: 2010,
    },
    {
        name: "AUTO3",
        price: 300,
        id: 3,
        anio: 2000,
    },
    {
        name: "AUTO4",
        price: 400,
        id: 4,
        anio: 2011,
    },
    {
        name: "AUTO5",
        price: 500,
        id: 5,
        anio: 2012,
    },
    {
        name: "AUTO6",
        price: 600,
        id: 6,
        anio: 2005,
    },
    {
        name: "AUTO7",
        price: 700,
        id: 7,
        anio: 2006,
    },
];

console.log("autos :>> ", autos);
console.log("autos.length :>> ", autos.length);
console.log("type  :>> ", typeof autos);
// Pasamos el objeto a string
let paquete = JSON.stringify(autos);

console.log("paquete :>> ", paquete);
console.log("paquete.length :>> ", paquete.length);
console.log("type  :>> ", typeof paquete);
// Pasamos el string a objeto
let nuevoArreglo = JSON.parse(paquete);

console.log("nuevoArreglo :>> ", nuevoArreglo);
console.log("nuevoArreglo.length :>> ", nuevoArreglo.length);
console.log("type :>> ", typeof nuevoArreglo);

// Pasamos el arreglo a un nuevo arreglo filtrado
let filtrados = nuevoArreglo.filter((anio) => anio.anio >= 2012);
console.log("filtrados :>> ", filtrados);
console.log("filtrados.length :>> ", filtrados.length);

filtrados.forEach((element) => {
    alert(element.name + "\n" + element.price + "\n" + element.anio);
});