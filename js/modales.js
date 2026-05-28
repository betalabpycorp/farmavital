window.document.getElementById('modal-inicio').style.display = 'flex';
window.document.getElementById('header').style.zIndex = '0';
window.document.getElementById('btn-izq').style.display = 'none';
window.document.getElementById('btn-der').style.display = 'none';

function Cerrar(){
    document.getElementById('modal-inicio').style.display = 'none';
    document.getElementById('btn-izq').style.display = 'block';
    document.getElementById('btn-der').style.display = 'block';
}