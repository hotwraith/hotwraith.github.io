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
    let bottom = " -"+ quote[0] + " " + buildDateString(quote)
    return [formattedQuote, bottom]
}

function buildDateString(quote) {
    let date = ""
    if(quote[4] != 0) { date += quote[4]+"/"}
    if(quote[3] != 0) { date += quote[3]+"/"}
    if(quote[2] != 0) { date += quote[2]}
    return date
    
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

fetch('assets/quotes.json')
    .then((response) => response.json())
    .then((json) => setQuote(json['allQuotes']))



newQuoteButton.addEventListener("click", () => {
    fetch('assets/quotes.json')
    .then((response) => response.json())
    .then((json) => setQuote(json['allQuotes']))
});