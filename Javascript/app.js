const navslide  =() =>{
const top_menu_button = document.querySelector('.menu-button');
const nav_list = document.querySelector(' .nav-list');
const navLinks = document.querySelectorAll('.nav-list li');
//toggle the navigation bar
top_menu_button.addEventListener('click',()=>{
nav_list.classList.toggle('menu-active');


navLinks.forEach((link,index)=> {
    if(link.style.animation){
        link.style.animation = '';

    }   
    else{
        link.style.animation = `navlinkfade 0.5s ease forwards ${index / 5  + 0.2}s `;
    }         
    });
    top_menu_button.classList.toggle('toggle')

});
    // text fade
    
}
navslide();