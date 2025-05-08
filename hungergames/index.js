const heading = document.getElementById("day")
const events = document.getElementById("events")
const bottom = document.getElementById("bottomtext")
const content = document.getElementById("content")

const d1m = document.getElementById("d1m")
const d2m = document.getElementById("d2m")
const d3m = document.getElementById("d3m")
const d4m = document.getElementById("d4m")
const d5m = document.getElementById("d5m")
const d6m = document.getElementById("d6m")
const d7m = document.getElementById("d7m")
const d8m = document.getElementById("d8m")
const d9m = document.getElementById("d9m")
const d10m = document.getElementById("d10m")
const d11m = document.getElementById("d11m")
const d12m = document.getElementById("d12m")

const d1f = document.getElementById("d1f")
const d2f = document.getElementById("d2f")
const d3f = document.getElementById("d3f")
const d4f = document.getElementById("d4f")
const d5f = document.getElementById("d5f")
const d6f = document.getElementById("d6f")
const d7f = document.getElementById("d7f")
const d8f = document.getElementById("d8f")
const d9f = document.getElementById("d9f")
const d10f = document.getElementById("d10f")
const d11f = document.getElementById("d11f")
const d12f = document.getElementById("d12f")

let stage = "reaping"

document.getElementById("proceed-btn").addEventListener("click", newpage);

d1m.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d1m.value !== "" && d1m.readOnly === false) {
        d1m.readOnly = true;
        d1m.style.color = "#c6c6c6"
        startingtributes.push(d1m.value)
    }
})

d2m.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d2m.value !== "" && d2m.readOnly === false) {
        d2m.readOnly = true;
        d2m.style.color = "#c6c6c6"
        startingtributes.push(d2m.value)
    }
})

d3m.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d3m.value !== "" && d3m.readOnly === false) {
        d3m.readOnly = true;
        d3m.style.color = "#c6c6c6"
        startingtributes.push(d3m.value)
    }
})

d4m.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d4m.value !== "" && d4m.readOnly === false) {
        d4m.readOnly = true;
        d4m.style.color = "#c6c6c6"
        startingtributes.push(d4m.value)
    }
})

d5m.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d5m.value !== "" && d5m.readOnly === false) {
        d5m.readOnly = true;
        d5m.style.color = "#c6c6c6"
        startingtributes.push(d5m.value)
    }
})

d6m.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d6m.value !== "" && d6m.readOnly === false) {
        d6m.readOnly = true;
        d6m.style.color = "#c6c6c6"
        startingtributes.push(d6m.value)
    }
})

d7m.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d7m.value !== "" && d7m.readOnly === false) {
        d7m.readOnly = true;
        d7m.style.color = "#c6c6c6"
        startingtributes.push(d7m.value)
    }
})

d8m.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d8m.value !== "" && d8m.readOnly === false) {
        d8m.readOnly = true;
        d8m.style.color = "#c6c6c6"
        startingtributes.push(d8m.value)
    }
})

d9m.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d9m.value !== "" && d9m.readOnly === false) {
        d9m.readOnly = true;
        d9m.style.color = "#c6c6c6"
        startingtributes.push(d9m.value)
    }
})

d10m.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d10m.value !== "" && d10m.readOnly === false) {
        d10m.readOnly = true;
        d10m.style.color = "#c6c6c6"
        startingtributes.push(d10m.value)
    }
})

d11m.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d11m.value !== "" && d11m.readOnly === false) {
        d11m.readOnly = true;
        d11m.style.color = "#c6c6c6"
        startingtributes.push(d11m.value)
    }
})

d12m.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d12m.value !== "" && d12m.readOnly === false) {
        d12m.readOnly = true;
        d12m.style.color = "#c6c6c6"
        startingtributes.push(d12m.value)
    }
})

d1f.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d1f.value !== "" && d1f.readOnly === false) {
        d1f.readOnly = true;
        d1f.style.color = "#c6c6c6"
        startingtributes.push(d1f.value)
    }
})

d2f.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d2f.value !== "" && d2f.readOnly === false) {
        d2f.readOnly = true;
        d2f.style.color = "#c6c6c6"
        startingtributes.push(d2f.value)
    }
})

