const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "In the end, we only regret the chances we didn’t take. – Lewis Carroll"
  ];
  
  // Function to get a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomIndex])
    return quotes[randomIndex];
  }
  getRandomQuote()
  // Export the function
  module.exports = getRandomQuote;
  

