    // var usuario1 = document.querySelector('#nomecad').value
    // var contem = document.querySelector("#contacad").value
    // var senha1 = document.querySelector("#senhacad").value
    // var senha3 = document.querySelector("#confsenha").value
    

// function cadastrar( ){
//     var card2 = document.querySelector("#Entrada")
//     card2.removeAttribute("class")
//     card2.setAttribute("class","container")
//     var card1 = document.querySelector("#cadastro")
//     card1.setAttribute("class","desabilite")   
// }
const car = document.getElementById("carrossel")
const imag = car.getElementsByTagName("img");
let corredor = 0;

function mudarimagem( ){
    imag[corredor].classList.remove("active");
    corredor = (corredor+1)%imag.length;
    imag[corredor].classList.add("active");
}
setInterval(mudarimagem, 5000);

var usucad
var secad
var ema
var telcad

var usulog
var senlog

function cadast( ){
    secad = document.querySelector('#senhacad').value
    usucad = document.querySelector('#nomecad').value
    ema = document.querySelector('#email').value
    telcad = document.querySelector('#tel').value
}
function Entrar( ){
    var usuario = document.querySelector('#nomeent').value
    var senha = document.querySelector('#senhaent').value
    if (usuario==usucad && senha==secad){
        location.href = "direc.html"
    }else{
        alert("revise os dados e tente novamente, caso o erro continue, redefina seu cadastro")
    }
}
//Ligar Bomba
var n = false
function niv( ){
    const imgniv = document.getElementById("B1")
    n = !n
    if (n==true){
    imgniv.src="img/nivat.png"
    }else{
        n=0
        imgniv.src="img/niv.png"
    }
}

//Ligar Humidificador
var h = false
function hum( ){
    const imghum = document.getElementById("B2")
    h = !h
    if (h==true){
    imghum.src="img/humtiv.png"
    }else{
        h=false
        imghum.src="img/hum.png"
    }
}

//Ligar Aquecedor
var t = false
function temp( ){
    const imgt = document.getElementById("B3")
    t = !t
    if (t==true){
    imgt.src="img/tempativ.png"
    }else{
        t=false
        imgt.src="img/temp.png"
    }
}

//ligar irrigação
var i = false
function pluv( ){
    const imgi = document.getElementById("B4")
    i = !i
    if (i==true){
    imgi.src="img/pluvalt.png"
    }else{
        i=false
        imgi.src="img/pluvbai.png"
    }
}

function inic( ){
    location.href = "direc.html"
}
function on( ){
    n=false
    h=false
    t=false
    i=false
    niv( )
    hum( )
    temp( )
    pluv( )
}
function off( ){
    n=true
    h=true
    t=true
    i=true
    niv( )
    hum( )
    temp( )
    pluv( )
}