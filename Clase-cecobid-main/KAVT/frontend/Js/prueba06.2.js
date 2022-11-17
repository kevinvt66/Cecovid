let fecha=new Date();
document.getElementById('testDate').innerHTML=fecha;
//Creando objetos fecha
//con un string
let fechaString=new Date('february 07, 1999 04:15:00');
let fechaStringShort=new Date('1999-02-07');
document.getElementById('dateString').innerHTML=fechaString;
//con números:
let fechaNum=new Date(2001, 06, 23);
document.getElementById('dateNumber').innerHTML=fechaNum;
//con milisegundos
setInterval(() => {
    document.getElementById('fechaMS').innerHTML=new Date().getTime();
}, 1);
document.getElementById('fechaMS2').innerHTML=new Date('1965-07-04').getTime();
//Imprimir fechas con dateSTring
document.getElementById('fechaDateString').innerHTML=new Date().toDateString();
//Métodos GET
//construir un string para imprimir la feha como queramos
//'Hoy es el 07 de noviembre del año 2022
function getFecha() {
    let fecha=new Date();

    let diaSemana=fecha.getDay();
    let diaMes=fecha.getDay();
    let mes=fecha.getMonth();
    let año=fecha.getFullYear();


    //if (diaSemana=0){
    //    diaSemana='domingo'}
    //if (diaSemana=1){
    //    diaSemana='lunes'}
    //Este metodo no es recomendable por el excesivo uso del if y seria demasiado largo
    //mejor usar el metodo array[]
    //Un array es un tipo especial de variables que puede guardar varios tipos de datos
    const dias=[
        'domingo',
        'lunes',
        'martes',
        'miercoles',
        'jueves',
        'viernes',
        'sabado'
    ]
    const meses=[
        'enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'
    ]
    document.getElementById('fechaGet').innerHTML=dias[diaSemana];
    document.getElementById('fechaGet').innerHTML=meses[mes];    
    //Cada elemnto del array, pertenece a una posición del índice
    //los indices de los array empiezan a contar desde 0
    //Construimos el string
    fechaCompleta=document.getElementById('fechaGet');
    texto='Hoy es '+dias[diaSemana]+', '+diaMes+' de '+meses[mes]+' del año '+año;
    fechaCompleta.innerHTML=texto;

    
}

getFecha();
