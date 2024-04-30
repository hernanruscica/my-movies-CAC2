//console.log('desde js');
const $d = document;
const $header = $d.getElementById('header');
const $navbarBtnOpen = $d.getElementById('header__btn-menu-open');
const $navbarBtnClose = $d.getElementById('header__btn-menu-close');
const $navbar = $d.getElementById('header__navbar');
const $topArrow = $d.getElementById('top_arrow');


$d.addEventListener('click', (e) => {  
    
    //console.log(e.target.id);
    if (e.target.id == 'header__btn-menu-close'){
        //console.log('click en el boton de cerrar el menu');
        //$navbar.classList.toggle('navbar_show');
        enableScroll();
    }
    if (e.target.id == 'header__btn-menu-open' ){
        //console.log('click en el boton de abrir el menu');
        //$navbar.classList.toggle('navbar_show')
        disableScroll();
    }
    if (e.target.id.includes('mobile_navbar_link') ){
        //Se hizo click en algun enlace del menu desktop o mobile     
        //console.log('click en  id = "mobile_navbar_link"');         
        $d.getElementById("menu-toggle").checked = !$d.getElementById("menu-toggle").checked;

        //$navbar.classList.toggle('navbar_show');        
        enableScroll();        
    }       
}
);
window.addEventListener('scroll', (e) => {
     
    if (window.scrollY > 70){
        $topArrow.classList.add('top_arrow_show');
    }else{
        $topArrow.classList.remove('top_arrow_show');
    }
   //console.log("scrolling", window.scrollY);
}
)

function disableScroll() {
    // Get the current page scroll position         
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
        //console.log($d.querySelector('html').setAttribute('scroll-behavior', 'unset'));
        $d.querySelector('html').setAttribute('style', 'scroll-behavior: unset');
}
  
function enableScroll() {
    window.onscroll = function() {};
    //$d.html.setAttribute('scroll-behavior', 'smooth');
    $d.querySelector('html').setAttribute('style', 'scroll-behavior: smooth');
}


/*

let idSection01 = 'aboutme';
let idSection03 = 'recentprojects';
let idSection02 = 'myskills';    
let idSection04 = 'links';
let idSection05 = 'contactme';        
let idFooter = 'footer';

let element01 = null; 
let element02 = null; 
let element03 = null; 
let element04 = null;  
let element05 = null;  

let ySection01 =  null ; 
let ySection02 =  null ;
let ySection03 =  null ;
let ySection04 =  null ;   
let ySection05 =  null ;  

let currentPos = 'aboutme'; 


document.addEventListener('DOMContentLoaded', () => {
    element01 = document.getElementById(idSection01); 
    element02 = document.getElementById(idSection02); 
    element03 = document.getElementById(idSection03); 
    element04 = document.getElementById(idSection04);  
    element05 = document.getElementById(idSection05);  
   
    ySection01 =  element01.offsetTop ; 
    ySection02 =  element02.offsetTop ;
    ySection03 =  element03.offsetTop ;
    ySection04 =  element04.offsetTop ;   
    ySection05 =  element05.offsetTop ;   
   
})

window.addEventListener('scroll', () => {            
    
    
    let scroollPosY = window.scrollY;
    let tolerance = 150;   
    

    if  (scroollPosY > ySection01 - 20){
        currentPos = idSection01;
    }
    if  (scroollPosY > ySection02 - 20){
        currentPos = idSection02;
    }
    if  (scroollPosY > ySection03 - 20){
        currentPos = idSection03;
    }
    if  (scroollPosY > ySection04 - 20 ){
        currentPos = idSection04;
    }
    if  (scroollPosY > ySection05 - tolerance ){
        currentPos = idSection05;
    }


    //  console.clear();      
    //  console.log(idSection01, ySection01);  
    //  console.log(idSection02, ySection02);  
    //  console.log(idSection03, ySection03);  
    //  console.log(idSection04, ySection04);  
    //  console.log(idFooter, yFooter);  
    //  console.log(`Posicion de Y: ${scroollPosY}. tipo de dato: ${typeof scroollPosY}`);
    //  console.log(`seccion actual : ${currentPos}`);


    $d.querySelectorAll('.header__navbar-desktop__list__item>a').forEach((item) => {            
                 item.classList.remove('navbar-selected');
                });        
    $d.getElementById(`${currentPos}_desktop_navbar_link`).classList.add('navbar-selected');    

    
    $d.querySelectorAll('.header__navbar-mobile__list__item>a').forEach((item) => {            
        item.classList.remove('navbar-mobile-selected');
        // console.log(currentPos)
       });  

    $d.getElementById(`${currentPos}_mobile_navbar_link`).classList.add('navbar-mobile-selected');    
     

});*/