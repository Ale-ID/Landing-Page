window.addEventListener('DOMContentLoaded', setup);

function setup() {
    //Open and close mobile nav
    function showHideNav() {
        const nav = document.getElementById('header-nav');
        nav.classList.toggle('slide-in'); 
    }

    const burger = document.getElementById('burger'); 
    burger.addEventListener('click', showHideNav, false); 

    //Slide in animation for individual <li>s 
    const lis = document.querySelectorAll('#header-nav>ul>li'); 

    let num = lis.length; 
    let delay = 0.3;  
    while(num > 0) {
        lis[lis.length - num].style.animationDelay = delay + 's'; 
        num--; 
        delay += 0.3; 
    }     

}