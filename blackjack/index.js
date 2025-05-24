const cards = document.getElementsByClassName('card');
const carddiv = document.getElementById('cards')
const actionbar = document.getElementById('actionbar')
const headings = document.getElementsByClassName('default-text')
const input = document.getElementById('startinput')
const invisibles = document.querySelectorAll('.invisible');
const start = document.getElementById('start')
const highscore = document.getElementById('highscore')

let scores = [0]
let players = 0
let currentplayer = 1
let currenthighscore = 0

const images = [
    "images/spade.png",
    "images/club.png",
    "images/diamond.png",
    "images/heart.png",
]

function winnerNow() {
    for (let i = 0; i < scores.length; i++){
        if (scores[i] >= currenthighscore){
            currenthighscore = scores[i]
        }
    }
    clearCards()
    for (let i = 0; i < headings.length; i++) {
        headings[i].classList.add("invisible")
    }
    highscore.classList.add('invisible')
    start.classList.remove('invisible')
    actionBarClose()
    let winner = scores.findIndex(item => item === currenthighscore);
    start.innerText = `Player ${winner+1} has won!`
}

async function newCardAppend(){
    const newCard = document.createElement('div')
    newCard.classList.add('card')

    const ttext = document.createElement('h6')
    ttext.classList.add('ttext')

    const btext = document.createElement('h6')
    btext.classList.add('btext')

    const timg = document.createElement('img')
    timg.classList.add('timg')
    
    const bimg = document.createElement('img')
    bimg.classList.add('bimg')

    const mimg = document.createElement('img')
    mimg.classList.add('mimg')

    const cardimg = Math.floor(Math.random() * images.length)
    timg.src = images[cardimg]
    bimg.src = images[cardimg]
    mimg.src = images[cardimg]

    const cardnum = Math.floor((Math.random() * 10) + 1)
    ttext.innerText = cardnum
    btext.innerText = cardnum

    newCard.appendChild(ttext);
    newCard.appendChild(btext);
    newCard.appendChild(timg);
    newCard.appendChild(bimg);
    newCard.appendChild(mimg);

    carddiv.appendChild(newCard);
    scores[currentplayer-1] += cardnum
    newCard.style.animation = `flyIn 0.4s ease-out forwards`;
    if (scores[currentplayer-1] > 21) {
        scores[currentplayer-1] = 0
        nextPlayer()
        return
    }else if (scores[currentplayer-1] == 21) {
        winnerNow()
        return
    }
}

function clearCards() {
    while (carddiv.firstChild) {
        carddiv.removeChild(carddiv.firstChild);
    }
}

function changeHeadings() {
    for (let i = 0; i < headings.length; i++) {
        headings[i].innerText = `Player ${currentplayer}`;
    }
}

function nextPlayer() {
    if (currentplayer < players){
        scores.push(0)
        currentplayer += 1
        for (let i = 0; i < scores.length; i++){
            if (scores[i] >= currenthighscore){
                currenthighscore = scores[i]
            }
        }
        clearCards()
        changeHeadings()
        newCardAppend()
        newCardAppend()
        highscore.innerHTML = `Highscore: ${currenthighscore}`
    }else if (currentplayer >= players){
        for (let i = 0; i < scores.length; i++){
            if (scores[i] >= currenthighscore){
                currenthighscore = scores[i]
            }
        }
        clearCards()
        for (let i = 0; i < headings.length; i++) {
            headings[i].classList.add("invisible")
        }
        highscore.classList.add('invisible')
        start.classList.remove('invisible')
        actionBarClose()
        let winner = scores.findIndex(item => item === currenthighscore);
        start.innerText = `Player ${winner+1} has won!`
    }
}

function actionBar() {
    actionbar.classList.add('active')
}

function actionBarClose() {
    actionbar.classList.remove('active')
}

const cardsArray = Array.from(cards); // convert HTMLCollection to real array
cardsArray.forEach((card, index) => {
    const timg = card.getElementsByClassName('timg')[0]
    const bimg = card.getElementsByClassName('bimg')[0]
    const mimg = card.getElementsByClassName('mimg')[0]

    card.style.animation = `flyIn 0.4s ease-out forwards`;
    card.style.animationDelay = `${index * 0.1}s`;

    const cardimg = Math.floor(Math.random() * images.length)
    timg.src = images[cardimg]
    bimg.src = images[cardimg]
    mimg.src = images[cardimg]
});

input.addEventListener('keydown', (event)=>{
    if (event.key === "Enter" && !isNaN(input.value)){
        document.body.classList.remove('p1')
        invisibles.forEach(el => {
            el.classList.remove('invisible');
        });
        input.classList.add('invisible')
        start.classList.add('invisible')
        players = input.value
        newCardAppend()
        newCardAppend()
    }
})