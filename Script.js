
//Header/nav sticky menu, when scrolling down
const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle ("sticky",window.scrollY>0);
});