d3f.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d3f.value !== "" && d3f.readOnly === false) {
        d3f.readOnly = true;
        d3f.style.color = "#c6c6c6"
        startingtributes.push(d3f.value)
    }
})

d4f.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d4f.value !== "" && d4f.readOnly === false) {
        d4f.readOnly = true;
        d4f.style.color = "#c6c6c6"
        startingtributes.push(d4f.value)
    }
})

d5f.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d5f.value !== "" && d5f.readOnly === false) {
        d5f.readOnly = true;
        d5f.style.color = "#c6c6c6"
        startingtributes.push(d5f.value)
    }
})

d6f.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d6f.value !== "" && d6f.readOnly === false) {
        d6f.readOnly = true;
        d6f.style.color = "#c6c6c6"
        startingtributes.push(d6f.value)
    }
})

d7f.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d7f.value !== "" && d7f.readOnly === false) {
        d7f.readOnly = true;
        d7f.style.color = "#c6c6c6"
        startingtributes.push(d7f.value)
    }
})

d8f.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d8f.value !== "" && d8f.readOnly === false) {
        d8f.readOnly = true;
        d8f.style.color = "#c6c6c6"
        startingtributes.push(d8f.value)
    }
})

d9f.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d9f.value !== "" && d9f.readOnly === false) {
        d9f.readOnly = true;
        d9f.style.color = "#c6c6c6"
        startingtributes.push(d9f.value)
    }
})

d10f.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d10f.value !== "" && d10f.readOnly === false) {
        d10f.readOnly = true;
        d10f.style.color = "#c6c6c6"
        startingtributes.push(d10f.value)
    }
})

d11f.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d11f.value !== "" && d11f.readOnly === false) {
        d11f.readOnly = true;
        d11f.style.color = "#c6c6c6"
        startingtributes.push(d11f.value)
    }
})

d12f.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && d12f.value !== "" && d12f.readOnly === false) {
        d12f.readOnly = true;
        d12f.style.color = "#c6c6c6"
        startingtributes.push(d12f.value)
    }
})

async function newpage() {
    console.log(startingtributes.length)
    if (stage === "reaping" && startingtributes.length === 24){
        clear();
        stage = "bloodbath"
        content.style.display = "none"
        tributes = startingtributes
        tributecount = tributes.length
        bloodBath()
        return
    }else if (tributecount === 1){
        clear();
        document.getElementById("proceed-btn").style.display = "none"
        heading.innerText = "Winner"
        bottom.innerHTML = `<span class="highlight">${tributes[0]}</span> has won the Hunger Games!`
    }else if (stage === "bloodbath"){
        clear();
        stage = "day1"
        day()
        return
    }else if (stage.includes("night")){
        clear();
        const stagenum = stage.slice(5);
        stage = "day" + (parseInt(stagenum)+1) 
        console.log(stage)
        day()
        return
    }else if (stage.includes("day")){
        clear();
        const stagenum = stage.slice(3);
        stage = "night" + (parseInt(stagenum)) 
        console.log(stage)
        night()
        return
    }
}

function highlightTributeNames(line) {
    // Loop through all tributes' names and wrap them in a span with the "highlight" class
    tributes.forEach(tribute => {
        const regex = new RegExp(tribute, 'g'); // Create a global regex for the tribute's name
        line = line.replace(regex, `<span class="highlight">${tribute}</span>`); // Replace and highlight the name
    });
    currentdead.forEach(tribute => {
        const regex = new RegExp(tribute, 'g'); // Create a global regex for the tribute's name
        line = line.replace(regex, `<span class="dead">${tribute}</span>`); // Replace and highlight the name
    });

    return line;
}

const bloodbathEntries = {
    entry: ["PERSON1 run away from the cornucopia.",
        "PERSON1 fought PERSON2, but wasn't successful with murder",
        "PERSON1 kills PERSON2 with a sickle.",
        "PERSON1 finds a bow and a quiver of arrows.",
        "PERSON1, PERSON2, and PERSON3 get into a fight. PERSON1 triumphantly kills them both.",
        "PERSON1 snatches a bottle of alcohol and a rag.",
        "PERSON1 pushes PERSON2 into another tribute, who kills PERSON2.",
        "PERSON1 runs away from the Cornucopia.",
        "PERSON1 runs from the Cornucopia, tripping over a corpse.",
        "PERSON1 steps on a landmine.",
        "PERSON1, PERSON2, PERSON3, PERSON4, and PERSON5 team up and gather as many resources as possible.",
        "PERSON1 hides in the cornucopia.",
        "PERSON1 and PERSON2 run from the cornucopia together.",
        "PERSON1 and PERSON2 create a pact and run away from the cornucopia.",
        "PERSON1 flees the cornucopia.",
        "PERSON1 gets shot by PERSON2 with a bow.",
        "PERSON1 found an explosive."],
    people: ["1","2","2","1","3","1","2","1","1","1","5","1","2","2","1","2","1"],
}

