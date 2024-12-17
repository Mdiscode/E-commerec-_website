let search =document.querySelector('.search-box');
document.querySelector('#search-icon').onclick =()=>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}

let cart =document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = ()=>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
}

//login form

let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = ()=>{
    user.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}

//navbar scroll
let header = document.querySelector("header");
window.addEventListener('scroll',()=>{
  header.classList.toggle('shadow',window.scrollY >0);
});


// swiper 


  var swiper = new Swiper(".new-Arrival", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //click menu
  let menu = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = ()=>{
    menu.classList.toggle('active');
    
}