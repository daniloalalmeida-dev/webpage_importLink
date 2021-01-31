//Capturar click no hamburger e ativar sidebar
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});