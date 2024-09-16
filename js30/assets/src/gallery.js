const gallery = document.querySelector(".gallery");
const search = document.querySelector(".search__field");
const searchButton = document.querySelector(".search__button");

const keyAPI = "xnPITw_67ECTxQDMG6GElKHBcJB1fDz2lE39zuw9Neo"
let searchUrl = `https://api.unsplash.com/search/photos?page=3&per_page=30&query="nature"
}&orientation=landscape&color=black_and_white&client_id=xnPITw_67ECTxQDMG6GElKHBcJB1fDz2lE39zuw9Neo`;
const colorThema = ["black_and_white", "black", "white", "yellow", "orange", "red", "purple", "magenta", "green", "teal", "blue"];
const languages = ["en", "ru", "uk", "de"];

search.addEventListener("keydown", isEnter);
searchButton.addEventListener ("click", createURL);

function isEnter(event){
    if (event.code === "Enter") {
        createURL();    
    }
}

function createURL(lang){
    let searchValue = search.value; 
    let i =  typeof lang === "number" ? lang : 0;
     searchUrl = `https://api.unsplash.com/search/photos?page=3&per_page=30&query=${searchValue
}&orientation=landscape&color=black_and_white&lang=${languages[i]}&client_id=xnPITw_67ECTxQDMG6GElKHBcJB1fDz2lE39zuw9Neo`;
        getData(searchUrl, i);    
}
     
   


async function getData(url, index) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  if (data.results.length === 0) {
      index++;
      index < languages.length ? createURL(index) : "";
  }
  createImages(data.results);
  
}

getData(searchUrl);

function createImages(images){
    if (images.length > 0) {
        gallery.replaceChildren();
    }else{

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