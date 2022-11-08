function condicionalIF(){
    var a=parseInt(document.getElementById("txt1").value);
    var b=parseInt(document.getElementById("txt2").value);
    var c=parseInt(document.getElementById("txt3").value);
    var d=parseInt(document.getElementById("txt4").value);
    var e=parseInt(document.getElementById("txt5").value);
    var Nu1 
    if(a>b){
        if(a>c){
            if(a>d){
                if(a>e){
                    Nu1=a
                }else{
                    if(b>c){
                        if(b>d){
                            if(b>e)Nu1=b
                        }
                    }
                }
            }else{
                if(c>d){
                    if(c>e){
                        Nu1=c
                    }
                }
            }
        }else{
            if(d>e){
                Nu1=d
            }
        }
    }else{
        Nu1=e
    }
    document.getElementById("txtRp").innerHTML=Nu1;
}
function condicional_mayor(){
    var a=parseInt(document.getElementById("txt1").value);
    var b=parseInt(document.getElementById("txt2").value);
    var c=parseInt(document.getElementById("txt3").value);
    var d=parseInt(document.getElementById("txt4").value);
    var e=parseInt(document.getElementById("txt5").value);
    var mnMA=a;
    if(b>mnMA)mnMA=b;
    if(c>mnMA)mnMA=c;
    if(d>mnMA)mnMA=d;
    if(e>mnMA)mnMA=e;
    document.getElementById("txtRp").innerHTML=mnMA;

}
function condicional_menor(){
    var a=parseInt(document.getElementById("txt1").value);
    var b=parseInt(document.getElementById("txt2").value);
    var c=parseInt(document.getElementById("txt3").value);
    var d=parseInt(document.getElementById("txt4").value);
    var e=parseInt(document.getElementById("txt5").value);
    var mnME=a;
    if(b<mnME)mnME=b;
    if(c<mnME)mnME=c;
    if(d<mnME)mnME=d;
    if(e<mnME)mnME=e;
    document.getElementById("txtRp").innerHTML=mnME;

}
function segundo_menor(){
    var a=parseInt(document.getElementById("txt1").value);
    var b=parseInt(document.getElementById("txt2").value);
    var c=parseInt(document.getElementById("txt3").value);
    var d=parseInt(document.getElementById("txt4").value);
    var e=parseInt(document.getElementById("txt5").value);
    var mn=a;
    var nMa=condicional_mayor()
    var nMe=condicional_menor()
    if(a<nMa && a>nMe)mn=nMa;
    if(c<mn)mn=c;
    if(d<mn)mn=d;
    if(e<mn)mn=e;
    //ocument.getElementById("txtRp1").innerHTML=mn;

}