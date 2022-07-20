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

function menuTouch() {
    let menuBar = document.getElementById("menu-bar");
    menuBar.classList.remove("menu-bar")
    menuBar.classList.add("menu-bar2")
    let navRes = document.getElementById("nav_res");
    navRes.style.width = "200px"
    let menuBar2 = document.getElementById("menu-bar2");
    menuBar2.style.display = "block"
    let menuContent = document.getElementById("menu_content");
    menuContent.style.display = "block"
}

function menuTouch2() {
    let menuBar = document.getElementById("menu-bar");
    menuBar.classList.remove("menu-bar2")
    menuBar.classList.add("menu-bar")
    let navRes = document.getElementById("nav_res");
    navRes.style.width = "0px"
    let menuBar2 = document.getElementById("menu-bar2");
    menuBar2.style.display = "none"
    let menuContent = document.getElementById("menu_content");
    menuContent.style.display = "none"
}
