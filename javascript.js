// const { stringify } = require("querystring");

const quoteBox = document.querySelector('#text');
const currentAuthor = document.querySelector('#author');
const newQuote = document.querySelector('#new-quote');
const tweetQuote = document.querySelector('#tweet-quote');


// this is returning undefined - need to come up with  a way of maybe making all of the variables global?
let requestURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  const jsonRawData = request.response;
  // var data = JSON.parse(jsonRawData);
  var quotes = jsonRawData.quotes;
  var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  console.log(randomQuote);
  getquoteandauthor(randomQuote);
  tweetthisquote(randomQuote);
}

function getquoteandauthor (jsonobj) {
  var getQuote = jsonobj.quote;
  var getAuthor = jsonobj.author;
  quoteBox.innerHTML = getQuote;
        currentAuthor.innerHTML = getAuthor;
        console.log(quoteBox);
        console.log(currentAuthor);
  // console.log(jsonobj.quote);
  // console.log(jsonobj.author);
}

newQuote.addEventListener('click', getquoteandauthor);

function tweetthisquote (jsonobj) {
  var getQuote = jsonobj.quote;
  var getAuthor = jsonobj.author;
  console.log(`tweet this quote - ${getQuote} and the author ${getAuthor}`);
  // console.log(jsonobj.author);
}

// tweetQuote.addEventListener('click', tweetthisquote);

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var jsonRawData = this.responseText;
        var data = JSON.parse(jsonRawData);
        var quotes = data.quotes;
        //gets the data above

        var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
        console.log(randomQuote);
        //gets a random quote

        var getAuthor = randomQuote.author; //change to getAuthor
        console.log(getAuthor)
        //gets a random author

        var getQuote = randomQuote.quote; // change to getQuote
        console.log(getQuote);
        //gets a random quote

        // let currentquote = JSON.stringify(getQuote);
        // console.log(currentquote);
        // //stringifies the whole quote - don't actually need the stringify - so decide if I would like to keep this in or could be used in the blog post for future reference?

        // let currentAuthorString = JSON.stringify(getAuthor);
        // console.log(currentAuthorString);

        quoteBox.innerHTML = getQuote;
        currentAuthor.innerHTML = getAuthor;
        console.log(quoteBox);
        console.log(currentAuthor);

        tweetthisquote(randomQuote);

      }
    
    };
    xhttp.open("GET", "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", true);
    xhttp.send();

  }

  newQuote.addEventListener('click', loadNewQuote);

  function loadNewQuote () {
    loadDoc();
  }

  function tweetthisquote (jsonobj) {
    var getQuote = jsonobj.quote;
    var getAuthor = jsonobj.author;
    console.log(getQuote, getAuthor);

    // console.log(jsonobj.author);
  }
  // just work on getting access to the quote and author in the console without any link
  
  tweetQuote.addEventListener('click', tweetthisquote);


  // var thisisadummytweet = 'i am a dummy test tweet';
  // function tweetTheQuote() {
  //   window.open("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?text=' + getCurrentQuote + " " + getCurrentWhoSaid);
  // }


  // success: function(data) {
  //   $(".container").append('<div>' + data.form.avatar_url + '</div><div>' + data.form.login + '</div><div>' + data.form.name + '</div>');
  // }


//   function getval(id) {

//     let obj = data.filter(item => item.id === id);
//     return obj[0].name;
//   }
  
//   console.log(getval('864'))
// come back to this and see if I can get it to work to return 1 item in the array / object check on the array cardio from js 30 course there might be something in there that could help

//   come back and look at the stringify stuff, break down this request further
//   1. how do I format the response
//   2. how can I then pull selected hard coded bits of that data
//   3. how can I use varibles to do this 
//   4. how can I use Math.random and Math.floor to select a random amount
  



// original work
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {};
xhr.open('GET', 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
xhr.send();

// function loadNewQuote () {
//     console.log(newQuote.textContent);
// }
