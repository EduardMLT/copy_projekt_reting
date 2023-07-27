import swiper from 'swiper';

var  swiperOne = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        
  },
  
    slidesPerView: 0,
    centeredSlides: false,
    slidesPerGroupSkip: 0,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  
     //безкінцево
    loop : true,    

});
  
// щоб працював swiper - в index.html внесено
//<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
//<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
