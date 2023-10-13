
var swiper = new Swiper(".slide-content", {
  slidesPerView: 5,
  slidesPerGroup: 5,
  grabCursor: 'true',
  spaceBetween: 30,
  loop: false,
  freeMode: true,
  fade: 'true',


  pagination: {
    el: ".pagination-2",
    clickable: true,

  },
  navigation: {
    nextEl: ".btn2-next",
    prevEl: ".btn2-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      
    },

    525: {
      slidesPerView: 2,
      slidesPerGroup: 2,

    },

    730: {
      slidesPerView: 3,
      slidesPerGroup: 3,

    },
    960: {
      slidesPerView: 4,
      slidesPerGroup: 4,

    },
    1175: {
      slidesPerView: 5,
      slidesPerGroup: 5,

    }

  }
});
