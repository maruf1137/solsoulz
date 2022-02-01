$('.owl-carousel').owlCarousel({
  loop:true,
  margin:27,
  nav:true,
  dots: false,
   navText: [
     `<svg><use xlink:href="img/icons.svg#icon-arrow_back_ios"></use></svg>`,
    `<svg><use xlink:href="img/icons.svg#icon-arrow_forward_ios"></use></svg>`,
  ],
  responsive:{
      0:{
          items:1
      },
      440:{
          items:2
      },
      643:{
          items:3
      },

      1200:{
          items:4
      },
  }
})
// $(".owl-carousel").owlCarousel({
//   loop: false,
//   margin: 20,
//   nav: true,
//   // navText: [
//   //   `<svg><use xlink:href="img/icons.svg#icon-chevron-thin-left"></use></svg>`,
//   //   `<svg><use xlink:href="img/icons.svg#icon-chevron-thin-right"></use></svg>`,
//   // ],
//   responsive: {
//     0: {
//       items: 4,
//     },
//   },
// });
