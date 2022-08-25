// data

import difficulties from "./js/data/difficulties.js"
import ancientsData from "./js/data/ancients.js"
import greenCardsData from "./js/data/mythicCards/green/index.js"
import brownCardsData from "./js/data/mythicCards/brown/index.js"
import blueCardsData from "./js/data/mythicCards/blue/index.js"


// apperance

const ancients = document.querySelectorAll('.ancient-card')
const difficulty = document.querySelector('.difficulty-container')
const difficultyButton = document.querySelector('.difficulty')
const shuffle = document.querySelector('.shuffle-button')
const deckIngame = document.querySelector('.deck-ingame')
const body = document.querySelector('body')

const appear = (element) => {
    element.classList.add('active')
}

ancients.forEach(element => {
    element.addEventListener('click', () => {
        appear(difficulty)
        deckIngame.style.visibility = 'hidden'
        ingameDeck.style.visibility = 'hidden'
    })
})

difficultyButton.addEventListener('click', () => {
    shuffle.style.display = 'inline'
})

//tracker

const stageOneGreen = document.getElementById('stg1-green')
const stageOneBrown = document.getElementById('stg1-brown')
const stageOneBlue = document.getElementById('stg1-blue')
const stageTwoGreen = document.getElementById('stg2-green')
const stageTwoBrown = document.getElementById('stg2-brown')
const stageTwoBlue = document.getElementById('stg2-blue')
const stageThreeGreen = document.getElementById('stg3-green')
const stageThreeBrown = document.getElementById('stg3-brown')
const stageThreeBlue = document.getElementById('stg3-blue')

// deckbuild

const ctulhu = document.querySelector('.ctulhu')
const azatoth = document.querySelector('.azatoth')
const iogsototh = document.querySelector('.iogsototh')
const shubniggurath = document.querySelector('.shubniggurath')
const normalButton = document.querySelector('.normal')
const hardButton = document.querySelector('.hard')
const easyButton = document.querySelector('.easy')
const sandboxButton = document.querySelector('.sandbox')
const nightmareButton = document.querySelector('.nightmare')

let fullDeck
let ancient = ''
let deck = []
let greens
let browns
let blues
let stageOne
let stageTwo
let stageThree

const clearDeck = () => {
    deck.length = 0
}

const shuffleArray = (arr) => {
    let res = [];
    let length = arr.length;
    while (length > 0) {
      let index = Math.floor(Math.random() * length);
      res.push(arr[index]);
      arr.splice(index, 1);
      length--;
    }
    return res;
}

const shuffleColors = () => {
    greens = shuffleArray(fullDeck.filter((element) => {
        return element.color === 'green'
    })) 
    browns = shuffleArray(fullDeck.filter((element) => {
        return element.color === 'brown'
    }))
    blues = shuffleArray(fullDeck.filter((element) => {
        return element.color === 'blue'
    }))
}

