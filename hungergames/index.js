const heading = document.getElementById("day")
const events = document.getElementById("events")
const bottom = document.getElementById("bottomtext")

let stage = "reaping"

document.getElementById("proceed-btn").addEventListener("click", newpage);

function newpage() {
    clear()

    if (stage === "reaping"){
        bloodBath() 
        stage = "bloodbath"
    }else if (stage === "bloodbath"){
        stage = "day"
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

function clear(){
    heading.innerText = ""
    events.innerHTML = ""
    bottom.innerHTML = ""
    eventslist = [];
    currentdead = [];
}