const term = document.querySelector(".term");
const checkButton = document.querySelector(".check");
const definition = document.querySelector(".definition");

const NextButton = document.querySelector(".next");

const pegs = {
    1: "tie",
    2: "naoh",
    3: "ma",
    4: "rye",
    5: "law",
    a: "apple",
    b: "banana",
    c: "sea",
    d: "bow",
    e: "ear",
    f: "flag",
    g: "gen",
    h: "eej",
    i: "eye",
    j: "jog",
    k: "key",
    l:  "angle-iron",
    m:  "rake",
    n:   "switch",
    0:  "eye glass",
    p: "pea",
    q:  "kiwi chama kelem",
    r:  "arail omo",
    s:  "ice",
    t:  "tea pot",
    u:  "cup",
    v: "shirt",
    w:  "bush",
    x:  "axe",
    y: "bala",
    z:  "zip",
    ',': "goma",
    '.': "STOP",
    ";": "sim card",
    '?': "kishim"

};

var data = Object.entries(pegs);
 function getWord(){
    random = data[Math.floor(Math.random() * data.length)];
    term.innerHTML = `<h3>${random[0]}</h3>`
    definition.innerHTML = `<h3>${random[1]}</h3>`
 }


checkButton.addEventListener('click', function(){
    definition.style.display="block";
});

NextButton.addEventListener('click', function(){
    definition.style.display="none";
    getWord();
});

