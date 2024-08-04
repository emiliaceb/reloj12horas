function obtenerFechayHora(){
    const fechaActual= new Date;
    const diasSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    //obtener fecha
    const fecha = document.getElementById('fecha');
    fecha.innerHTML= `${diasSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
    //obtener hora
    const horaReloj = document.getElementById('hora');
    let hora = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();
    let ampm = hora >= 12 ? 'PM' : 'AM';
    hora = hora % 12;
    hora = hora ? hora : 12;

    if(hora<10){
        hora = `0${hora}`
    }
    if(minutos<10){
        minutos = `0${minutos}`
    }
    
    if(segundos<10){
        segundos = `0${segundos}`
    }
    horaReloj.innerHTML=`${hora}:${minutos}:${segundos} ${ampm}`
    //arreglas cuando sea menpor a 10 y tenga un solo digito, concatenarle un 0
}
setInterval(obtenerFechayHora,1000);


