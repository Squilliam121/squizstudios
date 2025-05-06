const stage1 = document.getElementById("textmain")
const stage2 = document.getElementById("emojimain")

const emoji1 = document.getElementById("emoji1")
const emoji2 = document.getElementById("emoji2")
const emoji3 = document.getElementById("emoji3")
const emoji4 = document.getElementById("emoji4")
const emoji5 = document.getElementById("emoji5")
const emoji6 = document.getElementById("emoji6")
const emoji7 = document.getElementById("emoji7")
const emoji8 = document.getElementById("emoji8")
const emoji9 = document.getElementById("emoji9")

const goalInput = document.getElementById("message")

stage1.classList.add("invis")
stage2.classList.add("invis")

let itemText = "Travel the world!"
let itemEmoji = "🗺️"

goalInput.value = ""

let savedItems = JSON.parse(localStorage.getItem("goalList")) || [];

savedItems.forEach(entry => {
    const item = document.createElement('a');
    const divider = document.createElement('hr');
    item.textContent = `${entry.emoji} | ${entry.text}`;
    item.classList.add("listitem");
    divider.classList.add("divider")

    if (entry.ticked) {
        item.style.color = "#393939"; // Change text color to black
        item.style.textDecoration = "line-through"; // Add strikethrough
    }

    item.addEventListener("click", () => {
        entry.ticked = !entry.ticked;
        if (entry.ticked) {
            item.style.color = "#393939";
            item.style.textDecoration = "line-through";
        } else {
            item.style.color = ""; // Reset text color
            item.style.textDecoration = ""; // Remove strikethrough
        }
        localStorage.setItem("goalList", JSON.stringify(savedItems));
    });


    items.appendChild(item);
    items.appendChild(divider);
});

function stageOne() {
    stage1.classList.remove("invis")
}

function stageTwo() {
    emoji2.style.backgroundColor = "#000000a3"
    emoji3.style.backgroundColor = "#000000a3"
    emoji4.style.backgroundColor = "#000000a3"
    emoji5.style.backgroundColor = "#000000a3"
    emoji6.style.backgroundColor = "#000000a3"
    emoji7.style.backgroundColor = "#000000a3"
    emoji8.style.backgroundColor = "#000000a3"
    emoji9.style.backgroundColor = "#000000a3"
    emoji1.style.backgroundColor = "#000000a3"

    itemText = goalInput.value
    goalInput.value = ""
    itemEmoji = ""
    stage1.classList.add("invis")
    stage2.classList.remove("invis")
}

function newListItem() {
    stage1.classList.add("invis")
    stage2.classList.add("invis")
    const item = document.createElement('p');
    const divider = document.createElement('hr');
    item.textContent = itemEmoji + " | " + itemText;
    item.classList.add("listitem")
    divider.classList.add("divider")
    const items = document.getElementById('items');
    items.appendChild(item);
    items.appendChild(divider);
    
    const newEntry = {
        emoji: itemEmoji,
        text: itemText
    };

    savedItems.push(newEntry);

    localStorage.setItem("goalList", JSON.stringify(savedItems));
    window.location.href = "./";
}

function eraseList() {
    localStorage.clear();
    window.location.href = "./";
}

function emoji1Pressed() {
    emoji2.style.backgroundColor = "#000000a3"
    emoji3.style.backgroundColor = "#000000a3"
    emoji4.style.backgroundColor = "#000000a3"
    emoji5.style.backgroundColor = "#000000a3"
    emoji6.style.backgroundColor = "#000000a3"
    emoji7.style.backgroundColor = "#000000a3"
    emoji8.style.backgroundColor = "#000000a3"
    emoji9.style.backgroundColor = "#000000a3"
    emoji1.style.backgroundColor ="rgb(0, 115, 4)"
    itemEmoji = "✈️"
}

function emoji2Pressed() {
    emoji1.style.backgroundColor = "#000000a3"
    emoji3.style.backgroundColor = "#000000a3"
    emoji4.style.backgroundColor = "#000000a3"
    emoji5.style.backgroundColor = "#000000a3"
    emoji6.style.backgroundColor = "#000000a3"
    emoji7.style.backgroundColor = "#000000a3"
    emoji8.style.backgroundColor = "#000000a3"
    emoji9.style.backgroundColor = "#000000a3"
    emoji2.style.backgroundColor ="rgb(0, 115, 4)"
    itemEmoji = "🗺️"
}

