// 1- Mediante una fecha dada pasada, calcular que día de la semana es

alert("¿Quieres saber que día de la semana naciste?");

let dia = prompt("Día:");
let mes = prompt("Mes:");
let anio = prompt("Año:");

let dias = ["Domingo" , "Lunes" , "Martes" , "Miércoles" , "Jueves" , "Viernes" , "Sábado"];

let meses = ["Enero" , "Febrero" , "Marzo" , "Abril" , "Mayo" , "Junio" , "Julio" , "Agosto" , "Septiembre" , "Octubre" , "Noviembre" , "Diciembre"];

let fechaCompleta = new Date(`${mes} , ${dia} , ${anio}`);
dias = dias[fechaCompleta.getDay()];
meses = meses[fechaCompleta.getMonth()];
document.write(`Naciste el día ${dias} ${dia} de ${meses} del ${anio}.`);
