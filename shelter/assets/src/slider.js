/* SLIDER */

const pets = [
  {
    "name": "Jennifer",
    "img": "./assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "./assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "./assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "./assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "./assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "./assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "./assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "./assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

let animating = false;
const arrowLeft = document.querySelector('.carousel__arrow_left').parentNode;
const arrowRight = document.querySelector('.carousel__arrow_right').parentNode;
const cards = document.querySelectorAll('.card');
const carousel = document.querySelector('.carousel__wraper');
let previousArray=[];
let currentArray=[];
let previousArrow =null;
let arrNumbersCards = generateUniqueNumbers();
currentArray = [...arrNumbersCards];
generateCards(arrNumbersCards, previousArrow);

carousel.addEventListener("animationend", handleAnimationEnd);
arrowLeft.addEventListener("click", changeCards);
arrowRight.addEventListener("click", changeCards);


function changeCards(event) {
    if (animating) return;
    animating = true;
  document.querySelector(".cards").classList.add("current");
  arrNumbersCards = (previousArrow !== event.currentTarget && previousArrow ) ? previousArray : generateUniqueNumbers();
  
  previousArrow = event.currentTarget;
  previousArray = [...currentArray];
  currentArray = [...arrNumbersCards];
  generateCards(arrNumbersCards, previousArrow );
  
   startAnimation(event.currentTarget === arrowLeft ? "transition-left" : "transition-right"); 
  
}

function handleAnimationEnd() {
   
   stopAnimation();
}

 function startAnimation(direction) {
 
  carousel.classList.add(direction);
}

function stopAnimation() {
  document.querySelector(".current").remove();
  document.querySelector(".cards").classList.remove("hide-left", "hide-right");
  carousel.classList.remove("transition-left", "transition-right");
  animating = false;
} 

function generateUniqueNumbers() {
  const numCards = 3;
  const uniqueNumbers = new Set(currentArray);
  
  while (uniqueNumbers.size < numCards+currentArray.length) {
     
    let random = getRandomInt(0, pets.length)
    uniqueNumbers.add(random);
  }
    for( let index = 0; index<currentArray.length; index++){
    uniqueNumbers.delete(currentArray[index])
}
    return Array.from(uniqueNumbers);
 
}   

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateCards(arr, arrow) {

    const cards = document.createElement("div");
    cards.classList.add("cards");

    arr.forEach(index => {
        const img = document.createElement("img");
        img.classList.add("card__image");
        img.alt = pets[index].name;
        img.src = pets[index].img;

        const headerElement = document.createElement("h4");
        headerElement.textContent =pets[index].name; 
        headerElement.classList.add("card__title");

        const button = document.createElement("button");
        button.textContent = "Learn more";
        button.classList.add("card__button", "button",  "button_secondary");

        const div = document.createElement("div");
        div.classList.add("section__card", "card");

        div.append(img, headerElement, button);
        cards.append(div);
    
  });
  if (arrow == arrowRight) {
      cards.classList.add("hide-left")
      carousel.prepend(cards);
  } else {
      if(arrow) {cards.classList.add("hide-right");}

      carousel.append(cards);
  }
  
}