const setDifficulty = (level) => {
    if (level === 'normal') {
        fullDeck = blueCardsData.concat(brownCardsData, greenCardsData)
    }
    if (level === 'hard') {
        fullDeck = (blueCardsData.concat(brownCardsData, greenCardsData)).filter((element) => element.difficulty !== 'easy')
    }
    if (level === 'easy') {
        fullDeck = (blueCardsData.concat(brownCardsData, greenCardsData)).filter((element) => element.difficulty !== 'hard')
    }
    if (level === 'sandbox') {
        let preGreen
        let preBrown
        let preBlue
        if (ancient === 'ctulhu') {
            preGreen = (greenCardsData.filter((element) => element.difficulty === 'easy'))
            preBrown = (brownCardsData.filter((element) => element.difficulty === 'easy')).concat((shuffleArray(brownCardsData.filter((element) => element.difficulty === 'normal'))).splice(0, 4))
            preBlue = (blueCardsData.filter((element) => element.difficulty === 'easy'))
        }
        if (ancient === 'azatoth') {
            preGreen = (greenCardsData.filter((element) => element.difficulty === 'easy'))
            preBrown = (brownCardsData.filter((element) => element.difficulty === 'easy')).concat((shuffleArray(brownCardsData.filter((element) => element.difficulty === 'normal'))).splice(0, 4))
            preBlue = (blueCardsData.filter((element) => element.difficulty === 'easy'))
        }
        if (ancient === 'iogsototh') {
            preGreen = (greenCardsData.filter((element) => element.difficulty === 'easy'))
            preBrown = (brownCardsData.filter((element) => element.difficulty === 'easy')).concat((shuffleArray(brownCardsData.filter((element) => element.difficulty === 'normal'))).splice(0, 4))
            preBlue = (blueCardsData.filter((element) => element.difficulty === 'easy'))
        }
        if (ancient === 'shubniggurath') {
            preGreen = (greenCardsData.filter((element) => element.difficulty === 'easy')).concat((shuffleArray(greenCardsData.filter((element) => element.difficulty === 'normal'))).splice(0, 1))
            preBrown = (brownCardsData.filter((element) => element.difficulty === 'easy')).concat((shuffleArray(brownCardsData.filter((element) => element.difficulty === 'normal'))).splice(0, 3))
            preBlue = (blueCardsData.filter((element) => element.difficulty === 'easy'))
        }
        fullDeck = (preGreen.concat(preBrown, preBlue))
    }
    if (level === 'nightmare') {
        let preGreen
        let preBrown
        let preBlue
        if (ancient === 'ctulhu') {
            preGreen = (greenCardsData.filter((element) => element.difficulty === 'hard'))
            preBrown = (brownCardsData.filter((element) => element.difficulty === 'hard')).concat((shuffleArray(brownCardsData.filter((element) => element.difficulty === 'normal'))).splice(0, 4))
            preBlue = (blueCardsData.filter((element) => element.difficulty === 'hard'))
        }
        if (ancient === 'azatoth') {
            preGreen = (greenCardsData.filter((element) => element.difficulty === 'hard'))
            preBrown = (brownCardsData.filter((element) => element.difficulty === 'hard')).concat((shuffleArray(brownCardsData.filter((element) => element.difficulty === 'normal'))).splice(0, 4))
            preBlue = (blueCardsData.filter((element) => element.difficulty === 'hard'))
        }
        if (ancient === 'iogsototh') {
            preGreen = (greenCardsData.filter((element) => element.difficulty === 'hard'))
            preBrown = (brownCardsData.filter((element) => element.difficulty === 'hard')).concat((shuffleArray(brownCardsData.filter((element) => element.difficulty === 'normal'))).splice(0, 4))
            preBlue = (blueCardsData.filter((element) => element.difficulty === 'hard'))
        }
        if (ancient === 'shubniggurath') {
            preGreen = (greenCardsData.filter((element) => element.difficulty === 'hard')).concat((shuffleArray(greenCardsData.filter((element) => element.difficulty === 'normal'))).splice(0, 1))
            preBrown = (brownCardsData.filter((element) => element.difficulty === 'hard')).concat((shuffleArray(brownCardsData.filter((element) => element.difficulty === 'normal'))).splice(0, 3))
            preBlue = (blueCardsData.filter((element) => element.difficulty === 'hard'))
        }
        fullDeck = (preGreen.concat(preBrown, preBlue))
    }
}


const setTracker = () => {
    stageOneGreen.textContent = (stageOne.filter((element) => element.color === 'green')).length
    stageOneBrown.textContent = (stageOne.filter((element) => element.color === 'brown')).length
    stageOneBlue.textContent = (stageOne.filter((element) => element.color === 'blue')).length
    stageTwoGreen.textContent = (stageTwo.filter((element) => element.color === 'green')).length
    stageTwoBrown.textContent = (stageTwo.filter((element) => element.color === 'brown')).length
    stageTwoBlue.textContent = (stageTwo.filter((element) => element.color === 'blue')).length
    stageThreeGreen.textContent = (stageThree.filter((element) => element.color === 'green')).length
    stageThreeBrown.textContent = (stageThree.filter((element) => element.color === 'brown')).length
    stageThreeBlue.textContent = (stageThree.filter((element) => element.color === 'blue')).length
}

const setAncient = (ancient) => {
    if (ancient === 'ctulhu') {
        stageOne = ((browns.splice(0, 2)).concat(blues.slice(0, 2)))
        stageTwo = ((greens.splice(0, 1)).concat(browns.splice(0, 3)))
        stageThree = ((greens.splice(0, 3)).concat(browns.splice(0, 4)))
        setTracker()
    }
    if (ancient === 'azatoth') {
        stageOne = ((greens.splice(0, 1)).concat(browns.slice(0, 2), blues.slice(0, 1)))
        stageTwo = ((greens.splice(0, 2)).concat(browns.splice(0, 3), blues.splice(0, 1)))
        stageThree = ((greens.splice(0, 2)).concat(browns.splice(0, 4)))
        setTracker()
    }
    if (ancient === 'iogsototh') {
        stageOne = ((browns.splice(0, 2)).concat(blues.slice(0, 1)))
        stageTwo = ((greens.splice(0, 2)).concat(browns.splice(0, 3), blues.splice(0, 1)))
        stageThree = ((greens.splice(0, 3)).concat(browns.splice(0, 4)))
        setTracker()
    }
    if (ancient === 'shubniggurath') {
        stageOne = ((greens.splice(0, 1)).concat(browns.splice(0, 2), blues.slice(0, 1)))
        stageTwo = ((greens.splice(0, 3)).concat(browns.splice(0, 2), blues.splice(0, 1)))
        stageThree = ((greens.splice(0, 2)).concat(browns.splice(0, 4)))
        setTracker()
    }
}

