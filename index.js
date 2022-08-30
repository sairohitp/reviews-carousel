const reviews = [    
    {
        id: 1,
        name: "Tim Cook",
        job: "CEO, Apple Inc.",
        img: "https://i.imgur.com/LBM3Nbl.jpg",
        text: "dood like fr this developer is the reason why apple is apple today. The undercover developer who did the whatever was done so you could totally use the stuff that you’re using – all possible by our contract with this company TS fr.",
    },
    {
        id: 2,
        name: "Sundar Pichai",
        job: "CEO, Google Inc",
        img: "https://i.imgur.com/8GmkgcI.jpg",
        text: "man he used to live 14kms away from me. i was in ashok nagar back in India while he was in nanganallur. we could’ve met by train but now. we met at the board room. and one of the most important and life rejuvenating decision was made then and there, by signing up with TS corp. We may have the ammo, but they got the big guns. he’s my home forever xo.",
    },
    {
        id: 3,
        name: "Bill Gates",
        job: "former CEO, Microsoft",
        img: "https://i.imgur.com/hsa3KG4.jpg",
        text: "bruh im like lets get a deal with the real bois.  these are the deal breakers, the service providers, the thinkers and solvers. the designers and creators. to flourish in life as a business, one must have TS in their backpocket. else you setout to be doomed bruh :x",
    },
    {
        id: 4,
        name: "Parag Agarwal",
        job: "CEO, Twitter",
        img: "https://i.imgur.com/EbosWvE.jpg",
        text: "despite my IIT degree, i wished i studied along with the godfather in his collage as one of his classmate. he is the real OG developer. although just starting out, his single simple statements solve crisises the world's is currently facing",
    },
    {
        id: 5,
        name: "Shantanu Narayen",
        job: "CEO, Adobe Systems",
        img: "https://i.imgur.com/HiQujun.png",
        text: "TS has proved to be the best time after time, problem statement one after the other. despite the really heavy applications we design here at adobe, TS Algorithms have O(1) complexity, which really changed how our assets are retrieved. totally impressed and worth it.",
    }
]

const img = document.getElementById("person-img");
const author = document.getElementById("author")
const job = document.getElementById("job")
const review = document.getElementById("info")

const prevbtn = document.querySelector("#prev-btn")
const nextbtn = document.querySelector("#next-btn")
const randbtn = document.querySelector("#rand-btn")

let current = 0;

window.addEventListener("DOMContentLoaded", function() {
    personCarousel(current)
})

function personCarousel(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name
    job.textContent = item.job
    review.textContent = item.text
}

nextbtn.addEventListener("click", function() {
    current++;
    if (current > reviews.length - 1) {
        current = 0;
    }
    personCarousel(current);
})

prevbtn.addEventListener("click", function() {
    current--;
    if (current < 0) {
        current = (reviews.length - 1)
    }
    personCarousel(current);
})

function randomNom() {
    return Math.floor(Math.random() * reviews.length);
}

randbtn.addEventListener("click", function() {
    personCarousel(randomNom());
})