// 1. Aquí guardamos toda la información de la invitación
const invitacion = {
    nombre: "Veronica Ramirez",
    edad: "cincuenta y tantos años",
    fecha: "📅 12 de Octubre de 2026",
    hora: "🕐 7:00 PM",
    lugar: "📍 Salón los Tílines",
    foto: "https://picsum.photos/200",
    telefono: "52 1 33 1808 7879", 
    fechaExacta: "Oct 12, 2026 14:00:00",
    mapa: "https://maps.app.goo.gl/maps"
};

// 2. Aquí le decimos a la página que reemplace los textos con nuestra información
document.getElementById("nombre").textContent = invitacion.nombre;
document.getElementById("edad").textContent = invitacion.edad;
document.getElementById("fecha").textContent = invitacion.fecha;
document.getElementById("hora").textContent = invitacion.hora;
document.getElementById("lugar").textContent = invitacion.lugar;

// 3. Para la imagen no cambiamos el texto, cambiamos su origen (src)
document.getElementById("Tilín.jpg").src = invitacion.foto;
// 4. Configurar el botón de WhatsApp
// Creamos el mensaje combinando texto con el nombre de la invitación
const mensaje = "¡Hola! Confirmo mi asistencia al cumpleaños de " + invitacion.nombre + ".";

// Codificamos el mensaje para que los espacios y signos funcionen en un link de internet
const textoCodificado = encodeURIComponent(mensaje);

// Armamos el link oficial de WhatsApp
const linkWhatsapp = "https://wa.me/" + invitacion.telefono + "?text=" + textoCodificado;

// Le ponemos ese link al botón de nuestro HTML
document.getElementById("btn-whatsapp").href = linkWhatsapp;
// 5. Reproductor de música
const audio = document.getElementById("musica-fondo");
const btnMusica = document.getElementById("btn-musica");

// Le decimos al botón que escuche cuando le hacemos clic
btnMusica.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        btnMusica.textContent = "⏸️ Pausar Música"; // Cambiamos el texto e icono
    } else {
        audio.pause();
        btnMusica.textContent = "🎵 Activar Música"; // Volvemos al texto original
    }
});
// 6. Efecto de confeti continuo
function soltarConfeti() {
    const emojis = ['🎉', '✨', '🎈', '🎊', '🎂'];
    const confeti = document.createElement('div');
    
    // Elegimos un emoji al azar
    confeti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    confeti.classList.add('confeti');
    
    // Lo posicionamos en un lugar aleatorio a lo ancho de la pantalla
    confeti.style.left = Math.random() * 100 + 'vw';
    
    // Hacemos que algunos caigan más rápido que otros (entre 2 y 5 segundos)
    confeti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    // Lo agregamos a la página
    document.body.appendChild(confeti);
    
    // Lo borramos después de 5 segundos para que la página no se vuelva lenta
    setTimeout(() => {
        confeti.remove();
    }, 5000);
}

// Le decimos a JavaScript que suelte un confeti nuevo cada 300 milisegundos
setInterval(soltarConfeti, 300);
// 7. Cuenta regresiva
const fechaDestino = new Date(invitacion.fechaExacta).getTime();

const reloj = setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaDestino - ahora;

    // Fórmulas matemáticas para calcular el tiempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Si ya pasó la fecha, detenemos el reloj
    if (distancia < 0) {
        clearInterval(reloj);
        document.querySelector(".cuenta-regresiva").innerHTML = "<h3>¡Llegó el día! 🎉</h3>";
    } else {
        // Imprimimos los resultados en el HTML
        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
        document.getElementById("segundos").textContent = segundos;
    }
}, 1000);
// 8. Botón de Google Maps
document.getElementById("btn-mapa").href = invitacion.mapa;
