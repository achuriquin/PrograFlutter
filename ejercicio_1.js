//el mayor de los numeros
function numeros(n1,n2,n3,mayor,medio){
    n1=prompt("ingrese el numero 1");
    n2=prompt("ingrese numero 2");
    n3=prompt("ingrese numero 3");
    if(n1>n2){
        medio=n1;
    }else{
        medio=n2;
    }
    if(medio>n3){
        mayor=medio
    }else{mayor=n3}
    document.write("el numero mayor es "+mayor)
}
//el segundo mayor de numeros
function numeros2(n1,n2,n3,mayor,medio){
    n1=prompt("ingrese el numero 1");
    n2=prompt("ingrese numero 2");
    n3=prompt("ingrese numero 3");
    if(n1>n2){
        medio=n1;
    }else{
        medio=n2;
    }
    if(medio>n3){
        mayor=medio;
    }else{mayor=n3};
    document.write("el segundo mayor es "+medio);
}
//revertir
function invertir(n,proceso){
    n=prompt("ingrese un numero");
    proceso=n.toString().split("").reverse().join("");
    document.write("el numero inverso es "+proceso);
}

//convertir grados
function Convertir(n,Ho,Mi,Se){
    n=prompt("ingrese los grados")
    Ho=Math.floor(n/60)
    Mi=Math.floor((n/60)/60)
    Se=Math.floor(((n/60)/60)/60)


    document.write("la conversion es"+Ho+Mi+Se)
}
