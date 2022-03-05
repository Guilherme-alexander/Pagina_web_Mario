var menuIcon = document.querySelector('i.las.la-bars');
var listMenu = document.querySelector(' nav.menu-mobile ul');
var main = document.querySelector('main')
const iconClose = document.querySelector('.menu-mobile i')

menuIcon.addEventListener('click',()=>{ 
    listMenu.classList.toggle('active')
    if (listMenu.classList.contains('active')) {
        iconClose.setAttribute('class', 'las la-times')
    } else {
        iconClose.setAttribute('class', 'las la-bars')
    }
})

main.addEventListener('click',()=>{
    listMenu.classList.remove('active')
})