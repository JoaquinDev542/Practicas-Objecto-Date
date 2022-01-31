// 1- Mediante una fecha dada pasada o futura, calcular que día de la semana es o será.

alert("¿Quieres saber que día de la semana naciste o que día de la semana será en el futuro?");

let fechaActual = new Date();

let dia = prompt("Día:");
let mes = prompt("Mes:");
let anio = prompt("Año:");

let dias = ["Domingo" , "Lunes" , "Martes" , "Miércoles" , "Jueves" , "Viernes" , "Sábado"];

let meses = ["Enero" , "Febrero" , "Marzo" , "Abril" , "Mayo" , "Junio" , "Julio" , "Agosto" , "Septiembre" , "Octubre" , "Noviembre" , "Diciembre"];

let fechaCompleta = new Date(`${mes} , ${dia} , ${anio}`);
dias = dias[fechaCompleta.getDay()];
meses = meses[fechaCompleta.getMonth()];

if(fechaCompleta > fechaActual) {
    document.write(`El ${dia} de ${meses} del ${anio} será ${dias}.`);
} else {
    document.write(`Naciste el día ${dias} ${dia} de ${meses} del ${anio}.`);
}

//Argen08
