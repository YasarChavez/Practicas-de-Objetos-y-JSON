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
    }
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
let filtrados = nuevoArreglo.filter((anio)=> anio.anio >=2010);
console.log("filtrados :>> ", filtrados);
console.log("filtrados.length :>> ", filtrados.length);
