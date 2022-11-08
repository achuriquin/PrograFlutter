function informacion(){
    document.getElementById("salidaDatos1").innerHTML="La anécdota en sí fue sobrevivir siete horas en una pequeña furgoneta sentado en un asiento minúsculo sin cinturón, recorriendo carreteras de alta montaña donde en ocasiones teníamos que atravesar ríos que se formaban del deshielo. Carreteras serpenteantes sin quitamiedos y con un asfalto agrietado y lleno de socavones."
    }
    function comidas(){
        document.getElementById("salidaDatos2").innerHTML="El Chiri Uchu es el plato bandera de la ciudad del Cusco que significa ají frío o picante frío en quechua, este potaje que data de la época de los incas y la colonia combina ingredientes de la costa sierra y selva del Perú, lo cual lo convierte en el plato estrella de la cocina cusqueña "
    }
function registro(){
    var correo;
    var nombre;
    var comentario;
    nombre=document.getElementById("nombre").value;
    correo=document.getElementById("correo").value;
    comentario=document.getElementById("comentario").value;
    
    console.log(correo)
    console.log(nombre)
    console.log(comentario)
}