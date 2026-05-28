const temaStyle = document.createElement("style");
temaStyle.textContent = `
    body.oscuro {
        background-color: #121212 !important;
        color: #f0f0f0 !important;
    }
    body.oscuro header, body.oscuro #header { background-color: #1a1a1a !important; }
    body.oscuro header a, body.oscuro .caja-enlaces a { color: #f0f0f0 !important; }
    body.oscuro footer, body.oscuro .caja-datos { background-color: #1a1a1a !important; color: #f0f0f0 !important; }
    body.oscuro footer a, body.oscuro .caja-datos a { color: #aaa !important; }
    body.oscuro .cajita-info { background-color: #1a2e1a !important; color: #f0f0f0 !important; }
    body.oscuro .cajita-info h5, body.oscuro .cajita-info a { color: #f0f0f0 !important; }
    body.oscuro .tarjeta-prod, body.oscuro .tarjeta-carrusel { background-color: #1e1e1e !important; border-color: #333 !important; }
    body.oscuro .tarjeta-prod h6, body.oscuro .tarjeta-carrusel h6 { color: #f0f0f0 !important; }
    body.oscuro input, body.oscuro select, body.oscuro textarea { background-color: #2a2a2a !important; color: #f0f0f0 !important; border-color: #444 !important; }
    body.oscuro input[type="text"],
    body.oscuro input[type="number"],
    body.oscuro input[type="email"] { background-color: #2a2a2a !important; color: #f0f0f0 !important; border-color: #444 !important; }
    body.oscuro .caja-suscripcion input { background-color: #2a2a2a !important; color: #f0f0f0 !important; }
    body.oscuro .formulario form { background-color: #1e1e1e !important; }
    body.oscuro .formulario label { color: #f0f0f0 !important; }
    body.oscuro h1, body.oscuro h2, body.oscuro h3,
    body.oscuro h4, body.oscuro h5, body.oscuro h6,
    body.oscuro p { color: #f0f0f0 !important; }
    body.oscuro .caja-suscripcion { background-color: #1e1e1e !important; }
    body.oscuro .categorias-redes { background-color: #1e1e1e !important; }
    body.oscuro .modal-inicio,
    body.oscuro .cont-modal-inicio,
    body.oscuro #modal-carrito-cont { background-color: #000000 !important; color: #f0f0f0 !important; border: solid green 1px !important; }
    body.oscuro .cont-modal-inicio h4,
    body.oscuro .cont-modal-inicio h3 { color: #f0f0f0 !important; }
    body.oscuro .carrusel,
    body.oscuro .caja-tarjeta { background-color: #121212 !important; }
    body.oscuro .banner-promocional { background-color: #1e1e1e !important; }

    body { transition: background-color 0.3s ease, color 0.3s ease; }

    #btn-tema {
        position: fixed;
        bottom: 100px;
        right: 28px;
        z-index: 998;
        width: 45px;
        height: 45px;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transition: transform 0.2s ease, background 0.3s ease;
    }
    #btn-tema:hover { transform: scale(1.1); }
`;
document.head.appendChild(temaStyle);

const btnTema = document.createElement("button");
btnTema.id = "btn-tema";
btnTema.title = "Cambiar tema";
document.body.appendChild(btnTema);

function aplicarTema(tema) {
    if (tema === "oscuro") {
        document.body.classList.add("oscuro");
        btnTema.textContent = "☀️";
        btnTema.style.background = "#ffffff";
    } else {
        document.body.classList.remove("oscuro");
        btnTema.textContent = "🌙";
        btnTema.style.background = "#222222";
    }
}

aplicarTema(localStorage.getItem("tema") || "claro");

btnTema.addEventListener("click", () => {
    const nuevo = localStorage.getItem("tema") === "oscuro" ? "claro" : "oscuro";
    localStorage.setItem("tema", nuevo);
    aplicarTema(nuevo);
});