    //Queremos tomar la hora actual y para ello nos vamos a servir del objeto flecha date()
    //date() es un objeto predefinido en js que contiene todos los datos de fecha y hora actualizados
    //De este objeto podemos obtener, por ejemplo, la hora actual de cualquier zona horaria y el dia de la semana en el que estamos

    
    
    
function clock(){

    let fecha = new Date()//creamos una copia del objeto fecha

    //obtenemos hora actual
    let hora = fecha.getHours();//Esto nos dara un resultado de 0 - 23
    let minutos = fecha.getMinutes();//0 - 59
    let segundos = fecha.getSeconds();//0 - 59
    let contexto='AM';

    let reloj = document.getElementById('pantallaReloj');

    //damos formato a los numeros
    if(hora>12){
        hora=hora - 12;//si la hora es 13, cambiara a 1
        contexto='AM'
    }//formato am o pm
    if(hora<10){
        hora='0'+hora;
    }
    if(minutos<10){
        minutos='0'+minutos;
    }
    if(segundos<10){
        segundos='0'+segundos;
    }
    let texto = hora + ':'+minutos+':'+segundos+contexto;

    reloj.innerHTML = texto;
    //le damos a la función la posibilidad de que se ejecute en bucle
    setTimeout(clock, 1000);
    //el timeuot ejecuta la funcion indicada, despues de una oausa en los ms indicados
    //al final de a cunción, clock() se va a ejecutar a si tras una pausa de 1 seg(1000 ms). Creando así un bucle.
}
//Inicializar la función
clock()

function clock2(){
    let fecha2 = new Date()

    let dia = fecha2.getDay();
    const dias=[
        'Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','S    abado'
    ]

    let diaMes = fecha2.getDate();    

    let mes=fecha2.getMonth();
    const meses=[
        'enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'
    ]
    document.getElementById('fechaActual').innerHTML=meses[mes]
    document.getElementById('fechaActual').innerHTML=dias[dia]

    let año=fecha2.getFullYear();

    fechaCompleta=document.getElementById('fechaActual');
    let texto=dias[dia]+', '+diaMes+' de '+meses[mes]+' de '+año;
    fechaCompleta.innerHTML=texto;
}
clock2();