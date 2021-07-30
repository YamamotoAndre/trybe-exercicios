// Exercicio 3
console.log("exercício 3")
console.log("")

let quant=5
let print=""
let coluCont=1


for(1;coluCont<=quant;coluCont+=1){
    print="";
    for(let linCont=0;linCont<quant;linCont+=1){
        if(linCont<(quant-coluCont)){
            print+=" "
        }else{
            print+="*"
        }
    }
    console.log(print)
}