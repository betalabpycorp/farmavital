// Intercepta todos los links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = this.href;

        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '0';

        setTimeout(() => {
            window.location.href = destino;
        }, 500); // espera a que termine el fade
    });
});