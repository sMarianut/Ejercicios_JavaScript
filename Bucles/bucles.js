// console.log("hola")
// let i = 0

// let num1 = prompt("Ingresa un numerito:")
    // for( i = 1; i <= 10; i++ ){
    //    let num2 = i * num1
    //    console.log(num2)
    // }
    // let num3 = prompt("Ingresa un numero, je")
    // console.log(num3)
//     let num = 0
//     let indice = 0
//     let arrayNum = []
//     do {
//         num = parseInt(prompt("Ingresa un numero:"))
//         if(num !== 0){
//             arrayNum.push(num)
//         }
        
        
        
//     } while (num !== 0);
//     console.log(arrayNum)



//     let ultNum = arrayNum[arrayNum.length - 1]
// console.log(`El ultimo numero ingresado fue ${ultNum}`)

// let numeroIngresado = parseInt(prompt("Ingrese su numero para adivinar"))
// let contador = 1
// if (numeroIngresado == null || numeroIngresado == " ") {
//     alert("No ingresaste un numero")
// } else {
//     while (numeroIngresado != ultNum && numeroIngresado >= 1 && numeroIngresado <= 100) {
//         contador++
//         if (numeroIngresado > ultNum) {
//             alert("ete, ete e ma' grande")
//         } else {
//             alert("ete, e ma' chico")
//         }
//         numeroIngresado = parseInt(prompt("Tirame un numero, a ver si adivinas"))
//     }
//     alert(Ganaste en ${contador} intentos)
// }

// console.log(`Lo adivinaste en ${contador} intentos`)


let divNum = parseInt(prompt("Ingresa un número: "));

console.log("Divisores de", divNum, ":");

for (let i = 1; i <= divNum; i++) {
  if (divNum % i === 0) {
    console.log(i);
  }
}



