let seleccion;

do {
    let nombreEmpleado = prompt("Ingrese el nombre del empleado: ");
    let horasTrabajadas = Number(prompt("Ingrese las horas trabajadas: "));
    let totalSalario;

    // Cálculo del salario según las horas trabajadas
    if (horasTrabajadas < 40) {
        totalSalario = horasTrabajadas * 20000;
    } else if (horasTrabajadas >=40 && horasTrabajadas <=50) {
        totalSalario = (40 * 20000) + ((horasTrabajadas - 40) * 25000);
    } else {
        totalSalario = (40 * 20000) + (10 * 25000) + ((horasTrabajadas - 50) * 30000);
    }

    // Mostrar el salario total al usuario
    alert("Salario total del empleado: $" + totalSalario);
    
    // Registro en la consola
    console.log("Nombre del empleado: " + nombreEmpleado);
    console.log("Horas trabajadas: " + horasTrabajadas);
    console.log("Salario total: $" + totalSalario);
    console.log("*************************");

    do {
        seleccion = prompt("¿Desea ingresar otro empleado? (Si o No): ");
    } while (seleccion !== "Si" && seleccion !== "No");

} while (seleccion === "Si"); // Salir cuando la selección sea "No"






// let seleccion1
// do {
//     let nombreEmpleados =
//         prompt("Ingrese el nombre del empleado: ")

//     let horasTrabajadas = Number(
//         prompt("Ingrese las horas trabajadas: ")
//     );
//     let totalSalario
//     if (horasTrabajadas < 40) {
//         totalSalario = horasTrabajadas * 20000
//     } else if (horasTrabajadas >=40 && horasTrabajadas <=50) {
//         totalSalario = horasTrabajadas * 25000
//     } else {
//         totalSalario = horasTrabajadas * 30000
//     }
//     alert(totalSalario)    
// console.log("Nombre del empleado: " + nombreEmpleados)
// console.log("Horas trabajas: " + horasTrabajadas)
// console. log("El total de horas es: " + totalSalario)
// console.log("*************************")


//     do {
//         seleccion = prompt("Desea ingresar otro empleado? \n 'Si o No: ")
//     } while (seleccion != "Si" && seleccion != "No");
// } while (seleccion != "2");

