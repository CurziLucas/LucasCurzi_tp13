let transacciones = [100, -100, 50, 80, -200, -300, 700];

let sueldoTotal = 0;
let depositos = 0;
let retiros= 0;

function totalTransacciones(transacciones) {

    for (let i = 0; i < transacciones.length; i++) {
        sueldoTotal += transacciones[i];

        if (transacciones[i] > 0) {
            depositos += transacciones[i];
        } else if (transacciones[i] < 0){
            retiros += transacciones[i];
        }
    }
    return `El monto total de los depósitos es de: ${depositos}
            El monto total de los retiros es de: ${retiros}
            Por lo tanto, su saldo actual en la cuenta es de: ${sueldoTotal}`
}


function calcularBalance(nombre, apellido, transacciones){
    balance = totalTransacciones(transacciones);
    nombre = nombre;
    apellido = apellido;

    return `
            Estimado ${nombre} ${apellido} 
            ${balance}`;
}

//console.log(totalTransacciones(transacciones))
console.log(calcularBalance("Eric", "Mena", transacciones));

module.exports = calcularBalance;