const dayEntries = {
    entry: ["PERSON1 picked flowers.",
        "PERSON1 fought PERSON2, but wasn't successful with murder",
        "PERSON1 kills PERSON2.",
        "PERSON1 finds a bow and a quiver of arrows.",
        "PERSON1, PERSON2, and PERSON3 get into a fight. PERSON1 triumphantly kills them both.",
        "PERSON1 snatches a bottle of alcohol and a rag.",
        "PERSON1 steps on a landmine.",
        "PERSON1, PERSON2, PERSON3, PERSON4, and PERSON5 team up and hunt for other tributes.",
        "PERSON1, PERSON2, and PERSON3 team up and hunt for other tributes.",
        "PERSON1 sets off an explosive, killing PERSON2, PERSON3, and PERSON4.",
        "PERSON1 and PERSON2 create a pact and hunt together for the day.",
        "PERSON1 gets shot by PERSON2 with a bow.",
        "PERSON1 found an explosive.",
        "PERSON1 commits suicide.",
        "PERSON1, PERSON2, and PERSON3 raid PERSON4s camp.",
        "PERSON1 gets PERSON2 to kill them.",
        "PERSON1 travels to higher ground.",
        "PERSON1 swims in a nearby stream.",
        "PERSON1 attacks PERSON2, but PERSON2 manages to escape.",
        "PERSON1 runs away from PERSON2.",
        "PERSON1 and PERSON2 fight PERSON3 and PERSON4, PERSON1 and PERSON2 win.",
        "PERSON1 fights PERSON2, but loses and dies.",
        "PERSON1 stalks PERSON2.",
        "PERSON1 hunts for other tributes.",
        "PERSON1 unknowingly eats toxic berries."],
    people: ["1","2","2","1","3","1","1","5","3","4","2","2","1","1","4","2","1","1","2","2","4","2","2","1","1"],
}

const nightEntries = {
    entry: ["PERSON1 stayed up.",
        "PERSON1 slept through the night",
        "PERSON1 killed PERSON2 in their sleep",
        "PERSON1 sees a campfire in the distance, but stays back.",
        "PERSON1 sees and visits a campfire, but gets killed by PERSON2.",
        "PERSON1, PERSON2, and PERSON3 sleep in shifts.",
        "PERSON1, PERSON2, PERSON3, and PERSON4 sleep in shifts.",
        "PERSON1, PERSON2, and PERSON3 sleep in shifts, but PERSON1 murders them both.",
        "PERSON1 and PERSON2 huddle for the night.",
        "PERSON1 and PERSON2 hold hands.",
        "PERSON1 and PERSON2 fight, but both retreat.",
        "PERSON1 watchs PERSON2 sleep from afar.",
        "PERSON1 cries themselves to sleep.",
        "PERSON1, PERSON2, and PERSON3 sing together.",
        "PERSON1 sneaks into PERSON2s camp and murders them.",
        "PERSON1 builds a campfire.",
        "PERSON1 runs into PERSON2, and they set up camp together.",
        "PERSON1 lets PERSON2 into their shelter."
    ],
    people: ["1","1","2","1","2","3","4","3","2","2","2","2","1","3","2","1","2","2"],
}

let startingtributes = []
let tributes = startingtributes
let tributecount = tributes.length
let eventslist = []
let currentdead = []

