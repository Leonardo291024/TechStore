//SELECTORES DE ELEMENTOS DEL DOM
const menuMobile = document.getElementById("menu-mobile");
const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("close-btn");


//FUNCIO PARA ABRIR EL MENU MOBILE

btnMenu.addEventListener("click", () =>{
    menuMobile.classList.add("menu-active");
    
});

//FUNCION PARA CERRAR EL MENU MOBILE

btnClose.addEventListener("click", () =>{
    menuMobile.classList.remove("menu-active");
});