// slider in
const swiper = new Swiper('.swiper-offer', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    centeredSlides: true,
    autoWidth: false,
    initialSlide: 2,
    speed: 4000,
    loop: true,
    autoplay: {
    delay: 1000
    },
    effect: "slide",  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
        320: {
          initialSlide: 2,
          speed: 4000,
          loop: true,
          autoplay: {
            delay: 1000
          },
          effect: "slide",  
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        },
    }
})    
// slider out
// slider-catalog
new Swiper ('.swiper-catalog', {
  
  breakpoints: {
    320: {
      slidesPerView: 2,
      initialSlide: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
      speed: 4000,
      loop: true,
      effect: "slide" 
    },
    1480: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 25,
      initialSlide: 4,
      speed: 4000,
      loop: true,
      effect: "slide",
    } 
} 
})
// slider-catalog out
// footer dropdown list
const dropBtn = document.querySelector('#drop-list')
const dropMenu = document.querySelector('.footer-menu-mobile')
const dropArrow = document.querySelector('.drop-arrow-client')
dropBtn.addEventListener('click', ()=> {
  dropMenu.classList.toggle('show')
  dropArrow.classList.toggle('rotate')
})