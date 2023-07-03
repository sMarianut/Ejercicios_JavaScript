let miNombre = "Mariano"
let miApellido = "Silva"
let miEdad = 22
let miMascota = "Homero"
let edadMascota = 2
console.log (miNombre, miApellido, miEdad, miMascota, edadMascota)
let nombreCompleto = miNombre + miApellido
let textoPresentacion = `Hola, soy ${nombreCompleto} y tengo ${miEdad} anios. tengo una mascota llamada ${miMascota}
que tiene ${edadMascota} anio de edad!`
console.log (textoPresentacion)
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota
console.log(sumaEdades, restaEdades, productoEdades, divisionEdades)

let alumno = {
    nombre : "Mariano",
    apellido : "Silva",
    edad : 22,
    altura : 1.80,
    estudiante : true
   
}
console.table(alumno)
let mascota ={
    nombre : "Homero",
    color : "negro w/blanco",
    raza : "bulldog",
    edad : 1,
    tamano : "Chikito"
}
console.table(mascota)
const frutas = ["Manzana", "Banana", "Naranja", "Arandanos", "Sandia"]
 console.log(frutas)
 console.log(frutas[0])
 console.log(frutas[1])
 console.log(frutas[2])
 console.log(frutas[3])
 console.log(frutas[4]);

 const numeros = [1, 2, 3, 4, 5]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4]);

const familia = ["Hermano", "Hermana", "Papa", "Mama", "Tia"]

console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

let textoAleatorio = `${(frutas[1])} ${(numeros[3])} ${(familia[4])}`
console.log(textoAleatorio)

// let edad = prompt("Ingresa tu edad:");
// let soyMayordeEdad = edad >= 18;
// console.log("El valor de soyMayordeEdad es: " + soyMayordeEdad);

// let edad1 = prompt("Ingresa tu edad:");
// let edad2 = prompt("Ingresa la edad de tu companero:");
// let soyMayordeEdad = edad1 > edad2
// let soyMenor = edad1 < edad2
// let edadesIguales = edad1 == edad2
// console.log("Soy mayor que mi compa" + " " + soyMayordeEdad)
// console.log("Soy menor que mi compa" + " " + soyMenor)
// console.log("Tenemos la misma edad!" + " " + edadesIguales);


let edad3 = prompt("Ingrese su edad:")
let altura = prompt("Ingrese su altura:")
let puedeSubir = edad3 > 6 && altura >= 120
console.log("Puede subir porque" + " " + edad3 + " es mayor que 6 " + "y " + "Mide " + altura)









