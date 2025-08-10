const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" }
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const tweetBtn = document.getElementById("tweetBtn");

let currentIndex = -1;

function showRandomQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === currentIndex);
  currentIndex = randomIndex;

  const quote = quotes[randomIndex];
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `— ${quote.author}`;
}

function shareOnTwitter() {
  const text = `${quoteText.textContent} ${quoteAuthor.textContent}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

newQuoteBtn.addEventListener("click", showRandomQuote);
tweetBtn.addEventListener("click", shareOnTwitter);

window.onload = showRandomQuote;

// Register Service Worker for PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
