const cards = document.getElementsByClassName('card');
const carddiv = document.getElementById('cards')
const actionbar = document.getElementById('actionbar')

let player1cards = {
    number: [],
    house: []
}

let player2cards = {
    number: [],
    house: []
}

const images = [
    "images/spade.png",
    "images/club.png",
    "images/diamond.png",
    "images/heart.png",
]

function newCardAppend(){
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

    newCard.style.animation = `flyIn 0.4s ease-out forwards`;
}

function actionBar() {
    actionbar.classList.add('active')
}

function actionBarClose() {
    actionbar.classList.remove('active')
}

newCardAppend()
newCardAppend()
newCardAppend()
newCardAppend()

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