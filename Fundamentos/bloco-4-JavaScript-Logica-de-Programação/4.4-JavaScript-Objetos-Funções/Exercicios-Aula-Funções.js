// exercício 1
console.log("")
console.log("exercicio 1")
console.log("")

function soma(a, b) {
    return console.log('O resuldado da soma é iqual a' + ' ' + (a + b))
}

soma(15, 30)
soma(30, 40)

function sub(a, b) {
    return console.log('O resuldado da subtração é iqual a' + ' ' + (a - b))
}
sub(30, 15)
sub(60, 15)
sub(30, 45)

function mult(a, b) {
    return console.log('O resuldado da multiplicação é iqual a' + ' ' + (a * b))
}

mult(30, 20)

function div(a, b) {
    return console.log('O resuldado da divisão é iqual a' + ' ' + (a / b))
}
div(35, 10)

function rest(a, b) {
    return console.log('O resto da divisão é iqual a' + ' ' + (a % b))
}
rest(35, 10)

// exercício 2
console.log("")
console.log("exercicio 2")
console.log("")

function maior(a, b) {
    if (a > b) {
        return console.log('entre os avalores apresentados' + ' ' + a + ' ' + 'é o maior');
    } else {
        return console.log('entre os avalores apresentados' + ' ' + b + ' ' + 'é o maior');
    }
}

maior(30, 40)

// exercício 3
console.log("")
console.log("exercicio 3")
console.log("")

function max(a, b, c) {
    if (a > b && a > c) {
        return console.log('entre os avalores apresentados' + ' ' + a + ' ' + 'é o maior')
    } else if (b > c) {
        return console.log('entre os avalores apresentados' + ' ' + b + ' ' + 'é o maior')
    } else {
        return console.log('entre os avalores apresentados' + ' ' + c + ' ' + 'é o maior')
    }
}

max(40, 80, 130)
max(40, 130, 80)
max(130, 40, 80)
// exercício 4
console.log("")
console.log("exercicio 4")
console.log("")

function posit(a) {
    if (a > 0) {
        return console.log('Positive')
    } else if (a < 0) {
        return console.log('Negative')
    } else return console.log('Zero')
}

posit(10)
posit(40)
posit(0)
posit(-10)
posit(-210)


// exercício 5
console.log("")
console.log("exercicio 5")
console.log("")

function triangulo(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if (a + b + c == 180) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    } else {
        console.log('Erro')
    }
}
triangulo(100, 40, 40)
triangulo(90, 30, 60)
triangulo(-10, 200, -10)
triangulo(50, 50, 50)
triangulo(300, 10, 20)

// exercício 6
console.log("")
console.log("exercicio 6")
console.log("")

function chess(a) {
    let peça = a.toLowerCase()
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
}
chess("rei")
chess("Rei")
chess("Peão")
chess('Torre')
chess('bispo')
chess('ave')

// exercício 7
console.log("")
console.log("exercicio 7")
console.log("")

function nota(a) {
    if (a > 100) {
        console.log("Erro")
    } else if (a >= 90) {
        console.log("Nota A")
    } else if (a >= 80) {
        console.log("Nota B")
    } else if (a >= 70) {
        console.log("Nota C")
    } else if (a >= 60) {
        console.log("Nota D")
    } else if (a >= 50) {
        console.log("Nota E")
    } else if (a >= 0) {
        console.log("Nota F");
    } else {
        console.log("Erro")
    }
}
nota(-10)
nota(120)
nota(30)
nota(50)
nota(70)
nota(80)
nota(90)
nota(110)

// exercício 8
console.log("")
console.log("exercicio 8")
console.log("")

function verificadorSeComjuntoPossuiNumeroPar(a, b, c) {
    let a1 = a % 2
    let b1 = b % 2
    let c1 = c % 2

    if (a1 == 0 || b1 == 0 || c1 == 0) {
        return console.log(true)
    } else {
        return console.log(false)
    }
};

verificadorSeComjuntoPossuiNumeroPar(10, 15, 3)
verificadorSeComjuntoPossuiNumeroPar(5, 7, 9)
verificadorSeComjuntoPossuiNumeroPar(5, 2, 9)
verificadorSeComjuntoPossuiNumeroPar(5, 9, 12)

// exercício 9
console.log("")
console.log("exercicio 9")
console.log("")

function verificadorSeComjuntoPossuiNumeroImpar(a, b, c) {
    let a1 = a % 2
    let b1 = b % 2
    let c1 = c % 2

    if (a1 == 1 || b1 == 1 || c1 == 1) {
        return console.log(true)
    } else {
        return console.log(false)
    }
};

verificadorSeComjuntoPossuiNumeroImpar (2,6,9)
verificadorSeComjuntoPossuiNumeroImpar(2,9,6)
verificadorSeComjuntoPossuiNumeroImpar(9,2,6)
verificadorSeComjuntoPossuiNumeroImpar(2,4,6)
verificadorSeComjuntoPossuiNumeroImpar(3,5,7)

// exercício 10
console.log("")
console.log("exercicio 10")
console.log("")

function mercadoria(custoSemImposto,venda){
    let impostoCusto = custoSemImposto + (0.2 * custoSemImposto);
    let lucro = venda - impostoCusto;
    
    if (venda < 0 || custoSemImposto < 0) {
        console.log("erro venda ou custo com valor negativo")
    } else {
        console.log("lucro de R$" + lucro)
    }
}
mercadoria(110,150)
mercadoria(-110,150)
mercadoria(110,-150)
mercadoria(150,300)

// exercício 11
console.log("")
console.log("exercicio 11")
console.log("")


function salarioLiquido(salarioBruto){

let inss;
let ir;

// INSS
if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08
} else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09
} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11
} else {
    inss = 570.88
};
console.log("Valor do inss R$" + inss)
//IR
let salarioInss = salarioBruto - inss

if (salarioInss <= 1903.98) {
    ir = 0
} else if (salarioInss <= 2826.65) {
    ir = ((salarioInss * 0.075) - 142.80)
} else if (salarioInss <= 3751.05) {
    ir = ((salarioInss * 0.15) - 354, 80)
} else if (salarioInss <= 4664.68) {
    ir = ((salarioInss * 0.225) - 636.13)
} else {
    ir = ((salarioInss * 0.275) - 869.36)
};
console.log("Valor do Imposto de Renda R$" + ir)
let salarioLiquido = salarioBruto - ir - inss

console.log("O salario liquido é de R$" + salarioLiquido)

}

salarioLiquido(5000)
salarioLiquido(4000)
salarioLiquido(3000)
salarioLiquido(2000)
salarioLiquido(1000)
salarioLiquido(8000)