const quoteBox = document.querySelector('#text');
const currentAuthor = document.querySelector('#author');
const newQuote = document.querySelector('#new-quote');
const tweettheQuote = document.querySelector('#tweet-quote');

function loadDoc() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const jsonRawData = this.responseText;
      const data = JSON.parse(jsonRawData);
      const quotes = data.quotes;
      //gets the data above

      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      console.log(randomQuote);
      //gets a random quote

      let getAuthor = randomQuote.author; 
      console.log(getAuthor)
      //gets a random author

      let getQuote = randomQuote.quote; 
      console.log(getQuote);
      //gets a random quote

      quoteBox.innerHTML = getQuote;
      currentAuthor.innerHTML = getAuthor;
      console.log(quoteBox);
      console.log(currentAuthor);
    }

  };
  xhttp.open("GET", "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", true);
  xhttp.send();

}

function loadNewQuote() {
  loadDoc();
}

newQuote.addEventListener('click', loadNewQuote);


function tweetCurrentQuote() {
  let tweetQuote = quoteBox.innerHTML + " - " + currentAuthor.innerHTML;
  let url = "https://twitter.com/intent/tweet?text=" + tweetQuote;
  window.open(url);
  console.log(tweetQuote);
};

tweettheQuote.addEventListener('click', tweetCurrentQuote);

