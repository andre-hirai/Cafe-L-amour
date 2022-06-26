var torra=document.querySelector("h3.titulo-sec5")
var desc=document.querySelector("p.descricao-sec5")
var bnt=document.querySelector("input#btn-sec5")
var claro=document.querySelector("div#bloco-claro")
var medio=document.querySelector("div#bloco-medio")
var escuro=document.querySelector("div#bloco-escuro")
var form=document.querySelector("input#ipt-form")

function falta(){
    form.innerText = "*Endereço de E-mail"
}

function clara(){
    var claro=document.querySelector("div#bloco-claro")
    torra.innerText= "TORRA CLARA"
    torra.style.color = "#f59727"
    desc.innerText="Na torra clara o café é menos amargo. A suavidade, a acidez e o aroma se destacam neste tipo de torra. Este café é classificado como café especial."
    desc.style.color="#f59727"
    claro.style.height= '30px'
}
function media(){
    torra.innerText="TORRA MÉDIA"
    torra.style.color = "#e75e30"
    desc.innerText="Na torra média, como o próprio nome sugere, a acidez, os açúcares e o amargor ficam bem balanceados. A torra média é indicada para cafés coados."
    desc.style.color="#e75e30"
    medio.style.height= '30px'
}
function escura(){
    torra.innerText="TORRA ESCURA"
    torra.style.color = "#ff3f29"
    desc.innerText="Na torra escura, o café fica forte ou extraforte e por isso a amargura fica bastante presente. Vale destacar que este é o ponto de torra mais complexo por conta do risco de queimar os grãos."
    desc.style.color = "#ff3f29"
    escuro.style.height= '30px'
}
function saiu(){
    claro.style.height= '15px'
}
function saiu2(){
    medio.style.height= '15px'
}
function saiu3(){
    escuro.style.height= '15px'
}

