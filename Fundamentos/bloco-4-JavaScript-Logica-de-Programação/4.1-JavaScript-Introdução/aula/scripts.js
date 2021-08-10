// exercício 1
const myName = "Andre L. S. Yamamoto ";
const birthCity = "Cafelândia ";
let birthYear = "1994";
console.log(myName + birthCity + birthYear);

// exercício 2
let base = 5;
let altura = 8;
let area = base * altura;
let perimetro = (2 * base) + (2 * altura);

console.log("o retangulo possui " + area + " m e " + perimetro + " m de perimetro");

// exercício 3

let nota = 70;

if (nota > 80) {
    console.log("Parabéns, você foi aprovada(o)!")
}
else if (nota > 60) {
    console.log("Você está na nossa lista de espera")
}
else {
    console.log("Você foi reprovada(o)")
};
// exercício 4

let estadoCandidato= "u";

switch (estadoCandidato) {
    case "ap":
        console.log("parabêns você foi aprovado(a)");
        break;

    case "ls":
        console.log("Foi quase, porem você esta na nossa lista de espera");
        break;

    case "rp":
        console.log("Você foi reprovada(o), tente novamente.");
        break;
        default:
            console.log("não se aplica");
}


