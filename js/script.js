let menuIcon = document.querySelector('i.las.la-bars');
let listMenu = document.querySelector(' nav.menu-mobile ul');
let main = document.querySelector('main')

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

//Dark Mode 
let body = document.querySelector('body');
let change = document.querySelector('.change');

change.addEventListener('click',function(){
    if(body.classList.contains('dark')){
        body.classList.remove('dark')
        
    }else{
        body.classList.add('dark')
    }
})