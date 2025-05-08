const heading = document.getElementById("day")
const events = document.getElementById("events")
const bottom = document.getElementById("bottomtext")

let stage = "reaping"

document.getElementById("proceed-btn").addEventListener("click", newpage);

function newpage() {
    clear();

    if (stage === "reaping"){
        stage = "bloodbath"
        bloodBath()
        return
    }else if (stage === "bloodbath"){
        stage = "day1"
        day()
        return
    }else if (stage.includes("night")){
        const stagenum = stage.slice(5);
        stage = "day" + (parseInt(stagenum)+1) 
        console.log(stage)
        day()
        return
    }else{
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

let startingtributes = ["Gabe","William","Pabbles","Dash","EJ","Eli","Storm","Mitchell","Jambo","Jam","Ollie","Otherwilliam","Toby","Devhan","Louis","Keaton","Matthew","Lachie","Pharaoh","Harry","Sean","Zab","Gav","Jack"]
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