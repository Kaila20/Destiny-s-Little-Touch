/* Show the menu*/
const NavMenu = document.getElementById('Nav-Menu'),
 navToggle = document.getElementById('nav-Toogle2'),
 navClose = document.getElementById('Nav-Close')

/* Menu showing up once element is clicked */

if(navToggle){
    navToggle.addEventListener('click', () =>{
        NavMenu.classList.add('Show-Menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        NavMenu.classList.remove('Show-Menu')
    })
}
/*
// Remove menu on mobile (if clciked)
const navLink = document.querySelectorAll('Nav-Link')

const linkAction = () =>{
    const NavMenu = document.getElementById('Nav-Menu')
//when nav-Link is cliked, the show-move is removed
NavMenu.classList.remove('Show-Menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
 */
