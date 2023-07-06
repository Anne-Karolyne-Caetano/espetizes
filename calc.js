var r1
var r2
var r3

var ind1
var ind2
var ind3

var cap1
var cap2
var cap3

var apresent1 = document.getElementById("resres")
var apresent2 = document.getElementById("resind")
var apresent3 = document.getElementById("rescap")

//RESISTORES
function pegarvalores_res( ){
var re1 = document.getElementById("res1")
r1= Number(re1.value)

var re2 = document.getElementById("res2")
r2= Number(re2.value)

var re3 = document.getElementById("res3")
r3= Number(re3.value)
}
function resistSerie( ){
pegarvalores_res( )
result=r1+r2+r3
apresent1.innerHTML=(result)
}
function resistParalela( ){
    pegarvalores_res( )
    if(r1 > 0 && r2>0 && r3>0){
        result=1/(1/r1+1/r2+1/r3)
        apresent1.innerHTML=(result.toFixed(2))
    }
    if(r1 > 0 && r2>0 && r3==0){
        result=1/(1/r1+1/r2)
        apresent1.innerHTML=(result.toFixed(2))
    }
   
}

//INDUTORES
function pegarvalores_ind( ){
    var in1 = document.getElementById("ind1")
    ind1= Number(in1.value)
    
    var in2 = document.getElementById("ind2")
    ind2= Number(in2.value)
    
    var in3 = document.getElementById("ind3")
    ind3= Number(in3.value)
    }
    function indutSerie( ){
    pegarvalores_ind( )
    resultind=ind1+ind2+ind3
    apresent2.innerHTML=(resultind)
    }
    function indutParalela( ){
        pegarvalores_ind( )
       if (ind1>0 && ind2>0 && ind3>0) {
            resultind=1/(1/ind1+1/ind2+1/ind3)
            apresent2.innerHTML=(resultind.toFixed(2))
       } 
       if(ind1>0 && ind2>0 && ind3==0){
        resultind=1/(1/ind1+1/ind2)
        apresent2.innerHTML=(resultind.toFixed(2))
       }
    }

    //CAPACITORES
    function pegarvalores_cap( ){
        var cp1 = document.getElementById("cap1")
        cap1= Number(cp1.value)

        var cp2 = document.getElementById("cap2")
        cap2= Number(cp2.value)
        
        var cp3 = document.getElementById("cap3")
        cap3= Number(cp3.value)
        }
        function capacitParalela( ){
        pegarvalores_cap( )
        resultcap=cap1+cap2+cap3
        apresent3.innerHTML=(resultcap)
        }
        function capacitSerie( ){
            pegarvalores_cap( )
            if(cap1 > 0 && cap2>0 && cap3>0){
                resultcap=1/(1/cap1+1/cap2+1/cap3)
                apresent3.innerHTML=(resultcap.toFixed(2))
            }
            if(cap1 > 0 && cap2>0 && cap3==0){
                resultcap=1/(1/cap1/cap2)
                apresent3.innerHTML=(resultcap.toFixed(2))
            }
        }