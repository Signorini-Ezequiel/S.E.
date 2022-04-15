// Cuando se baja al nav se le agrega la clase "abajo"
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("abajo", window.scrollY > 0);
})