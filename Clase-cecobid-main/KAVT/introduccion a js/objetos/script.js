//
const coche={
    marca:"renault",
    modelo:"Megane",
    color:"blanco"
}
//Definición y creación edun objeto
const persona={
    nombre:"kevin",
    apellido:"vargas",
    edad:"21"
    nombreCompleto= function(){
        return this.nombre+' '+this.apellido;
    }
}
//Acceso a las propiedades
document.querySelector('#pNombre').innerHTML=persona.nombre+' '+persona.apellido;
document.querySelector('#pEdad').innerHTML=`${persona.nombre} tiene ${persona.edad} años`;
document.querySelector('#pNombreCompleto').innerHTML=`Su nombre es ${nombreCompleto}`