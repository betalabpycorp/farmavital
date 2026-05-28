// Esperar a que cargue la página
document.addEventListener('DOMContentLoaded', function() {
    const cajaTarjeta = document.querySelector('.caja-tarjeta');
    const tarjetas = document.querySelectorAll('.tarjeta-carrusel');
    const btnIzq = document.getElementById('btn-izq');
    const btnDer = document.getElementById('btn-der');
    
    let indiceActual = 0;
    let tarjetasPorVista = 4;
    let anchoTarjeta = 0;
    let maxIndice = 0;
    let intervaloAutomatico;
    let tiempoAutomatico = 3000; // Cambia cada 3 segundos
    
    function calcularValores() {
        // Determinar cuántas tarjetas mostrar según el ancho de pantalla
        if (window.innerWidth <= 768) {
            tarjetasPorVista = 1;
        } else if (window.innerWidth <= 1024) {
            tarjetasPorVista = 2;
        } else {
            tarjetasPorVista = 4;
        }
        
        // Obtener el ancho de la primera tarjeta
        anchoTarjeta = tarjetas[0].offsetWidth;
        
        // Obtener el gap del contenedor
        const estilo = window.getComputedStyle(cajaTarjeta);
        const gap = parseInt(estilo.gap) || 20;
        
        // Calcular ancho total incluyendo gap
        anchoTarjeta = anchoTarjeta + gap;
        
        // Calcular índice máximo
        maxIndice = tarjetas.length - tarjetasPorVista;
        if (maxIndice < 0) maxIndice = 0;
        
        // Ajustar índice actual si es mayor al máximo
        if (indiceActual > maxIndice) {
            indiceActual = maxIndice;
        }
        if (indiceActual < 0) {
            indiceActual = 0;
        }
    }
    
    function actualizarCarrusel() {
        const desplazamiento = -indiceActual * anchoTarjeta;
        cajaTarjeta.style.transform = `translateX(${desplazamiento}px)`;
        cajaTarjeta.style.transition = 'transform 0.5s ease'; // Movimiento suave
        
        // Actualizar estado de botones
        if (indiceActual <= 0) {
            btnIzq.style.opacity = '0.5';
            btnIzq.style.cursor = 'not-allowed';
        } else {
            btnIzq.style.opacity = '1';
            btnIzq.style.cursor = 'pointer';
        }
        
        if (indiceActual >= maxIndice) {
            btnDer.style.opacity = '0.5';
            btnDer.style.cursor = 'not-allowed';
        } else {
            btnDer.style.opacity = '1';
            btnDer.style.cursor = 'pointer';
        }
    }
    
    function siguiente() {
        if (indiceActual < maxIndice) {
            indiceActual++;
            actualizarCarrusel();
            reiniciarAutoPlay();
        } else {
            // Volver al inicio si llega al final (opcional)
            // indiceActual = 0;
            // actualizarCarrusel();
        }
    }
    
    function anterior() {
        if (indiceActual > 0) {
            indiceActual--;
            actualizarCarrusel();
            reiniciarAutoPlay();
        }
    }
    
    function iniciarAutoPlay() {
        if (intervaloAutomatico) {
            clearInterval(intervaloAutomatico);
        }
        intervaloAutomatico = setInterval(function() {
            if (indiceActual < maxIndice) {
                indiceActual++;
                actualizarCarrusel();
            } else {
                // Volver al inicio cuando llega al final
                indiceActual = 0;
                actualizarCarrusel();
            }
        }, tiempoAutomatico);
    }
    
    function reiniciarAutoPlay() {
        clearInterval(intervaloAutomatico);
        iniciarAutoPlay();
    }
    
    function pausarAutoPlay() {
        clearInterval(intervaloAutomatico);
    }
    
    // Agregar eventos a los botones
    if (btnDer) {
        btnDer.addEventListener('click', siguiente);
    }
    if (btnIzq) {
        btnIzq.addEventListener('click', anterior);
    }
    
    // Pausar autoplay al pasar el mouse sobre el carrusel
    const carrusel = document.querySelector('.carrusel');
    if (carrusel) {
        carrusel.addEventListener('mouseenter', pausarAutoPlay);
        carrusel.addEventListener('mouseleave', iniciarAutoPlay);
    }
    
    // Actualizar al redimensionar la ventana
    window.addEventListener('resize', function() {
        calcularValores();
        actualizarCarrusel();
        reiniciarAutoPlay();
    });
    
    // Inicializar
    calcularValores();
    actualizarCarrusel();
    iniciarAutoPlay();
});