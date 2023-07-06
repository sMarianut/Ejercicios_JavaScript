 //Ejercicio 1 - condicionales
//  let num1 = 10 
//  let num2 = 20
//  if(num1 > num2){
//      console.log("El numero 1 es mayor que el dos.")
//  }else{
//     console.log("Es menor que el dos.")
// }


// nro 2

// let num1 = 10
// let num2 = 14
// if(num1 == num2){
//     console.log("Los numeros son iguales.")
// }else{
//     console.log("Los numeros no son iguales,je")
// }

//nro 3
// let num1 = 33
// let num2 = 33
// if (num1 > num2){
//     console.log("Num1 es mayor que num2" + " " + num1)
// }else if(num1<num2){
//     console.log("Num 2 es mayor que num1" + " " + num2)
// }else{
//     console.log("Son iguales")
// }

//Nro 4
//  let num1 = 20
//  let num2 = 15
//  let num3 = 5
//  if( num1 < num2 && num1 < num3 ){
//      console.log("Este es el mas peke" + " " + num1)
//  }else if(num2 < num3 && num2 < num1){
//      console.log("Este es el mas peke" + " " + num2)
//  }else{
//      console.log("Este es el mas peke" + " " + num3)
//  }


//Nro 5  

const marianGamer = {
    
    nombre: "Marian",
    edad: 22,
    moto: "Titan",
    altura: 180,
}
const elGabiGamer = {
    
    nombre: "Gabriel",
    edad: 18,
    moto: "CR 250",
    altura: 169,
}

//  function calculaEdad (edad1, edad2){
//      if(edad1 < edad2){
//          console.log("Gabi es mas viejardo" + " " + edad2)
//      }else{
//          console.log("Marian es mas viejo" + " " + edad1)
//      }
//  }
//  calculaEdad(marianGamer.edad, elGabiGamer.edad)


//  function calcularAltura(alt1, alt2){
//      if(alt1 < alt2){
//          console.log("Gabi es mas alto(?" + " " + alt2)
//      }else{
//          console.log("Marian es mas alto" + " " + alt1)
//      }
//  }
//  calcularAltura(marianGamer.altura, elGabiGamer.altura)

// NRO 6
//     let nombre = prompt("Como te llamas?:")
//     let edad = prompt("Ingresa tu edad, pa:")
//     let altura = prompt("Ingresa cuanto medis:")
//     let vision = prompt("rango de vision (del 1 al 10):")
//     function licencia (){
//         if(edad >= 18 && altura >= 150 && vision >= 8){
//             console.log("Podes aplicar, crack " + nombre)
//         }else{
//             console.log("No aplica")
//         }
//     }
// licencia()

// NRO 7 
//  let mensaje = "BienveniDO A TROPITANGO"
//  let mensaje2 = "Toca la banda"
//  let nombre = prompt("Como te llama?:")
//  function Tropitango(){
//      if(nombre !== "mariano"){
//          let pase = prompt("Que pase tenes?")
//          if (pase !=="vip"){
//              let entrada = prompt("Queres pagar entrada?:")
//              if(entrada =="si"){
//                  let cantidad = prompt("Cuanta plata tenes?")
//                  if (cantidad < 1000 ){
//                      console.log(mensaje2)
//                  }else{
//                  }if(cantidad >= 1000){
//                      console.log(mensaje)
//                  }else{
//                      console.log(mensaje2)
//                  }
//              }else{
//                 console.log(mensaje2)
//              }
//              }else{
//                  console.log(mensaje)
//          }
//      }else{
//          console.log(mensaje)
//      }
//  }
//  Tropitango()
// let nombre1 = prompt ("Ingresar nombre")
// function tropitango(){
//     if (nombre1 !== "Fabrizio"){
//         let pase = prompt ("¿Tenes pase VIP?")
//         if (pase !== "si"){
//             let entrada = prompt ("¿Queres pagar la entrada?")
//                 if (entrada == "si"){
//                     let dinero = prompt ("¿Cuanto dinero tenes?")
//                     if (dinero < 1000){
//                         console.log("No tienes suficiente dinero")
//                     }
//                     else {
//                         console.log("Pasa")
//                     }
//                 }
//         }
//         else {
//             console.log("Pasa")
//         }
//     }
//     else {
//         console.log("Pasa")
//     }
// }
// tropitango()

// Nro 8 

let numeroIncognita = 7
function adivinaAdivinador(){
    let intento1 = prompt("Que numero tengo(1-10)? e.e:")
    if(intento1 == numeroIncognita){
        alert("GANASTE")
    }else{
        let intento2 = prompt("Error. Volve a intentar:")
        if(intento2 == numeroIncognita){
            alert("Ganaste a la segunda!")
        }else{
            let intento3 = prompt("ULTIMO INTENTO:")
            if(intento3 == numeroIncognita){
                alert("A LA ULTIMA, UFFF")
            }else{
                alert("PERDISTEE KJASDHAS")
            }
        }
    }
}   
// adivinaAdivinador()


let edad4 = prompt("Ingrese su edad")
 function descubrirEdad(){
     if (edad4 <= 12){
         console.log("Eres un infante")
     }
     else if (edad4 >= 13 && edad4 <= 18){
         console.log("Eres un adolecente")
     }
     else if (edad4 >= 19 && edad4 <= 45){
         console.log("Eres un mayor joven")
     }
     else if (edad4 > 45 &&  edad4 <= 99){
         console.log("Eres un anciano")
     }
     else {
         console.log("¿Realmente tienes esa edad?")
     }
 }
 descubrirEdad()

 let Player1 = prompt("Player 1 Ingrese piedra, papel o tijeras")
 let Player2 = prompt("Player 2 Ingrese piedra, papel o tijeras") 
 if (Player1 == Player 2) {
     console.log("EMPATE")
 } else {
     if (Player1 == "piedra" && Player2 == "tijeras") {
         console.log("GANADOR Player 1")
     } else {
         if (Player1 == "papel" && Player2 == "piedra") {
             console.log("GANADOR Player 1")
         } else {
             if (Player1 == "tiijeras" && Player2 == "papel") {
                 console.log("GANADOR Player 1")
             } else {
                 console.log("GANADOR Player 2")
             }
         }
     }
 }

 function colorScheme(){
  let color = prompt("A ver, tira un color")
  switch (color){
      case"negro":
      case"blanco":
      console.log("? no tiene color")
      break
      case"verde":
      console.log("El color de la yerba")
      break
      case"azul":
      console.log("COMO EL MAR AZUUUL")
      break
      case"amarillo":
      console.log("Like the Sun, bue hablaba ingles")
      break
      case"rojo":
      console.log("como el INDEPENDIENTE PA")
      break
      case"marron":
      console.log("RRONMA")
      break
      default: console.log("Ahre")
      break
  }
  }
  color()
  function IngresaDNI() {
    let numero = prompt("DNI capo?:");
    let nombre = prompt("y como te llama?");
    let apellido = prompt("Apellido tambien, rey");
    let nacimiento = prompt("Edad?");

    console.log("Tu DNI: " + numero);
    console.log("Tu Nombre crack: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Cuando naciste: " + nacimiento);

    let confirmacion = prompt("Tas seguro senior?");

    if (confirmacion) {
      let dni = {
        numero: numero,
        nombre: nombre,
        apellido: apellido,
        nacimiento: nacimiento
      }
      console.log("Muy bien, te registraste genio");
      console.table(dni);
    } else {
      console.log("Volve en un mes, no te banco mas");
    }
  }

  IngresaDNI();
  