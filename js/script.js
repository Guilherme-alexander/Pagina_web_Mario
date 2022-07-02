//MENU
let MenuSelectd = document.querySelectorAll('ul li a');

// =============================================================>
//Menu Mobile DEV = rslanna & https://github.com/rslanna
let menuIcon = document.querySelector('i.las.la-bars');
let listMenu = document.querySelector(' nav.menu-mobile ul');
let main = document.querySelector('main');

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
// (Fim Menu Mobile) ===========================================>

//(Dark Mode Init) DEV = alanabarbosa & https://github.com/alanabarbosa
let body = document.querySelector('body');
let change = document.querySelector('.change');

change.addEventListener('click',function(){
    if(body.classList.contains('dark')){
        body.classList.remove('dark')
        
    }else{
        body.classList.add('dark')
    }
})
// (Fim Dark Mode) =============================================>

// =============================================================>
// PAGE TRANSFORM 

let logo = document.querySelector('div.logo img');
let imgPage = document.querySelector('div.w50 img');

//Alterar valor da variavel Root :)
let svg = document.querySelectorAll("[fill]")
let variavelCor = document.querySelector(':root');

let marioPage = ()=>{
    logo.src = '../imagens/LogoMario.png';
    logo.style.width = '58px';
    imgPage.src = '../imagens/mario.png';
    colorBG('#FF0000');
    selectedMenu('mario');
}

let luidPage = ()=>{
    logo.src = '../imagens/LogoLuid.png';
    logo.style.width = '60px';
    imgPage.src = '../imagens/luid.png';
    colorBG('#08CF1C');
    selectedMenu('luid');
}

let PokemonPage = ()=>{
    logo.src = '../imagens/LogoPokemon.png';
    logo.style.width = '170px';
    imgPage.src = '../imagens/pokemons.png';
    colorBG('#303795');
    selectedMenu('pokemon');
}

//*Sorry Help! :O
function selectedMenu(name){

    if(name == 'mario'){

        MenuSelectd[0].classList.add('active-menu');
        MenuSelectd[1].classList.remove('active-menu');
        MenuSelectd[2].classList.remove('active-menu');
        MenuSelectd[4].classList.add('active-menu');
        MenuSelectd[5].classList.remove('active-menu');
        MenuSelectd[6].classList.remove('active-menu');
    }else if(name == 'luid'){

        MenuSelectd[0].classList.remove('active-menu');
        MenuSelectd[1].classList.add('active-menu');
        MenuSelectd[2].classList.remove('active-menu');
        MenuSelectd[4].classList.remove('active-menu');
        MenuSelectd[5].classList.add('active-menu');
        MenuSelectd[6].classList.remove('active-menu');
    }else if(name == 'pokemon'){

        MenuSelectd[0].classList.remove('active-menu');
        MenuSelectd[1].classList.remove('active-menu');
        MenuSelectd[2].classList.add('active-menu');
        MenuSelectd[4].classList.remove('active-menu');
        MenuSelectd[5].classList.remove('active-menu');
        MenuSelectd[6].classList.add('active-menu');
    }
    
}
//*---------------------------------------------------

function colorBG(cor){
    variavelCor.style.setProperty("--color", cor);

    var svgCor = cor
    for(let i = 0; i < svg.length; i++){ 
        svg[i].attributes.fill.value = svgCor;
    }
}