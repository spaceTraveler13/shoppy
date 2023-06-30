// show more btn
const showMore = document.querySelector('#show-more-cards')
const cardsLength = document.querySelectorAll('.catalog-card').length
let cards = 8

showMore.addEventListener('click', ()=> {
    cards += 4
    const allCards = Array.from(document.querySelector('.catalog-card-body').children)
    const visibleCards = allCards.slice(0, cards)
    visibleCards.forEach((el)=> {el.style.display = 'block'})
    if (visibleCards.length === cardsLength) {
        showMore.style.display = 'none'
    }
})

