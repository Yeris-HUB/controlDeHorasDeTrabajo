
function iniciarSesion() {
    let username = document.getElementById('userName').value;
    let password = document.getElementById('password').value;

    if (userName === usuarioCorrecto && password === contraseñaCorrecta) {
        alert("Inicio de sesión exitoso.");
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('workSection').classList.remove('hidden');
    } else {
        intentos--;
        alert(`Usuario o contraseña incorrectos. Intentos restantes: ${intentos}`);
        if (intentos === 0) {
            alert("Número máximo de intentos alcanzado. El sistema se cerrará.");
            window.close(); // Esto solo funcionará en algunas configuraciones del navegador.
        }
    }
}

function btnIniciar(){
    let usuario = document.getElementById('usuario').value
    let contraseña = document.getElementById('contraseña').value
}