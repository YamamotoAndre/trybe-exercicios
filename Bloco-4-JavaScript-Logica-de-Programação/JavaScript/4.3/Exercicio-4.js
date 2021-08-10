// Exercicio 4
console.log("exercício 4")
console.log("")

let quant = 35 //somente numeros impares
let print = ""

let coluCont = 1
let linCont = 0

let meio = Math.floor(quant / 2)

let modif = 0

for (1; coluCont <= quant; coluCont += 2) {
    print = "";
    
    let baixo = meio - modif
    let alto = meio + modif

    for (linCont = 0; linCont < quant; linCont += 1) {

        if (linCont >= baixo && linCont <= alto) {
            print += "*"

        } else {
            print += " "

        }

    }
    modif += 1

    console.log(print)
}