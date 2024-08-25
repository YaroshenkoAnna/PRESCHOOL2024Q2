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

/* PAGINATION */

const buttonMin = document.getElementById("button-min");
const buttonMax = document.getElementById("button-max");
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
const buttonCenter = document.getElementById("button-center");
const paginator = document.querySelector(".paginator");
let currentPage = 1;
let maxPage;
window.addEventListener("resize", defineMaxPage);
window.addEventListener("resize", generateCards);
defineMaxPage();
const array48 = generateUniqueArray();
generateCards ();

paginator.addEventListener("click", changeCards);

function changeCards(event){
    if (!event.target.className.includes("paginator__button")) {
       return
    }

    switch (event.target) {
        case buttonMin:
         currentPage = 1;    
         buttonCenter.textContent = 1;
        break;
        case buttonMax:
         currentPage = maxPage;  
         buttonCenter.textContent = maxPage;
        break;
        case buttonLeft:
         buttonCenter.textContent = -- currentPage;
        break;
        case buttonRight:
        buttonCenter.textContent = ++ currentPage;
        break;
    }

    toggleDisabledButtons();
    generateCards();
}

function toggleDisabledButtons(){
     
    buttonMin.classList.remove("button_disabled");
    buttonLeft.classList.remove("button_disabled");
    buttonRight.classList.remove("button_disabled"); 
    buttonMax.classList.remove("button_disabled");
    

     if (currentPage == maxPage) {
        buttonMax.classList.add("button_disabled");
        buttonRight.classList.add("button_disabled"); 
    } else if(currentPage == 1){
        buttonMin.classList.add("button_disabled");
        buttonLeft.classList.add("button_disabled");  
    }

}

function defineMaxPage(){
    if (window.innerWidth >= 960) {
        maxPage = 6;
    } else if (window.innerWidth<640) {
        maxPage = 16;
    } else {
        maxPage = 8;
    }
      checkAvailabilityCurrentPage()
}

function checkAvailabilityCurrentPage(){
    if (currentPage > maxPage){
         currentPage = maxPage;  
         buttonCenter.textContent = maxPage;
    }

    toggleDisabledButtons();
}

function generateUniqueArray(){
    let arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7]
    let numberElements = 0;
    let uniqueArray = [];

     function shuffleArray(arr){
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); 
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function isUnique(arr){

        if (numberElements === 1) {
         let array6Numbers = new Set (uniqueArray.slice(6).concat(arr.slice(0,4)));
         if (array6Numbers.size !== 6) {
             return;
         }
        }

        if (numberElements === 2) {
            let array6Numbers = new Set (uniqueArray.slice(12).concat(arr.slice(0,2)));
            if (array6Numbers.size !== 6) {
             return;
         } 
        }
        
        if (numberElements === 4) {
            let array6Numbers = new Set (uniqueArray.slice(30).concat(arr.slice(0,4)));
            if (array6Numbers.size !== 6) {
             return;
         } 
        }

        if (numberElements === 5) {
            let array6Numbers = new Set (uniqueArray.slice(36).concat(arr.slice(0,2)));
            if (array6Numbers.size !== 6) {
             return;
         } 
        }


         uniqueArray =  uniqueArray.concat(arr.slice());
         numberElements++;
    }

    while (numberElements < 6) {
       
         
       isUnique(shuffleArray(arrayNumbers));   
    }

    return uniqueArray;
}

function generateCards(){
    let numberCardsOnThePage = 48 / maxPage;
    let arr = array48.slice((currentPage-1) * numberCardsOnThePage, numberCardsOnThePage * currentPage)

    const gallery = document.querySelector(".gallery__wraper");
    const cards = document.createElement("div");
    cards.classList.add("gallery__wraper");

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
        div.classList.add("gallery__card", "card");

        div.append(img, headerElement, button);
        cards.append(div);
    
  });
  gallery.replaceWith(cards);
}

