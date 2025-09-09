//import Math from 

let bingoButtons = document.querySelectorAll('#randomized');    
let activableButtons = document.querySelectorAll('.button-bingo');    
let resetButton = document.querySelector('.reset');   
let listActive = [] 

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function buildBingo(allCases) {
    var shuffled
    if(localStorage.getItem('currentOrder') == 'null'){
        shuffled = shuffle(allCases)
        localStorage.setItem('currentOrder', JSON.stringify(shuffled));
    }
    else {
        shuffled = JSON.parse(localStorage.getItem('currentOrder'));
    }
    for (let i = 0; i < bingoButtons.length; i++) {
        bingoButtons[i].innerHTML = shuffled[i][0]
    } 
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array
}




fetch('assets/Valbingo.json')
    .then((response) => response.json())
    .then((json) => buildBingo(json["allValbingo"]))



resetButton.addEventListener("click", () => {
    localStorage.setItem('currentOrder', null);
    localStorage.setItem('activeButtons', null);
    window.location.reload();
})

for (let i = 0; i < activableButtons.length; i++) {
    listActive[i] = false
    activableButtons[i].addEventListener("click", () => {
        if(activableButtons[i].className == "button-bingo-active"){
            activableButtons[i].className = "button-bingo"
            listActive[i] = false
            localStorage.setItem('activeButtons', JSON.stringify(listActive))
        }
        else {activableButtons[i].className = "button-bingo-active"; listActive[i] = true; localStorage.setItem('activeButtons', JSON.stringify(listActive))}
    });
    
}

if(localStorage.getItem('activeButtons') != 'null') {
    listActive = JSON.parse(localStorage.getItem('activeButtons'))
    for (let i = 0; i < listActive.length; i++) {
        if(listActive[i] == true) {
            activableButtons[i].className = "button-bingo-active"
        }
    }
}