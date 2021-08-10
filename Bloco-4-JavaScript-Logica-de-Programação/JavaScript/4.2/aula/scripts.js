//Aulas sobre Arrays
//Exercicio 1
console.log("")
console.log("exercicio 1")
console.log("")

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercicio 2
console.log("")
console.log("exercicio 2")
console.log("")

let indexOfPortfolio=menu.indexOf("Portfólio") ;

console.log(indexOfPortfolio);

//Exercicio 3
console.log("")
console.log("exercicio 3")
console.log("")

menu.push=["Contato"]
console.log(menu);

// Aula sobre "for"
//Exercicio 1
console.log("")
console.log("exercicio 1")
console.log("")

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let cont=0; cont<groceryList.length; cont+= 1){
console.log(groceryList[cont])
}

// Aula sobre "for/of"
//Exercicio 1
console.log("")
console.log("exercicio 1")
console.log("")

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(nome of names){
    console.log(nome)
}

