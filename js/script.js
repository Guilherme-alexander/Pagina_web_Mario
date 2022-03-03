var menuIcon = document.querySelector('i.las.la-bars');
var listMenu = document.querySelector(' nav.menu-mobile ul');
var main = document.querySelector('main')


menuIcon.addEventListener('click',()=>{ 
    listMenu.classList.toggle('active')
})


main.addEventListener('click',()=>{
    listMenu.classList.remove('active')
})

    



 