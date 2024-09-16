const url = "https://api.unsplash.com/photos/?client_id=xnPITw_67ECTxQDMG6GElKHBcJB1fDz2lE39zuw9Neo";
const gallery = document.querySelector(".gallery");
const keyAPI = "xnPITw_67ECTxQDMG6GElKHBcJB1fDz2lE39zuw9Neo"
const searchUrl = "https://api.unsplash.com/search/photos?page=3&per_page=30&query=office&orientation=landscape&client_id=xnPITw_67ECTxQDMG6GElKHBcJB1fDz2lE39zuw9Neo" 

async function getData() {
  const res = await fetch(searchUrl);
  const data = await res.json();
  console.log(data);
  createImages(data.results);
  
}

getData();

function createImages(images){
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