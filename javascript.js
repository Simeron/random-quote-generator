// const { stringify } = require("querystring");

const quoteBox = document.querySelector('#text');
const currentAuthor = document.querySelector('#author');
const newQuote = document.querySelector('#new-quote');
const tweettheQuote = document.querySelector('#tweet-quote');

// let requestURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function () {
//   const jsonRawData = request.response;
//   // var data = JSON.parse(jsonRawData);
//   var quotes = jsonRawData.quotes;
//   var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//   console.log(randomQuote);
// };

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jsonRawData = this.responseText;
      var data = JSON.parse(jsonRawData);
      var quotes = data.quotes;
      //gets the data above

      var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      console.log(randomQuote);
      //gets a random quote

      var getAuthor = randomQuote.author; //change to getAuthor
      console.log(getAuthor)
      //gets a random author

      var getQuote = randomQuote.quote; // change to getQuote
      console.log(getQuote);
      //gets a random quote

      quoteBox.innerHTML = getQuote;
      currentAuthor.innerHTML = getAuthor;
      console.log(quoteBox);
      console.log(currentAuthor);

      var tweetQuote = randomQuote.quote + " - " + randomQuote.author;
      tweetthisquote(tweetQuote);
    }

  };
  xhttp.open("GET", "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", true);
  xhttp.send();

}

function loadNewQuote() {
  loadDoc();
}

newQuote.addEventListener('click', loadNewQuote);

function tweetthisquote(tweetQuote) {
  var url = "https://twitter.com/intent/tweet?text=" + tweetQuote;
  window.open(url);
  console.log('what am i');
  console.log(tweetQuote);
};

tweettheQuote.addEventListener('click', tweetthisquote);

// function tweetthisquote(newRandomQuote) {
//   var getQuote = newRandomQuote.quote;
//   var getAuthor = newRandomQuote.author;
//   console.log(getQuote, getAuthor);
// }

// tweetQuote.addEventListener('click', tweetthisquote);
