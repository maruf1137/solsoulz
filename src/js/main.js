// caresol with jaquery

$(".owl-carousel-rulls").owlCarousel({
  loop: true,
  margin: 27,
  nav: true,
  dots: false,
  navText: [
    `<svg><use xlink:href="img/icons.svg#icon-arrow_back_ios"></use></svg>`,
    `<svg><use xlink:href="img/icons.svg#icon-arrow_forward_ios"></use></svg>`,
  ],
  responsive: {
    0: {
      items: 1,
    },
    440: {
      items: 2,
    },
    643: {
      items: 3,
    },

    1200: {
      items: 4,
    },
  },
});

$(".owl-carousel-team").owlCarousel({
  loop: true,
  margin: 27,
  nav: true,
  dots: false,
  navText: [
    `<svg><use xlink:href="img/icons.svg#icon-arrow_back_ios"></use></svg>`,
    `<svg><use xlink:href="img/icons.svg#icon-arrow_forward_ios"></use></svg>`,
  ],
  responsive: {
    0: {
      items: 1,
    },
    550: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});


// faqs
const btns = document.querySelectorAll(".faqs__btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const parentEl = e.currentTarget.parentElement;
    parentEl.classList.toggle("show-text");
    console.log(parentEl);
  });
});

// mobile nav
const mblNavBtn =  document.querySelector('.nav-bar-btns')
const navContainer = document.querySelector('.home__nav')

mblNavBtn.addEventListener('click', function () {
  navContainer.classList.toggle('show-mbl-nav')
  mblNavBtn.classList.toggle('show-mbl-nav')
})