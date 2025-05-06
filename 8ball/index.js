const button = document.querySelector('button');
const bg = document.getElementById('bg');
const main = document.getElementById('main');

const choices = ["Yes", "No", "Sure", "Never", "Heck yeah", "Not in a million years", "Yes, ask out that girl", "0% Certainty", "YES YES YES", "Maybe", "50/50", "Without a doubt", "Not sure", "It's, complicated...", "Don't count on it", "Nah bro", "I like cheese", "Yes Pookie <3", "🍠🍠🍠 No more no less", "😘", "In your dreams", "🏠 Free house for you", "I curse you with crippling credit card debt", "Did you just speak?!", "Rethink your question", "Yes, I know you think about it deep down"]

let selected = false

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

button.addEventListener('mouseover', function() {
    bg.style.backgroundColor = '#000000ed';
    bg.style.backdropFilter = 'blur(20px)';
    main.style.scale = 1.3;
    if (selected == false){
        button.innerText = "Click to seal your fate";
    }
});

button.addEventListener('mouseout', function() {
    if (selected == false){
    bg.style.backgroundColor = '#0e0013de';
    bg.style.backdropFilter = 'blur(14px)';
    main.style.scale = 1;
    }else{
        button.style.color = "white"
        button.style.backgroundColor = "#0b001ddd"
        main.style.scale = 1.3
    }
});

async function selectChoice() {
    selected = true
    for (i = 0; i < 10; i++){
        const random = choices[Math.floor(Math.random() * choices.length)];
        button.innerText = random;
        console.log(random)

        await wait(200);
    }
    bg.style.backgroundColor = '#0e0013de';
    bg.style.backdropFilter = 'blur(14px)';
    main.style.scale = 1;
    button.style.color = "";
    button.style.backgroundColor = "";
    selected = false
}