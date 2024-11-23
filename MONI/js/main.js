document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const genero = document.getElementById('genero').value;
    
    const usuario = {
        nombres: nombres,
        apellidos: apellidos,
        correo: correo,
        contrasena: contrasena,
        genero: genero
    };
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    window.location.href = 'login.html'; // Redirigir a la página de inicio de sesión
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    
    if (usuarioGuardado && usuarioGuardado.correo === correo && usuarioGuardado.contrasena === contrasena) {
        localStorage.setItem('usuarioActivo', JSON.stringify(usuarioGuardado));
        window.location.href = 'bienvenida.html'; // Redirigir a la página de bienvenida
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
    
    if (usuarioActivo) {
        document.getElementById('usuarioNombre').innerText = usuarioActivo.nombres;
    } else {
        window.location.href = 'login.html'; // Redirigir a la página de inicio de sesión si no hay usuario activo
    }
    
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('usuarioActivo');
        window.location.href = 'login.html'; // Redirigir a la página de inicio de sesión
    });
});

