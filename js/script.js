// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
window.setInterval(printQuote, 1000 * 30)
// create an array to hold the data for the quotes
// each object in the quotes array should have the following:
    // quote prop
    // source prop - containing the author
    // * citation prop - where the quote came from
    // * year prop - when it was said
var quotes = [
    {
        "quote": "Don't cry because it's over, smile because it happened.",
        "source": "Dr. Suess",
        "citation": "Cat and The Hat",
        "year": "1967",
        "tags": ['children', 'author']
    },
    {
        "quote": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "source": "Marilyn Monroe",
        "citation": "Just Marilyn",
        "year": "1959",
        "tags": ['model', 'JFK', 'actress']
    },
    {
        "quote": "Be yourself; everyone else is already taken.",
        "source": "Oscar Wilde",
        "citation": "Amazing Observations",
        "year": "1873",
        "tags": []
    },
    {
        "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "source": "Albert Einstein",
        "citation": "Theory of Humanity",
        "year": "",
        "tags": ['scientist', 'genius', 'relativity']
    },
    {
        "quote": "You only live once, but if you do it right, once is enough.",
        "source": "Mae West",
        "citation": "",
        "year": "1972",
        "tags": []
    }
];

// create function getRandomQuote() {}
function getRandomQuote() {
    //select random quote from quotes array
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var getQuote = quotes[randomNumber];
    //return randomly selected quote
    return getQuote;
}

// create printQuote function
function printQuote() {
    // calls getRandomQuote
    getQuote = getRandomQuote();
    
    // construct string containing the different props
    var quoteParagraph = document.querySelector('.quote');
    quoteParagraph.innerHTML = getQuote.quote;

    var sourceParagraph = document.querySelector('.source');
    sourceParagraph.innerHTML = getQuote.source;

    if (getQuote.citation) {
        sourceParagraph.innerHTML += `<span class="citation"> ${getQuote.citation}</span>`;
    }
    
    if (getQuote.year) {
        sourceParagraph.innerHTML += `<span class="year"> ${getQuote.year}</span>`;
    }

    
    var tagParagraph = document.querySelector('.tags');
    tagParagraph.style.display = 'none';
    
    if (getQuote.tags.length > 0) {
        var getTags = getQuote["tags"];
        tagParagraph.style.display = 'block';
        
        tagParagraph.innerHTML = `<span class="tag">tags:  ${getTags.join(', ')} </span>`; 
           
    } 

    
    

    var yearSpan = document.getElementsByClassName('year');
    yearSpan.innerHTML = getQuote.year;

    // change page color
    var color = '#' + Math.random().toString(16).substr(-6);
    document.body.style.backgroundColor = color;
}