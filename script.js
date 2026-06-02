const introScreen = document.getElementById("introScreen");
const briefingScreen = document.getElementById("briefingScreen");
const gameScreen = document.getElementById("gameScreen");

const startBtn = document.getElementById("startBtn");
const beginBtn = document.getElementById("beginBtn");

startBtn.onclick = () => {
    introScreen.style.display = "none";
    briefingScreen.style.display = "flex";
};

beginBtn.onclick = () => {
    briefingScreen.style.display = "none";
    gameScreen.style.display = "flex";

    loadScene();
};

let sustainability = 40;
let happiness = 50;
let budget = 50;

let currentScene = 0;

const scenes = [

{
    speaker: "City Council Briefing",
    portrait: "council.png",

    dialogue:
    "A proposal is on the table to expand the downtown industrial district. It could boost the economy significantly.",

    choiceA: "Approve expansion for economic growth",
    choiceB: "Reject and prioritize environmental protection",

    effectA: { s: -10, h: -5, b: +25 },
    effectB: { s: +15, h: +10, b: -20 }
},

{
    speaker: "River Conservation Scientist",
    portrait: "scientist.png",

    dialogue:
    "Water quality in the river has dropped below safe levels. Immediate action is recommended.",

    choiceA: "Delay intervention due to budget limits",
    choiceB: "Fund emergency river cleanup",

    effectA: { s: -15, h: -10, b: +20 },
    effectB: { s: +25, h: +10, b: -25 }
},

{
    speaker: "Local Business Association",
    portrait: "business.png",

    dialogue:
    "Small businesses are struggling. They request tax cuts or subsidies to survive rising costs.",

    choiceA: "Reduce regulations and taxes for businesses",
    choiceB: "Invest in community-based sustainable businesses",

    effectA: { s: -5, h: +5, b: +20 },
    effectB: { s: +15, h: +15, b: -15 }
},

{
    speaker: "Neighborhood Representative",
    portrait: "citizens.png",

    dialogue:
    "Residents are demanding more green spaces, but land prices are rising rapidly.",

    choiceA: "Sell land to developers for housing projects",
    choiceB: "Preserve land for parks and community gardens",

    effectA: { s: -10, h: +10, b: +25 },
    effectB: { s: +20, h: +20, b: -20 }
},

{
    speaker: "Energy Infrastructure Report",
    portrait: "engineer.png",

    dialogue:
    "The city’s energy grid is outdated and heavily polluting. Upgrades are necessary soon.",

    choiceA: "Maintain current fossil-fuel system temporarily",
    choiceB: "Transition toward renewable energy infrastructure",

    effectA: { s: -15, h: -5, b: +30 },
    effectB: { s: +25, h: +15, b: -30 }
},

{
    speaker: "Citywide Emergency Alert",
    portrait: "alert.png",

    dialogue:
    "Multiple systems are now under strain. The city’s future depends on the patterns of your decisions.",

    choiceA: "Prioritize economic recovery above all else",
    choiceB: "Shift fully toward sustainable city redesign",

    effectA: { s: -30, h: -20, b: +40 },
    effectB: { s: +40, h: +30, b: -40 }
}

];

const sustainabilityEl = document.getElementById("sustainability");
const happinessEl = document.getElementById("happiness");
const budgetEl = document.getElementById("budget");

const portraitEl = document.getElementById("portrait");
const speakerEl = document.getElementById("speaker");
const dialogueEl = document.getElementById("dialogue");

const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");

function updateStats() {
    sustainabilityEl.textContent = sustainability;
    happinessEl.textContent = happiness;
    budgetEl.textContent = budget;
}

function loadScene() {
    const scene = scenes[currentScene];

    portraitEl.src = scene.portrait;
    speakerEl.textContent = scene.speaker;
    dialogueEl.textContent = scene.dialogue;

    choiceA.textContent = scene.choiceA;
    choiceB.textContent = scene.choiceB;

    updateStats();
}

function nextScene() {
    currentScene++;

    if (currentScene >= scenes.length) {

    if (sustainability >= 70 && budget >= 40) {
        document.body.classList.add("ending-good");
        speakerEl.textContent = "END OF TERM — SOLARPUNK FUTURE";
        dialogueEl.textContent =
            "The cycle has been broken. The city now thrives in ecological and economic balance.";
    }

    else if (sustainability >= 50 && budget >= 30) {
        document.body.classList.add("ending-balanced");
        speakerEl.textContent = "END OF TERM — SOMEWHAT BALANCED CITY";
        dialogueEl.textContent =
            "The city survives in cautious balance. Progress exists, but the system is still fragile.";
    }

    else if (sustainability >= 70 && budget < 40) {
        document.body.classList.add("ending-balanced");
        speakerEl.textContent = "END OF TERM — SOMEWHAT BALANCED CITY";
        dialogueEl.textContent =
            "The city is greener than ever before. However, the cost of transformation strained the city's finances. The cycle was broken, but maintaining this future will require difficult decisions.";
    }

    else {
        speakerEl.textContent = "END OF TERM — CYCLE CONTINUES";
        dialogueEl.textContent =
            "The system remains unchanged. Growth and damage continue in parallel.";
    }

    choiceA.style.display = "none";
    choiceB.style.display = "none";

    portraitEl.style.display = "none";

    return;
}


    loadScene();
}

choiceA.onclick = () => {
    const scene = scenes[currentScene];

    sustainability += scene.effectA.s;
    happiness += scene.effectA.h;
    budget += scene.effectA.b;

    nextScene();
};

choiceB.onclick = () => {
    const scene = scenes[currentScene];

    sustainability += scene.effectB.s;
    happiness += scene.effectB.h;
    budget += scene.effectB.b;

    nextScene();
};