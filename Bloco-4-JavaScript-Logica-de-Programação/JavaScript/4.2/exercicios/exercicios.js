let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1
console.log("")
console.log("exercicio 1")
console.log("")

for (num of numbers) {
    console.log(num)
}
//Exercicio 2
console.log("")
console.log("exercicio 2")
console.log("")

let result = 0;
for (num of numbers) {
    result = result + num
}
console.log(result)

//Exercicio 3
console.log("")
console.log("exercicio 3")
console.log("")


let media = result / numbers.length
console.log(media)

//Exercicio 4
console.log("")
console.log("exercicio 4")
console.log("")

if (media > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

//Exercicio 5
console.log("")
console.log("exercicio 5")
console.log("")
let maior = 0;

for (num of numbers) {
    if (num > maior) {
        maior = num
    } else {
        maior = maior
    }
}
console.log(maior)

//Exercicio 6
console.log("")
console.log("exercicio 6")
console.log("")
let quantidadeImpares = 0;

for (num of numbers) {
    if (num % 2 == 1) {
        quantidadeImpares += 1
    } else {
        quantidadeImpares = quantidadeImpares
    }
}

if (quantidadeImpares == 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log("neste conjutos " + quantidadeImpares + " são numeros impares")
}

//Exercicio 7
console.log("")
console.log("exercicio 7")
console.log("")

let menor = maior;

for (num of numbers) {
    if (num < menor) {
        menor = num
    } else {
        menor = menor
    }
}
console.log(menor)

//Exercicio 8
console.log("")
console.log("exercicio 8")
console.log("")

let limit=25
let count=[]
for(let int=0; int<=limit; int += 1){
    count.push(int)
}
console.log(count)

//Exercicio 9
console.log("")
console.log("exercicio 9")
console.log("")

let div=0

for(num of count){
    div=num%2
    console.log(div)
}

