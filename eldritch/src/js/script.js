// apperance

const ancients = document.querySelector('.ancients-container')
const difficulty = document.querySelector('.difficulty-container')
const difficultyButton = document.querySelector('.difficulty')
const shuffle = document.querySelector('.shuffle-button')
const deckIngame = document.querySelector('.deck-ingame')

const appear = (element) => {
    element.classList.add('active')
}

ancients.addEventListener('click', () => {
    appear(difficulty)
})

difficultyButton.addEventListener('click', () => {
    shuffle.style.visibility = 'visible'
})

shuffle.addEventListener('click', () => {
    deckIngame.style.visibility = 'visible'
    shuffle.style.visibility = 'hidden'
})

// ancient

const ancientCtulhu = document.querySelector('.ctulhu')


