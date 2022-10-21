

const qutes = [
    {
        quote: "(1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus aliquid harum neque",
        author: " - Limon"
    },
    {
        quote: "(2) Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus aliquid harum neque",
        author: " - KL"
    },
    {
        quote: "(3) Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus aliquid harum neque",
        author: " - Limon"
    },
    {
        quote: "(4) Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus aliquid harum neque",
        author: " - Ador"
    },
    {
        quote: "(5) Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus aliquid harum neque",
        author: " - Saroar"
    },
]


const quoteBtn = document.getElementById("new-quote");
const quotee = document.querySelector(".quote");
const author = document.querySelector(".author");

// let test = quote.length;
// console.log(quote);
quoteBtn.addEventListener("click", function(){
   let random = Math.ceil(Math.random()* 4);

   quotee.innerHTML = qutes[random].quote;
   author.innerHTML = qutes[random].author;
})