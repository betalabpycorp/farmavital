let carrito = [];

localStorage.setItem("carrito", JSON.stringify(carrito));

function actualizarCarrito() {
    const contador = document.getElementById("carrito-cont");
    if (contador) contador.textContent = carrito.length;
}

function agregarAlCarrito() {
    carrito.push(1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
    carrito = [];
    actualizarCarrito();
});