const navToggle=document.querySelector("#nav-toggle");
const nav= document.querySelector(".nav-list");

navToggle.addEventListener('click', function(){
    nav.classList.toggle('show');
})

window.addEventListener("resize", function(){
    if (document.body.clientWidth >600 ) {
        nav.classList.remove('show')
        
    }
})