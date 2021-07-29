// exercício 1
console.log("")
console.log("exercicio 1")
console.log("")

let a = 4;
let b = 8;

let adição = a + b;
console.log("a soma é = " + adição);

let subtração = a - b;
console.log("a subtração é = " + subtração);

let multiplicação = (a * b);
console.log("a multiplicação é = " + multiplicação);

let divisão = a / b
console.log("a divisão é = " + divisão)

let modulo = a % b
console.log("o resto da divisão é = " + modulo)

// exercício 2
console.log("")
console.log("exercicio 2")
console.log("")

let c = 15
let d = 25

if (c > d) {
    console.log("o maior numero é " + c)
} else {
    console.log("o maior numero é " + d)
}

// exercício 3
console.log("")
console.log("exercicio 3")
console.log("")

let x = 35
let y = 20
let z = 45

if (x > y) {
    console.log("o maior numero é " + x)
} else if (y > z) {
    console.log("o maior numero é " + y)
} else {
    console.log("o maior numero é " + z)
}

// exercício 4
console.log("")
console.log("exercicio 4")
console.log("")

let w = -1

if (w > 0) {
    console.log("positivo")
} else if (w < 0) {
    console.log("negativo")
} else {
    console.log("é 0")
}

// exercício 5
console.log("")
console.log("exercicio 5")
console.log("")

let a1 = 40;
let a2 = 90;
let a3 = 50;

if (a1 < 0) {
    console.log("Erro, angulo negativo")
} else if (a2 < 0) {
    console.log("Erro, angulo negativo")
} else if (a3 < 0) {
    console.log("Erro, angulo negativo")
} else if (a1 + a2 + a3 == 180) {
    console.log("True")
} else {
    console.log("false")
}

// exercício 6
console.log("")
console.log("exercicio 6")
console.log("")

let peça = "Peão".toLowerCase()

switch (peça) {
    case "peão":
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
        break;

    case "torre":
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
        break;

    case "bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
        break;

    case "cavalo":
        console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;

    case "rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;
    case "rei":
        console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;
    default:
        console.log("erro");
        break;
}

// exercício 7
console.log("")
console.log("exercicio 7")
console.log("")

let nota = 79;

if (nota >= 90) {
    console.log("Nota A")
} else if (nota >= 80) {
    console.log("Nota B")
} else if (nota >= 70) {
    console.log("Nota C")
} else if (nota >= 60) {
    console.log("Nota D")
} else if (nota >= 50) {
    console.log("Nota E")
} else {
    console.log("Nota F");
}
// exercício 8
console.log("")
console.log("exercicio 8")
console.log("")

let q = 7;
let q1 = 5;
let q2 = 9;

let qw = q % 2
let qw1 = q1 % 2
let qw2 = q2 % 2

let result = [qw, qw1, qw2]

let idx = result.indexOf(0)

if (idx != -1) {
    console.log("true")
} else {
    console.log("false")
}

// exercício 9
console.log("")
console.log("exercicio 9")
console.log("")

let n1 = 4;
let n2 = 4;
let n3 = 4;

let nr1 = n1 % 2
let nr2 = n2 % 2
let nr3 = n3 % 2

let result1 = [nr1, nr2, nr3]
let idx1 = result1.indexOf(1)

if (idx1 != -1) {
    console.log("true")
} else {
    console.log("false")
}

// exercício 10
console.log("")
console.log("exercicio 10")
console.log("")

let custoSemImposto=100;
let venda=150;

let impostoCusto=custoSemImposto+(0.2*custoSemImposto);
let lucro=venda-impostoCusto;

if (venda<0){
    console.log("erro valor de venda negativo")
}else if(custoSemImposto<0){
    console.log("erro valor do custo negativo")
}else {
    console.log("lucro de R$"+lucro)
}

// exercício 11
console.log("")
console.log("exercicio 11")
console.log("")

let salarioBruto= 5000
let inss;
let ir;

// INSS
if (salarioBruto<=1556.94){
    inss=salarioBruto*0.08
}else if(salarioBruto<=2594.92){
    inss=salarioBruto*0.09
}else if(salarioBruto<=5189.82){
    inss=salarioBruto*0.11
}else{
    inss=570.88
};
console.log ("Valor do inss R$"+inss)
//IR
let salarioInss= salarioBruto-inss

if(salarioInss<=1903.98){
    ir=0
}else if(salarioInss<=2826.65){
    ir=((salarioInss*0.075)-142.80)
}else if (salarioInss<=3751.05){
    ir=((salarioInss*0.15)-354,80)
}else if(salarioInss<=4664.68){
    ir=((salarioInss*0.225)-636.13)
}else{
    ir=((salarioInss*0.275)-869.36)
};
console.log ("Valor do Imposto de Renda R$"+ir)
let salarioLiquido=salarioBruto-ir-inss

console.log("O salario liquido é de R$"+salarioLiquido)