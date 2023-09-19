let addToy = false;
const div = document.querySelector("#toy-collection");
let newId = 1

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
// make a GET request to fetch the toy objects. 
// make a div class="card" for each toy and add it the the toy collection dive

const toyUrl = "http://localhost:3000/toys";

function appendToy (toy) {
  const card = document.createElement("div")
  const toyName = document.createElement("h2");
  const toyImage = document.createElement("img");
  const paragraph = document.createElement("p");
  const button = document.createElement("button");
  

  toyImage.className = "toy-avatar"
  button.className = "like-btn"
  button.textContent = "Like"
  card.className = "card"
  toyName.textContent = toy.name
  paragraph.textContent = toy.likes
  toyImage.src = toy.image;
  paragraph.id = toy.id;
  newId++;

  
  button.addEventListener("click", () => {
    let counter = document.getElementById(paragraph.id)
    counter.textContent = parseInt(counter.textContent) + 1;
  })
  

  card.append(toyName, toyImage, paragraph, button)
  return div.append(card)
} 

fetch(toyUrl)
  // .then(response => console.log(response.json()))
  .then(response => response.json())
  .then(toys => {
    
    

    toys.forEach(toy => {

      appendToy(toy);

    })


  })

    document.querySelector("#form").addEventListener("submit", event => {
      event.preventDefault()
      let name = event.target.name.value
      let image = event.target.image.value
      let likes = 0
      let id = newId
      let newToy = {
        id: id,
        name: name,
        image: image,
        likes: likes
      }
      appendToy(newToy)
      

    });






