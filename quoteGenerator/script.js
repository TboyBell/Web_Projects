// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('#quote');
let person = document.querySelector('.person');

const quotes = [
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { quote: "If you can dream it, you can do it.", author: "Walt Disney" },
  { quote: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
  { quote: "Hustle beats talent when talent doesn’t hustle.", author: "Ross Simmonds" },
  { quote: "Don’t limit your challenges—challenge your limits.", author: "Jerry Dunn" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving them.", author: "Zig Ziglar" },
  { quote: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  { quote: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { quote: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
  { quote: "Little things make big days.", author: "Unknown" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" }
];


// Hot riggin the button

function changeQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  
  quote.innerText = quotes[randomIndex].quote;
  person.innerText = quotes[randomIndex].author;
}

btn.addEventListener('click', changeQuote);