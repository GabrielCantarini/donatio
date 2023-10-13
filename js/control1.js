
var swiper = new Swiper(".dois", {
  slidesPerView: 12,
  slidesPerGroup: 12,
  
  spaceBetween: 30,
  loop: false,
  freeMode: true,
  fade: 'true',

  navigation: {
    nextEl: ".btn1-next",
    prevEl: ".btn1-prev",
  },
  pagination: {
    el: ".pagination-1",
    clickable: true,

  },

  breakpoints: {


    0: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,

    },

    400: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: -50,

    },

    500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 4,
      slidesPerGroup: 4,

    },

    700: {
      slidesPerView: 5,
      slidesPerGroup: 5,


    },
    800: {
      slidesPerView: 6,
      slidesPerGroup: 6,


    },
    900: {
      slidesPerView: 7,
      slidesPerGroup: 7,


    },
    1000: {
      slidesPerView: 8,
      slidesPerGroup: 8,
      paceBetween: 60,

    },
    1065: {
      slidesPerView: 9,
      slidesPerGroup: 9,

    },

    1230: {
      slidesPerView: 10,
      slidesPerGroup: 10,


    },
    1350: {
      slidesPerView: 11,
      slidesPerGroup: 11,


    },
    1500: {
      slidesPerView: 13,
      slidesPerGroup: 12,
      spaceBetween: 60,


    }

  }
});
