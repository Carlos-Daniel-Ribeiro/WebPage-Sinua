function subir_tela() {
    window.scrollTo(0,0);
}
function decidir_scroll() {
    if (window.scrollY == 0) {
        document.querySelector(".scroll").style.display = 'none';
    } else {
        document.querySelector(".scroll").style.display = 'block';
    }
}
window.addEventListener('scroll', decidir_scroll);
