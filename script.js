const quotes = [
    "The future depends on what you do today.",
    "Discipline is the bridge between goals and accomplishment.",
    "Small progress is still progress.",
    "Push yourself, because no one else is going to do it for you."
];
function changeQuote() {
    const quoteElem = document.getElementById('quote');
    quoteElem.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}