function emoji3Pressed() {
    emoji2.style.backgroundColor = "#000000a3"
    emoji1.style.backgroundColor = "#000000a3"
    emoji4.style.backgroundColor = "#000000a3"
    emoji5.style.backgroundColor = "#000000a3"
    emoji6.style.backgroundColor = "#000000a3"
    emoji7.style.backgroundColor = "#000000a3"
    emoji8.style.backgroundColor = "#000000a3"
    emoji9.style.backgroundColor = "#000000a3"
    emoji3.style.backgroundColor ="rgb(0, 115, 4)"
    itemEmoji = "🍕"
}

function emoji4Pressed() {
    emoji2.style.backgroundColor = "#000000a3"
    emoji3.style.backgroundColor = "#000000a3"
    emoji1.style.backgroundColor = "#000000a3"
    emoji5.style.backgroundColor = "#000000a3"
    emoji6.style.backgroundColor = "#000000a3"
    emoji7.style.backgroundColor = "#000000a3"
    emoji8.style.backgroundColor = "#000000a3"
    emoji9.style.backgroundColor = "#000000a3"
    emoji4.style.backgroundColor ="rgb(0, 115, 4)"
    itemEmoji = "💼"
}

function emoji5Pressed() {
    emoji2.style.backgroundColor = "#000000a3"
    emoji3.style.backgroundColor = "#000000a3"
    emoji4.style.backgroundColor = "#000000a3"
    emoji1.style.backgroundColor = "#000000a3"
    emoji6.style.backgroundColor = "#000000a3"
    emoji7.style.backgroundColor = "#000000a3"
    emoji8.style.backgroundColor = "#000000a3"
    emoji9.style.backgroundColor = "#000000a3"
    emoji5.style.backgroundColor ="rgb(0, 115, 4)"
    itemEmoji = "😈"
}

function emoji6Pressed() {
    emoji2.style.backgroundColor = "#000000a3"
    emoji3.style.backgroundColor = "#000000a3"
    emoji4.style.backgroundColor = "#000000a3"
    emoji5.style.backgroundColor = "#000000a3"
    emoji1.style.backgroundColor = "#000000a3"
    emoji7.style.backgroundColor = "#000000a3"
    emoji8.style.backgroundColor = "#000000a3"
    emoji9.style.backgroundColor = "#000000a3"
    emoji6.style.backgroundColor ="rgb(0, 115, 4)"
    itemEmoji = "🌌"
}

function emoji7Pressed() {
    emoji2.style.backgroundColor = "#000000a3"
    emoji3.style.backgroundColor = "#000000a3"
    emoji4.style.backgroundColor = "#000000a3"
    emoji5.style.backgroundColor = "#000000a3"
    emoji6.style.backgroundColor = "#000000a3"
    emoji1.style.backgroundColor = "#000000a3"
    emoji8.style.backgroundColor = "#000000a3"
    emoji9.style.backgroundColor = "#000000a3"
    emoji7.style.backgroundColor ="rgb(0, 115, 4)"
    itemEmoji = "🎉"
}

function emoji8Pressed() {
    emoji2.style.backgroundColor = "#000000a3"
    emoji3.style.backgroundColor = "#000000a3"
    emoji4.style.backgroundColor = "#000000a3"
    emoji5.style.backgroundColor = "#000000a3"
    emoji6.style.backgroundColor = "#000000a3"
    emoji7.style.backgroundColor = "#000000a3"
    emoji1.style.backgroundColor = "#000000a3"
    emoji9.style.backgroundColor = "#000000a3"
    emoji8.style.backgroundColor ="rgb(0, 115, 4)"
    itemEmoji = "🕺"
}

function emoji9Pressed() {
    emoji2.style.backgroundColor = "#000000a3"
    emoji3.style.backgroundColor = "#000000a3"
    emoji4.style.backgroundColor = "#000000a3"
    emoji5.style.backgroundColor = "#000000a3"
    emoji6.style.backgroundColor = "#000000a3"
    emoji7.style.backgroundColor = "#000000a3"
    emoji1.style.backgroundColor = "#000000a3"
    emoji8.style.backgroundColor = "#000000a3"
    emoji9.style.backgroundColor ="rgb(0, 115, 4)"
    itemEmoji = "🏆"
}