const uncheckAll = () => {
    const checks = document.querySelectorAll('.difficulty-check')
    checks.forEach(element => element.checked = false)
}

ctulhu.addEventListener('click', () => {
    clearDeck()
    uncheckAll()
    lastCard.style.visibility = 'hidden'
    ancient = 'ctulhu'
    body.style.backgroundImage = 'url("./images/ctulhu.png")'
})

azatoth.addEventListener('click', () => {
    clearDeck()
    uncheckAll()
    lastCard.style.visibility = 'hidden'
    ancient = 'azatoth'
    body.style.backgroundImage = 'url("./images/azatoth.png")'
})

iogsototh.addEventListener('click', () => {
    clearDeck()
    uncheckAll()
    lastCard.style.visibility = 'hidden'
    ancient = 'iogsototh'
    body.style.backgroundImage = 'url("./images/iogsothoth.png")'
})

shubniggurath.addEventListener('click', () => {
    clearDeck()
    uncheckAll()
    lastCard.style.visibility = 'hidden'
    ancient = 'shubniggurath'
    body.style.backgroundImage = 'url("./images/shubniggurath.png")'
})

normalButton.addEventListener('click', () => {
    shuffle.style.display = 'inline'
    setDifficulty('normal')
    shuffleColors()
    setAncient(ancient)
})

hardButton.addEventListener('click', () => {
    shuffle.style.display = 'inline'
    setDifficulty('hard')
    shuffleColors()
    setAncient(ancient)
})

easyButton.addEventListener('click', () => {
    shuffle.style.display = 'inline'
    setDifficulty('easy')
    shuffleColors()
    setAncient(ancient)
})

sandboxButton.addEventListener('click', () => {
    shuffle.style.display = 'inline'
    setDifficulty('sandbox')
    shuffleColors()
    setAncient(ancient)
})

nightmareButton.addEventListener('click', () => {
    shuffle.style.display = 'inline'
    setDifficulty('nightmare')
    shuffleColors()
    setAncient(ancient)
})

shuffle.addEventListener('click', () => {
    deckIngame.style.visibility = 'visible'
    shuffle.style.display = 'none'
    deck = (shuffleArray(stageThree).concat(shuffleArray(stageTwo), shuffleArray(stageOne)))
    if (deck.length > 0) {
        ingameDeck.style.visibility = 'visible'
    }
})

// ingame

const ingameDeck = document.querySelector('.deck')
const lastCard = document.querySelector('.last-card')

ingameDeck.addEventListener('click', () => {
    let currentCard = deck.pop()
    lastCard.style.visibility = 'visible'
    lastCard.style.backgroundImage = `url('${currentCard.cardFace}')`
    if (deck.length === 0) {
        ingameDeck.style.visibility = 'hidden'
    }
    if (stageOneGreen.textContent > 0 || stageOneBrown.textContent > 0 || stageOneBlue.textContent > 0) {
        if (currentCard.color === 'green') {
            stageOneGreen.textContent = stageOneGreen.textContent - 1
        }
        if (currentCard.color === 'brown') {
            stageOneBrown.textContent = stageOneBrown.textContent - 1
        }
        if (currentCard.color === 'blue') {
            stageOneBlue.textContent = stageOneBlue.textContent - 1
        }
    }
    else if (stageTwoGreen.textContent > 0 || stageTwoBrown.textContent > 0 || stageTwoBlue.textContent > 0) {
        if (currentCard.color === 'green') {
            stageTwoGreen.textContent = stageTwoGreen.textContent - 1
        }
        if (currentCard.color === 'brown') {
            stageTwoBrown.textContent = stageTwoBrown.textContent - 1
        }
        if (currentCard.color === 'blue') {
            stageTwoBlue.textContent = stageTwoBlue.textContent - 1
        }
    }
    else if (stageThreeGreen.textContent > 0 || stageThreeBrown.textContent > 0 || stageThreeBlue.textContent > 0) {
        if (currentCard.color === 'green') {
            stageThreeGreen.textContent = stageThreeGreen.textContent - 1
        }
        if (currentCard.color === 'brown') {
            stageThreeBrown.textContent = stageThreeBrown.textContent - 1
        }
        if (currentCard.color === 'blue') {
            stageThreeBlue.textContent = stageThreeBlue.textContent - 1
        }
    }
})

