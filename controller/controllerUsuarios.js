import {empleados} from "../model/modelUsuarios.js"
export function buscarEmpleados() {
    let auth = empleados.some((n) => {
        let userName = document.querySelector('#userName').value
        let password = document.querySelector('#password').value
        if (userName == n.userName && password == n.password) {
            return true
        } else {
            return false
        }
    })
    return auth
}