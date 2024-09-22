const gallery = document.querySelector(".gallery");
const search = document.querySelector(".search__field");
const title = document.querySelector(".header__title");
search.focus();
const searchButton = document.querySelector(".search__button");
gallery.addEventListener("dblclick", openbigImage);

const keyAPI = "xnPITw_67ECTxQDMG6GElKHBcJB1fDz2lE39zuw9Neo"
let searchUrl = `https://api.unsplash.com/search/photos?page=1&per_page=30&query="waterfall"
}&orientation=landscape&client_id=xnPITw_67ECTxQDMG6GElKHBcJB1fDz2lE39zuw9Neo`;
const colorThema = ["", "black_and_white"];
let colorThemaNumber = 0;
let color;

title.addEventListener("click", changeThema);

search.addEventListener("keydown", isEnter);
searchButton.addEventListener ("click", createURL);

function changeThema(){
    
    title.classList.remove(`header__title_${colorThema[colorThemaNumber]}`);
    colorThemaNumber++;
    if (colorThemaNumber >= colorThema.length) {
        colorThemaNumber = 0;
    }
    title.classList.add(`header__title_${colorThema[colorThemaNumber]}`);
  createURL();
}

function isEnter(event){

    if (event.code === "Enter" || event.keyCode === 13) {
        createURL();    
    }
}

function createURL(){
  
    color = colorThemaNumber === 0 ? "" : `&color=${colorThema[colorThemaNumber]}`;
    let searchValue = search.value || "waterfall"; 
    
     searchUrl = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${searchValue
}&orientation=landscape${color}&client_id=xnPITw_67ECTxQDMG6GElKHBcJB1fDz2lE39zuw9Neo`;
        getData(searchUrl);    
}
     
   


async function getData(url, index) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  
     createImages(data.results); 
 
  
  
}

getData(searchUrl);


function createImages(images){
    if (images.length > 0) {
        gallery.replaceChildren();
    }else{
        gallery.replaceChildren();
        createImage("assets/images/sloth.png", "nothing found"); 
    }
    
      for (let i = 0; i < images.length; i++) {
          const imageLink = images[i].urls.small;
          const altText = images[i].alt_description;
          createImage(imageLink, altText);      
      }
  }

function createImage(link, text){
   const image = document.createElement("img");
   image.classList.add("gallery__image");
   image.src =  link;
   image.alt = text;
   gallery.appendChild(image);
}

function openbigImage(event){
    const clickedElement = event.target;
    if (clickedElement.tagName.toLowerCase() === 'img') {
       let urlBigImage = clickedElement.alt === "nothing found" ? "assets/images/sloth.png" :clickedElement.src.replace("tinysrgb&fit=max&fm","srgb&fm");
       urlBigImage = urlBigImage.replace("&q=80&w=400","&q=85");
        window.open(urlBigImage,'_blank');
    }
   
}