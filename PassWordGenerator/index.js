// --- 1. DEFINE VARIABLES (The code crashed without these) ---
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")

let cardsEL = document.getElementById("cards-el")

let randomnumberEl = document.getElementById("random-el")

let players = {
    playerName: "Per",
    playerChips: 145
}



let playerEl = document.getElementById("player-el")
playerEl.innerText = players.playerName + ": $" + players.playerChips



// --- 2. THE MATH FUNCTION ---
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1)
    if (randomNumber == 1){
        randomNumber = 11
    }
    if (randomNumber >= 10){
        randomNumber = 10
    }
    
    return randomNumber
}




// --- 4. GAME LOGIC ---
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}

function renderGame() {
    cardsEL.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    // Only allow new card if alive and no blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}