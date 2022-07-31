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
    let body = document.querySelector("body");
    if (body.style.overflow == "auto") {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
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
    let body = document.querySelector("body");
    body.style.overflow = "auto";

}
function trocarImg() {
    let picture = document.getElementById("picture");
    if ( picture.classList.contains("img1")) {
        picture.classList.remove("img1")
        picture.classList.add("img2")
    } else if (picture.classList.contains("img2")) {
        picture.classList.remove("img2")
        picture.classList.add("img3")
    } else {
        picture.classList.remove("img3")
        picture.classList.add("img1")
    }
}
setInterval(trocarImg,7000);
function botao1() {
    let met1 = document.querySelector("#d1");
    met1.style.display = "block";
    let met2 = document.querySelector("#d2");
    met2.style.display = "none";
    let met3 = document.querySelector("#d3");
    met3.style.display = "none";
    let bot1 = document.querySelector("#bb1");
    bot1.classList.add("active")
    let bot2= document.querySelector("#bb2");
    bot2.classList.remove("active")
    let bot3 = document.querySelector("#bb3");
    bot3.classList.remove("active")
}
function botao2() {
    let met1 = document.querySelector("#d1");
    met1.style.display = "none";
    let met2 = document.querySelector("#d2");
    met2.style.display = "block";
    let met3 = document.querySelector("#d3");
    met3.style.display = "none";
    let bot1 = document.querySelector("#bb1");
    bot1.classList.remove("active")
    let bot2= document.querySelector("#bb2");
    bot2.classList.add("active")
    let bot3 = document.querySelector("#bb3");
    bot3.classList.remove("active")
}
function botao3() {
    let met1 = document.querySelector("#d1");
    met1.style.display = "none";
    let met2 = document.querySelector("#d2");
    met2.style.display = "none";
    let met3 = document.querySelector("#d3");
    met3.style.display = "block";
    let bot1 = document.querySelector("#bb1");
    bot1.classList.remove("active")
    let bot2= document.querySelector("#bb2");
    bot2.classList.remove("active")
    let bot3 = document.querySelector("#bb3");
    bot3.classList.add("active")
}
function botao2_1() {
    let met1 = document.querySelector("#t1");
    met1.style.display = "flex";
    let met2 = document.querySelector("#t2");
    met2.style.display = "none";
    let met3 = document.querySelector("#t3");
    met3.style.display = "flex";
    let met4 = document.querySelector("#t4");
    met4.style.display = "none";
    let bot1 = document.querySelector("#b11");
    bot1.classList.add("active2")
    let bot2= document.querySelector("#b22");
    bot2.classList.remove("active2")
}
function botao2_2() {
    let met1 = document.querySelector("#t1");
    met1.style.display = "none";
    let met2 = document.querySelector("#t2");
    met2.style.display = "flex";
    let met3 = document.querySelector("#t3");
    met3.style.display = "none";
    let met4 = document.querySelector("#t4");
    met4.style.display = "flex";
    let bot1 = document.querySelector("#b11");
    bot1.classList.remove("active2")
    let bot2= document.querySelector("#b22");
    bot2.classList.add("active2")
}
function botao3_1() {
    let met1 = document.querySelector("#p1");
    met1.style.display = "flex";
    let met2 = document.querySelector("#p2");
    met2.style.display = "none";
    let met3 = document.querySelector("#p3");
    met3.style.display = "none";
    let bot1 = document.querySelector("#b111");
    bot1.classList.add("active3")
    let bot2= document.querySelector("#b222");
    bot2.classList.remove("active3")
    let bot3= document.querySelector("#b333");
    bot3.classList.remove("active3")
}
function botao3_2() {
    let met1 = document.querySelector("#p1");
    met1.style.display = "none";
    let met2 = document.querySelector("#p2");
    met2.style.display = "flex";
    let met3 = document.querySelector("#p3");
    met3.style.display = "none";
    let bot1 = document.querySelector("#b111");
    bot1.classList.remove("active3")
    let bot2= document.querySelector("#b222");
    bot2.classList.add("active3")
    let bot3= document.querySelector("#b333");
    bot3.classList.remove("active3")
}
function botao3_3() {
    let met1 = document.querySelector("#p1");
    met1.style.display = "none";
    let met2 = document.querySelector("#p2");
    met2.style.display = "none";
    let met3 = document.querySelector("#p3");
    met3.style.display = "flex";
    let bot1 = document.querySelector("#b111");
    bot1.classList.remove("active3")
    let bot2= document.querySelector("#b222");
    bot2.classList.remove("active3")
    let bot3= document.querySelector("#b333");
    bot3.classList.add("active3")
}