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
        428: {
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
// footer dropdown list
const dropBtn = document.querySelector('#drop-list')
const dropMenu = document.querySelector('.footer-menu-mobile')
const dropArrow = document.querySelector('.drop-arrow-client')
dropBtn.addEventListener('click', ()=> {
  dropMenu.classList.toggle('show')
  dropArrow.classList.toggle('rotate')
})