function deaths(thisentry, thisperson, personnow) {
    const deathConditions = [
        { entry: bloodbathEntries.entry[2], person: "PERSON2" },
        { entry: bloodbathEntries.entry[4], person: "PERSON2" },
        { entry: bloodbathEntries.entry[4], person: "PERSON3" },
        { entry: bloodbathEntries.entry[6], person: "PERSON2" },
        { entry: bloodbathEntries.entry[9], person: "PERSON1" },
        { entry: bloodbathEntries.entry[15], person: "PERSON1" },
        { entry: dayEntries.entry[2], person: "PERSON2" },
        { entry: dayEntries.entry[4], person: "PERSON2" },
        { entry: dayEntries.entry[4], person: "PERSON3" },
        { entry: dayEntries.entry[6], person: "PERSON1" },
        { entry: dayEntries.entry[9], person: "PERSON2" },
        { entry: dayEntries.entry[9], person: "PERSON3" },
        { entry: dayEntries.entry[9], person: "PERSON4" },
        { entry: dayEntries.entry[11], person: "PERSON1" },
        { entry: dayEntries.entry[13], person: "PERSON1" },
        { entry: dayEntries.entry[15], person: "PERSON1" },
        { entry: dayEntries.entry[20], person: "PERSON3" },
        { entry: dayEntries.entry[20], person: "PERSON4" },
        { entry: dayEntries.entry[21], person: "PERSON1" },
        { entry: dayEntries.entry[24], person: "PERSON1" },
        { entry: nightEntries.entry[2], person: "PERSON2" },
        { entry: nightEntries.entry[4], person: "PERSON1" },
        { entry: nightEntries.entry[7], person: "PERSON2" },
        { entry: nightEntries.entry[7], person: "PERSON3" },
        { entry: nightEntries.entry[14], person: "PERSON2" },
    ];

    for (let condition of deathConditions) {
        if (thisentry === condition.entry && personnow === condition.person) {
            currentdead.push(thisperson);
            tributes = tributes.filter(x => x !== thisperson);
            break; // Exit the loop after finding the matching condition
        }
    }
};

function bloodBath() {
    heading.innerText = "Bloodbath"

    let current = tributecount
    let currenttributes = [...tributes]
    do {
        let entrynum = Math.floor(Math.random() * 17);

        while (current < bloodbathEntries.people[entrynum]) {
            entrynum = Math.floor(Math.random() * 17);
        }

        let currententry = bloodbathEntries.entry[entrynum]

        for (i=0; i<bloodbathEntries.people[entrynum]; i++){
            const currenttribute = currenttributes[Math.floor(Math.random() * currenttributes.length)]
            const person = "PERSON" + (i + 1);
            currententry = currententry.replace(new RegExp(person, 'g'), currenttribute);
            currenttributes = currenttributes.filter(x => x !== currenttribute);
            deaths(bloodbathEntries.entry[entrynum], currenttribute, person)
        }

        current -= bloodbathEntries.people[entrynum]
        eventslist.push(highlightTributeNames(currententry))
    } while (current > 0)
    
    let eventtextidle = ""
    
    for (i=0; i < eventslist.length; i++){
        const eventstext = eventslist[i] + "<br>"
        eventtextidle += eventstext;
    }
    
    events.innerHTML += eventtextidle;

    for (i = 0; i < currentdead.length; i++) {
        let deadtext = "";
        const deadTribute = currentdead[i];  // Renamed variable
        const highlightedDeadTribute = `<span class="highlight">${deadTribute}</span>`;  // Wrap the name in the span for highlighting
    
        if (currentdead.length === 1) {
            deadtext = highlightedDeadTribute;
            bottom.innerHTML += deadtext;
            bottom.innerHTML += " is dead";
            break;
        } else if (i === currentdead.length - 1) {
            deadtext = "and " + highlightedDeadTribute + " ";
        } else {
            deadtext = highlightedDeadTribute + ", ";
        }
        bottom.innerHTML += deadtext;
    }

    if (currentdead.length > 1){
        bottom.innerHTML += "are dead"
    }
    

    if (currentdead.length === 0){
        bottom.innerHTML += "No one is dead"
    }

    tributecount = tributes.length
    let amountremaining = `<br><span class="highlight">${tributecount}</span> tributes remaining`
    bottom.innerHTML += amountremaining
}

