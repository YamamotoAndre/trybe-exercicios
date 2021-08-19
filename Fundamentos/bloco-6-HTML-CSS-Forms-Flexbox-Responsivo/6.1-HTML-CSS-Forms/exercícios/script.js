const listaDeEstados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
const listaDeAbrebiação = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]
// criar Estado Select

function criadorDeSelect(origem) {
    let seletorPai = document.querySelector("#seletorDeEstado")
    for (let i = 0; i < listaDeEstados.length; i += 1) {
        let criarSelect = document.createElement("option");
        criarSelect.value = listaDeAbrebiação[i];
        criarSelect.innerText = listaDeEstados[i];
        seletorPai.appendChild(criarSelect);
    }
}
criadorDeSelect();

// verificador de data

const bEnvio = document.querySelector("#botãoDeEnvio");

function verificadorDeData(origem) {
    event.preventDefault();
    let data = document.querySelector("#Data-de-Inicio").value;
    let diaMesAno = data.split("/")

    let verDia = verificadorDia(parseInt(diaMesAno[0]))
    let verMes = verificadorMes(parseInt(diaMesAno[1]))
    let verAno = verificadorAno(parseInt(diaMesAno[2]))


    if (verDia && verMes && verAno) {
        criarElemento()
    }
}

function verificadorDia(origem) {

    if (isNaN(origem)) {
        alert("A data precisa ser colocada em numeros")
    } else if (origem <= 0 || origem > 31) {
        alert("Dia invalido!")
    }
}

function verificadorMes(origem) {

    if (isNaN(origem)) {
        alert("A data precisa ser colocada em numeros")
    } else if (origem <= 0 || origem > 12) {
        alert("Mês invalido!")
    }
}

function verificadorAno(origem) {

    if (isNaN(origem)) {
        alert("A data precisa ser colocada em numeros")
    } else if (origem <= 0) {
        alert("Ano invalido!")
    }

}

bEnvio.addEventListener("click", botEx)

// implementando as validações

const corpoPai = document.querySelector("#registro");

function criarElemento(origem) {
    let info = {
        nome: document.querySelector("#nome").value,
        CPF: document.querySelector("#CPF").value,
        eMail: document.querySelector("#Email").value,
        Endereço: document.querySelector("#Endereço").value,
        Cidade: document.querySelector("#cidade").value,
        Estado: document.querySelector("#seletorDeEstado").value,
        Resumo: document.querySelector("#Resumo").value,
        Cargo: document.querySelector("#Cargo").value,
        Descrição: document.querySelector("#Descrição").value,
        Data: document.querySelector("#Data-de-Inicio").value,
    }

   
    let criarDiv = document.createElement("div");
    criarDiv.classList.add("infoSalve");
    criarDiv.innerHTML = `<p>${info.nome}</p><br>
 <p>CPF: ${info.CPF}</p><br>
 <p>e-mail: ${info.eMail}</p><br><br>
 <p>${info.Cidade} ${info.Estado}</p>
 <p>Cargo:${info.Cargo} Descriçao:${info.Descrição}</p><br><br>
 <p>Inicio em ${info.Data} <br></p>
 <p>${info.Resumo}</p>`

    corpoPai.appendChild(criarDiv)
}


// Execulção

function botEx() {
    verificadorDeData();
    criarElemento();
}

//butão limpeza

function limparPagina(){
    document.querySelector("#nome").value = "",
    document.querySelector("#CPF").value = "",
    document.querySelector("#Email").value,
    document.querySelector("#Endereço").value = "",
    document.querySelector("#cidade").value = "",
    document.querySelector("#Resumo").value = "",
    document.querySelector("#Cargo").value = "",
    document.querySelector("#Descrição").value = "",
    document.querySelector("#Data-de-Inicio").value = "",

    excluirDiv()
}

function excluirDiv(origem){
let conjuntoDasDiv = document.querySelectorAll(".infoSalve")
for (i=0; i< conjuntoDasDiv.length; i+=1){
    let divAtual = conjuntoDasDiv[i]
corpoPai.removeChild(divAtual)
}
}

const bLimpeza = document.querySelector("#botãoDeLimpeza");

bLimpeza.addEventListener("click", limparPagina)