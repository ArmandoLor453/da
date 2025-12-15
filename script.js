// Carrusel principal (encabezado)
var swiper = new Swiper('.mySwiper-1', {
    slidesPerView:1,
    spaceBetween:30,
  loop: true,
  pagination:{
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 // pagination: {
   // el: '.swiper-pagination',
    //clickable: true,
  //},
});

var swiper = new Swiper('.mySwiper-2', {
    slidesPerView:3,
    spaceBetween:20,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
        slidesPerView:1,
    },
    520:{
        slidesPerView:2,
    },
    850:{
        slidesPerView:3,
    }
    
  }
 // pagination: {
   // el: '.swiper-pagination',
    //clickable: true,
  //},
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener('change', function(){
        let id=input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
})

// Carruseles secundarios (productos)
const swipers = document.querySelectorAll('.mySwiper-2');
swipers.forEach((swiperEl) => {
  new Swiper(swiperEl, {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: swiperEl.querySelector('.swiper-button-next'),
      prevEl: swiperEl.querySelector('.swiper-button-prev'),
    },
  });
});
