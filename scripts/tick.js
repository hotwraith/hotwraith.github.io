//import Math from 

let theTick = document.querySelector('.top');
let newQuoteButton = document.querySelector('button');

function setTick(json) {
    string = buildString(json);
    theTick.innerHTML = string;
}

function parseTick(json) {
    let text = json['lastGalaxyTick'];
    let array = text.match(/(\S*)T(\S{8})(?:.[0-9]*Z)/);
    let date = array[1];
    let time = array[2];
    return 'Last tick: ' + time + ' le ' + date;
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

fetch('http://tick.infomancer.uk/galtick.json')
    .then((response) => response.json())
    .then((json) => setTick(json))


newQuoteButton.addEventListener("click", () => {
    fetch('http://tick.infomancer.uk/galtick.json')
    .then((response) => response.json())
    .then((json) => setTick(json))
});