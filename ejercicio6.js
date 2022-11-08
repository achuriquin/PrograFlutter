function SumaImpares(){

    let numero=prompt('Ingrese el numero:','');

        if(numero > 1000 && numero < 9999){

            let total = 0;
            if(numero % 2){
                var y = 0;
                numero.split('').forEach(numero => y += parseInt(numero));
                total = y;

                alert("la suma de digitos es: " + total);
            }else{
                alert("el numero es par")
            }       
        }else{
            alert("el numero esta fuera de rango");
        }
}
/////////////////////////////////////////////////
function ejercicio4(){
    let primo = true;
    let numero=prompt('Ingrese el numero:','');

    if (numero == 0 || numero == 1 || numero == 4) {
        primo = false;
    };
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) {
            primo = false;
        }
    }

    if(numero > 1000 && numero < 9999){
        if(primo){
            if(numero % 2){
                var y = 0;
                numero.split('').forEach(numero => y += parseInt(numero));
                total = y;
                alert("la suma de digitos es: " + total);
            }else{
                alert("el numero es par");
            }       
        }else{
            alert("el numero no es primo");
        }
    }else{
        alert("el numero esta fuera de rango");
    } 
}