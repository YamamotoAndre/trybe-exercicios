// Exercicio Bonus1
console.log("exercício Bonus1")
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

    if (coluCont != quant) {
        for (linCont = 0; linCont < quant; linCont += 1) {

            if (linCont == baixo || linCont == alto) {
                print += "*"

            } else {
                print += " "
            }

        }
        modif += 1
    } else {

        for (linCont = 0; linCont < quant; linCont += 1) {
            print += "*"
        }

    }

    console.log(print)
}


// Exercicio Bonus2
console.log("exercício Bonus2")
console.log("")

let num = 500
let numPrimos = [0, 1,]

for (numVerif = 2; numVerif <= num; numVerif += 1) {
    let verif = ""

    for (numCore = 0; numCore <= numVerif; numCore += 1)
        if ((numVerif % numCore) == 0) {
            verif += "0"
        } else {
            verif += ""
        }
    if (verif == "00") {
        numPrimos.push(numVerif)
    }
}

console.log(numPrimos)