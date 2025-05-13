const heading = document.getElementById("countryname")
const sub = document.getElementById("attributes")
const maintext = document.getElementById("paragraph")
const link = document.getElementById("link")

const nameparts = {
    prefix: [
        "Al",
        "Bel",
        "Cor",
        "Dor",
        "Eri",
        "Fen",
        "Gar",
        "Hal",
        "Iri",
        "Kel",
        "Lor",
        "Mor",
        "Nor",
        "Ost",
        "Quel",
        "Zan"
    ],
    suffix: [
        "land",
        "via",
        "stan",
        "ia",
        "ara",
        "ania",
        "ara",
        "ora",
        "esia",
        "eria",
        "oth",
        "araq",
        "oria",
        "or",
        "ea",
        "um"
    ]
};

const exports = {
    name: [
        "oil",
        "automobiles",
        "machinery",
        "pharmaceuticals",
        "agricultural Products",
        "textiles",
        "natural Gas",
        "metals",
        "plastics",
        "furniture",
        "wood",
        "wool",
        "dairy",
    ],
    emoji: [
        "🛢️",
        "🚗",
        "🤖",
        "💊",
        "🌾",
        "👕",
        "⛽",
        "💎",
        "🧸",
        "🛋️",
        "🪵",
        "🐏",
        "🥛",
    ]
}

const governments = {
    name: ["democracy",
        "dictatorship",
        "monarchy",
        "anarchy",
    ],
    emoji: [
        "🗳️",
        "✊",
        "👑",
        "💀",
    ]
}

const economies = {
    name: ["capitalist",
        "communist",
    ],
    emoji: [
        "🎩",
        "🔨",
    ]
}

const ideologies = {
    name: ["nationalism",
        "liberalism",
        "centrism",
        "conservatism",
        "environmentalism",
        "socialism",
        "fascism",
    ],
    emoji: ["💪",
        "🍃",
        "⚖️",
        "🛡️",
        "♻️",
        "🌹",
        "🔫",
    ]
}

function randomBG(){
    const bg = document.getElementById("bg")
    const colour1 = `rgba(${Math.floor(Math.random() * 226)}, ${Math.floor(Math.random() * 226)}, ${Math.floor(Math.random() * 226)}, 0.635)`
    const colour2 = `rgba(${Math.floor(Math.random() * 226)}, ${Math.floor(Math.random() * 226)}, ${Math.floor(Math.random() * 226)}, 0.635)`
    bg.style.background = `linear-gradient(to bottom, ${colour1}, ${colour2})`
}

function newCountry(){
    const exportrandom = Math.floor(Math.random() * exports.name.length)
    const governmentrandom = Math.floor(Math.random() * governments.name.length)
    const economyrandom = Math.floor(Math.random() * economies.name.length)
    const ideologyrandom = Math.floor(Math.random() * ideologies.name.length)

    const selectedExport = exports.name[exportrandom]
    const selectedGovernment = governments.name[governmentrandom]
    const selectedEconomy = economies.name[economyrandom]
    const selectedIdeology = ideologies.name[ideologyrandom]
    
    const countryName = `${nameparts.prefix[Math.floor(Math.random() * nameparts.prefix.length)]}${nameparts.suffix[Math.floor(Math.random() * nameparts.suffix.length)]}`
    
    const exportFull = `${exports.emoji[exportrandom]} | ${(exports.name[exportrandom]).charAt(0).toUpperCase() + (exports.name[exportrandom]).slice(1)}`
    const governmentFull = `${governments.emoji[governmentrandom]} | ${(governments.name[governmentrandom]).charAt(0).toUpperCase() + (governments.name[governmentrandom]).slice(1)}`
    const economyFull = `${economies.emoji[economyrandom]} | ${(economies.name[economyrandom]).charAt(0).toUpperCase() + (economies.name[economyrandom]).slice(1)}`
    const ideologyFull = `${ideologies.emoji[ideologyrandom]} | ${(ideologies.name[ideologyrandom]).charAt(0).toUpperCase() + (ideologies.name[ideologyrandom]).slice(1)}`

    heading.innerHTML = countryName.toUpperCase()
    sub.innerHTML = `${governmentFull}<br>${economyFull}<br>${ideologyFull}<br>${exportFull}`
    maintext.innerHTML = `${countryName} is a ${selectedEconomy} nation with a focus on ${selectedIdeology}. Their government is a ${selectedGovernment} and export mainly ${selectedExport}.`
}

link.addEventListener("click", ()=>{
    randomBG()
    newCountry()
})

randomBG()
newCountry()