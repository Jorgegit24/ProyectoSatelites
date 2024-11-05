//Sección del Saludo en la página Intro

window.onload = function() {
    var modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "block";
    }

    var closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.onclick = function() {
            modal.style.display = "none";
        }
    }

    var submitButton = document.getElementById('submitName');
    if (submitButton) {
        submitButton.onclick = function() {
            var nombre = document.getElementById('userName').value;
            if (nombre) {
                localStorage.setItem('nombre', nombre);
                alert("Bienvenido a la Página de los Satélites, " + nombre + "!");
                modal.style.display = "none";
                window.location.href = "principal.html"; // Redirige aquí
            } else {
                alert("Por favor, ingresa tu nombre.");
            }
        }
    }

    // Selecciona el video
    var video = document.querySelector('video');
    if (video) {
        // Establece la velocidad de reproducción en 0.6 (la mitad de la velocidad normal)
        video.playbackRate = 0.6;

        var playPause = document.getElementById('playPause');
        var volumen = document.getElementById('volumen');
        var tiempo = document.getElementById('tiempo');

        // Agrega eventos a los controles
        if (playPause) {
            playPause.addEventListener('click', function() {
                if (video.paused) {
                    video.play();
                    playPause.textContent = 'Pausa';
                } else {
                    video.pause();
                    playPause.textContent = 'Play';
                }
            });
        }

       /*  if (volumen) {
            volumen.addEventListener('click', function() {
                if (video.volume === 0) {
                    video.volume = 1;
                    volumen.textContent = 'Volumen: 100%';
                } else {
                    video.volume = 0;
                    volumen.textContent = 'Volumen: 0%';
                }
            });
        } */

        // Actualiza el tiempo de reproducción
        if (video && tiempo) {
            setInterval(function() {
                var minutos = Math.floor(video.currentTime / 60);
                var segundos = Math.floor(video.currentTime % 60);
                tiempo.textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
            }, 1000);
        }
    };

    var toggleModules = document.getElementById('toggleModules');
    if (toggleModules) {
        toggleModules.addEventListener('click', function() {
            const modules = document.getElementById('modules');
            if (modules) {
                modules.style.display = (modules.style.display === 'none') ? 'block' : 'none';
            }
        });
    }
};

// Validación de email
function validarEmail(email) {
    return email.includes('@') && email.endsWith('.com');
}
// Validación de email
function validarEmail(email) {
    return email.includes('@') && email.endsWith('.com');
}
// Validación de email
function validarEmail(email) {
    return email.includes('@') && email.endsWith('.com');
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener el valor del correo electrónico
    const email = document.getElementById('email').value;

    // Validar el correo electrónico
    if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido que contenga "@" y ".com".');
        return; // Detener el proceso si el email no es válido
    }

    // Obtener valores de los demás campos
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const sexo = document.getElementById('sexo').value;
    const direccion = document.getElementById('direccion').value;
    const comentarios = document.getElementById('comentarios').value;

    // Mostrar datos en el div de resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h2>Datos Enviados:</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellidos:</strong> ${apellidos}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Sexo:</strong> ${sexo}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Comentarios:</strong> ${comentarios || 'Ninguno'}</p>
    `;

    // Mostrar alerta de éxito
    alert('Los datos han sido guardados exitosamente.');

    // Limpiar el formulario
    this.reset();
});

// Función para validar el correo electrónico
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Evento para el botón "Nuevo Contacto"
document.getElementById('nuevoContacto').addEventListener('click', function() {
    // Limpiar los campos del formulario
    document.getElementById('contactForm').reset();

    // Limpiar el div de resultados
    document.getElementById('resultado').innerHTML = '';
});
