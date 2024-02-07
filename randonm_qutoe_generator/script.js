var apiUrl =
    "https://api.quotable.io/quotes/random?minLength=100&maxLength=240";
let newQuote = document.getElementById("new-quote");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let tweet = document.querySelector(".twitter-share-button");
newQuote.addEventListener("click", function (e) {
    getQuotes(apiUrl);
});

async function getQuotes(apiUrl) {
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const data = await response.json();
    quote.innerHTML = data[0].content;
    author.innerHTML = "~   " + data[0].author;
    tweet.href = `https://twitter.com/intent/tweet?text=${quote.innerHTML}`;

    // console.log(date.);
}

getQuotes(apiUrl);
