//import Math from 

const images = [
  [ 'altan.jpg', 'Altan Gil\'Sayan' ],
  [ 'amiedematthieu.jpg', 'Amie de Matthieu' ],
  [ 'artis.jpg', 'Artis' ],
  [ 'bjorn.jpg', 'Bjorn Wil\'Wayard' ],
  [ 'carboist.jpg', 'Maïtre Carboist' ],
  [ 'dametrain.jpg', 'Dame du Train' ],
  [ 'duom.jpg', 'Duom Nil\'Erg' ],
  [ 'elicia.jpg', 'Élicia Gil\'Sayan' ],
  [ 'ellana.jpg', 'Ellana Caldin' ],
  [ 'franchina.jpg', 'Inspectrice Franchina' ],
  [ 'hans.jpg', 'Hans' ],
  [ 'hilmuran.jpg', 'Seigneure Hil\'Muran' ],
  [ 'maniel.jpg', 'Maniel' ],
  [ 'marchand1.jpg', 'Marchand 1' ],
  [ 'marchand2.jpg', 'Marchand 2' ],
  [ 'marchand3.jpg', 'Marchand 3' ],
  [ 'marchombrevoleur.jpg', 'Marchombre Voleur' ],
  [ 'matthieu.jpg', 'Matthieu' ],
  [ 'mentai.jpg', 'Mentaï' ],
  [ 'mercrenaire.jpg', 'Mercenaire du Chaos' ],
  [ 'merwyn.jpg', 'Merwyn Ril\'Avalon' ],
  [ 'mmeboulanger.jpg', 'Mme Boulanger' ],
  [ 'mmecondo.jpg', 'Mme Condo' ],
  [ 'paulveran.jpg', 'Paul Veran' ],
  [ 'taverniere.jpg', 'Tavernière' ],
  [ 'yvanne.jpg', 'Yvanne Wouhoum' ]
];

let shuffled = shuffle(images);
const data = "./assets/sop/";
let sm = []
let ps = []
let S = document.getElementsByClassName('S')[0];
let P = document.getElementsByClassName('P')[0];
let img = document.getElementsByClassName('portrait')[0];
let Slist = document.getElementsByClassName('Slist')[0];
let Plist = document.getElementsByClassName('Plist')[0];
let charName = document.getElementById('name');
img.src = data + shuffled[0][0]
charName.innerHTML = shuffled[0][1]

P.addEventListener("click", () => {
    if(shuffled.length > 0){
        ps.push(shuffled[0])
        shuffled.splice(0, 1)
        img.src = data + shuffled[0][0]
        charName.innerHTML = shuffled[0][1]
        populateTable()
    }
    else {
        img.src = data + 'ewiyay.png'
        charName.textContent = "Fini !"
        populateTable()
    }
});
S.addEventListener("click", () => {
    if(shuffled.length > 1){
        sm.push(shuffled[0])
        shuffled.splice(0, 1)
        img.src = data + shuffled[0][0]
        charName.textContent = shuffled[0][1]
        populateTable()
    }
    else {
        img.src = data + 'ewiyay.png'
        charName.textContent = "Fini !"
        populateTable()
    }
});

function populateTable() {
    let Sstr = ""
    let Pstr = ""
    for(let i = 0; i < sm.length; i++) {
        Sstr += sm[i][1]
        if(i < sm.length-1) {
            Sstr += ', '
        }
    }
    for(let i = 0; i < ps.length; i++) {
        Pstr += ps[i][1]
        if(i < ps.length-1) {
            Pstr += ', '
        }
    }
    Slist.textContent = Sstr
    Plist.textContent = Pstr
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}