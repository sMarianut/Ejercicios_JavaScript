
// function saludar(nombre){
//     const mensaje = `Hola ${nombre}`
//     console.log(mensaje)
// }
// saludar("Mariano")




// function multiplicar(num1, num2){
//     let numerito1 = prompt("Ingrese un numero:")
//     let numerito2 = prompt("Ingrese otro numero:")
//     console.log(numerito1 * numerito2)
// }
// multiplicar()

// function areaTriangulo(numeroB, numeroA){
//     let resultado = numeroB * numeroA / 2
//     console.log(resultado)
// }
// areaTriangulo(5, 3)


// function perimetroTriangulo(lado1, lado2, lado3){
//     let resultadoP = lado1 + lado2 + lado3
//     console.log(resultadoP)
// }
// perimetroTriangulo(4, 5, 6,)


// function calcularPrecio(precio, cantidad){
//     let total = precio * cantidad
//     console.log(total)
//     if(cantidad>= 10){
//         total = total - (total * 0.1)
//     }else if(cantidad >= 20){
//         total = total - (total * 0.2)
//     }
//     return total
// }
// calcularPrecio(12, 22)
// calcularPrecio(12, 11)

// function esMayorDeEdad(edad){
//     let edad1 = prompt("Ingrese su edad:")
//     let mensaje = "Sos mayor de edad crack"
//     let mensaje1 = "No sos mayor, :("
//     if(edad1 >= 18){
//         console.log(mensaje)
//     }else if(edad1 < 18){
//         console.log(mensaje1)
//     }
// }
// esMayorDeEdad()


function calcularImpuesto(ingreso){
    if(ingreso <= 10000){
        ingreso = ingreso - (ingreso * 0.1)
    }else if(ingreso > 10000 || ingreso <= 20000){
ingreso = ingreso - (ingreso * 0.15)
    }else if(ingreso > 20000){
        ingreso = ingreso - (ingreso * 0.2)
    }
    console.log(ingreso)
}
calcularImpuesto(22600)
calcularImpuesto(15000)
calcularImpuesto(9500)