function day() {
    heading.innerText = stage.replace("day", "Day ");

    let current = tributecount
    let currenttributes = [...tributes]
    do {
        let entrynum = Math.floor(Math.random() * 25);

        while (current < dayEntries.people[entrynum]) {
            entrynum = Math.floor(Math.random() * 25);
        }

        let currententry = dayEntries.entry[entrynum]

        for (i=0; i<dayEntries.people[entrynum]; i++){
            const currenttribute = currenttributes[Math.floor(Math.random() * currenttributes.length)]
            const person = "PERSON" + (i + 1);
            currententry = currententry.replace(new RegExp(person, 'g'), currenttribute);
            currenttributes = currenttributes.filter(x => x !== currenttribute);
            deaths(dayEntries.entry[entrynum], currenttribute, person)
        }

        current -= dayEntries.people[entrynum]
        eventslist.push(highlightTributeNames(currententry))
    } while (current > 0)
    
    let eventtextidle = ""
    
    for (i=0; i < eventslist.length; i++){
        const eventstext = eventslist[i] + "<br>"
        eventtextidle += eventstext;
    }
    
    events.innerHTML += eventtextidle;

    for (i = 0; i < currentdead.length; i++) {
        let deadtext = "";
        const deadTribute = currentdead[i];  // Renamed variable
        const highlightedDeadTribute = `<span class="highlight">${deadTribute}</span>`;  // Wrap the name in the span for highlighting
    
        if (currentdead.length === 1) {
            deadtext = highlightedDeadTribute;
            bottom.innerHTML += deadtext;
            bottom.innerHTML += " is dead";
            break;
        } else if (i === currentdead.length - 1) {
            deadtext = "and " + highlightedDeadTribute + " ";
        } else {
            deadtext = highlightedDeadTribute + ", ";
        }
        bottom.innerHTML += deadtext;
    }

    if (currentdead.length > 1){
        bottom.innerHTML += "are dead"
    }
    

    if (currentdead.length === 0){
        bottom.innerHTML += "No one is dead"
    }

    tributecount = tributes.length
    let amountremaining = `<br><span class="highlight">${tributecount}</span> tributes remaining`
    bottom.innerHTML += amountremaining
}

function night() {
    heading.innerText = stage.replace("night", "Night ");

    let current = tributecount
    let currenttributes = [...tributes]
    do {
        let entrynum = Math.floor(Math.random() * 18);

        while (current < nightEntries.people[entrynum]) {
            entrynum = Math.floor(Math.random() * 18);
        }

        let currententry = nightEntries.entry[entrynum]

        for (i=0; i<nightEntries.people[entrynum]; i++){
            const currenttribute = currenttributes[Math.floor(Math.random() * currenttributes.length)]
            const person = "PERSON" + (i + 1);
            currententry = currententry.replace(new RegExp(person, 'g'), currenttribute);
            currenttributes = currenttributes.filter(x => x !== currenttribute);
            deaths(nightEntries.entry[entrynum], currenttribute, person)
        }

        current -= nightEntries.people[entrynum]
        eventslist.push(highlightTributeNames(currententry))
    } while (current > 0)
    
    let eventtextidle = ""
    
    for (i=0; i < eventslist.length; i++){
        const eventstext = eventslist[i] + "<br>"
        eventtextidle += eventstext;
    }
    
    events.innerHTML += eventtextidle;

    for (i = 0; i < currentdead.length; i++) {
        let deadtext = "";
        const deadTribute = currentdead[i];  // Renamed variable
        const highlightedDeadTribute = `<span class="highlight">${deadTribute}</span>`;  // Wrap the name in the span for highlighting
    
        if (currentdead.length === 1) {
            deadtext = highlightedDeadTribute;
            bottom.innerHTML += deadtext;
            bottom.innerHTML += " is dead";
            break;
        } else if (i === currentdead.length - 1) {
            deadtext = "and " + highlightedDeadTribute + " ";
        } else {
            deadtext = highlightedDeadTribute + ", ";
        }
        bottom.innerHTML += deadtext;
    }

    if (currentdead.length > 1){
        bottom.innerHTML += "are dead"
    }
    

    if (currentdead.length === 0){
        bottom.innerHTML += "No one is dead"
    }

    tributecount = tributes.length
    let amountremaining = `<br><span class="highlight">${tributecount}</span> tributes remaining`
    bottom.innerHTML += amountremaining
}

function clear(){
    heading.innerText = ""
    events.innerHTML = ""
    bottom.innerHTML = ""
    eventslist = [];
    currentdead = [];
}