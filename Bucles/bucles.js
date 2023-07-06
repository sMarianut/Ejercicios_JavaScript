console.log("hola")
let i = 0

// let num1 = prompt("Ingresa un numerito:")
    // for( i = 1; i <= 10; i++ ){
    //    let num2 = i * num1
    //    console.log(num2)
    // }
    // let num3 = prompt("Ingresa un numero, je")
    // console.log(num3)
    let num = 0
    let indice = 0
    let arrayNum = []
    do {
        num = parseInt(prompt("Ingresa un numero:"))
        if(num !== 0){
            arrayNum.push(num)
        }
        
        
        
    } while (num !== 0);
    console.log(arrayNum)



    let ultNum = numArray[numArray.length - 1]
console.log(`El ultimo numero ingresado fue ${ultNum}`)

let numeroIngresado = Number(prompt("Ingrese su numero para adivinar"))
let contador = 1
if (numeroIngresado == null || numeroIngresado == " ") {
    alert("No ingresaste un numero")
} else {
    while (numeroIngresado != ultNum && numeroIngresado >= 1 && numeroIngresado <= 100) {
        contador++
        if (numeroIngresado > ultNum) {
            alert("Es mas grande")
        } else {
            alert("Es mas chico")
        }
        numeroIngresado = parseInt(prompt("Ingrese un numero para adivinar"))
    }
    alert(Ganaste en ${contador} intentos)
}

console.log(`Lo adivinaste en ${contador} intentos`)


