const menuBtn = document.querySelector('.nav__menu')
const slideNavMenu = document.querySelector('.nav')

menuBtn.addEventListener('click', function(){

    if(menuBtn.classList.contains('open')){
        menuBtn.classList.remove('open');
        slideNavMenu.classList.remove('slide-in');
    
        
    }
    else{
        menuBtn.classList.add('open');
        slideNavMenu.classList.add('slide-in');
        
        
    }
})