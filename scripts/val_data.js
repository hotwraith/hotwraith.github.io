//import Math from 

let myQuotation = document.querySelector('.top');
let myAuthor = document.querySelector('.bottom');
let newQuoteButton = document.querySelector('button')

function setQuote(allQuotes) {
    myQuote = allQuotes[getRandomInt(allQuotes.length-1)];
    localStorage.setItem('quote', myQuote);
    belleQuote = buildQuoteString(myQuote)
    myQuotation.innerHTML = belleQuote[0];
    myAuthor.innerHTML = belleQuote[1];
}

function buildQuoteString(quote) {
    let formattedQuote = quote[1]
    formattedQuote = formattedQuote.replace(/-\[+/g, '<br>-[')
    let bottom = " -"+ quote[0].replace(/,/g, ' et ') + ", " + buildDateString(quote)
    //let bottom = " -"+ quote[0].replace(/,/g, ' et ') + " " + '<u>'+buildDateString(quote)+'</u>'
    return [formattedQuote, bottom]
}

function buildPage(json) {
    json
    
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

fetch('assets/quotes.json')
    .then((response) => response.json())
    .then((json) => buildPage(json))



newQuoteButton.addEventListener("click", () => {
    fetch('assets/quotes.json')
    .then((response) => response.json())
    .then((json) => setQuote(json['allQuotes']))
});