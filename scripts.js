class Dog{
  constructor(name, gender, age, size, image, favorited){
    this.name= name;
    this.gender = gender;
    this.age = age;
    this.size = size;
    this.image= image;
    this.favorited = false;
  }

  getGender(){
    if(this.gender === true){ 
      return "Female";
    }
    return "Male";
  }
}

let fosterMode = false;

const fosterDogs = [
  new Dog("Motley", false, 4, "Small", "Assets/motley.png"),
  new Dog("Nila", true, 8, "Big", "Assets/Nila.png"),
  new Dog("Gilbert", false, 2, "Small", "Assets/gilbert.png"),
  new Dog("Milo", false, 6, "Big", "https://placedog.net/400?id=4"),
  new Dog("Dixie", false, 3, "Small", "https://placedog.net/400?id=5"),
  new Dog("Sandie", true, 4, "Small", "Assets/sandy.png"), 
  new Dog("Ollie", false, 2, "Big", "./Assets/yoga.png"),
  new Dog("Harris", false, 2, "Small", "Assets/harris.png"),
  new Dog("Jaadu", false, 1, "Small", "Assets/jaadu.png"),
  new Dog("Posie", true, 2, "Small", "Assets/posie.png"),
  new Dog("Nala", true, 6, "Big", "Assets/diva.png"),
  new Dog("Wall-e", false, 3, "Medium", "Assets/sitting.png"),
  new Dog("Sunny", true, 1, "Big", "Assets/chicken.png"),
  new Dog("bailey", false, 4, "Big", "Assets/cook.png"),
  new Dog("Pintu", false, 3, "Medium", "https://placedog.net/400?id=15")
];

const templateCard = document.querySelector(".template-card"); 
if (!templateCard) {
  console.error("TEMPLATE CARD NOT FOUND");
}

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; 

  for (let i = 0; i < fosterDogs.length; i++) {
    const dog = fosterDogs[i];
    const nextCard = templateCard.cloneNode(true); 
    editCardContent(nextCard, dog);   
    cardContainer.appendChild(nextCard); 
  }
}

function editCardContent(card, dog) {
  card.style.display = "block";

  card.querySelector("h2").textContent = dog.name;
  card.querySelector("img").src = dog.image;
  card.querySelector("img").alt = `${dog.name}'s photo`;

  card.querySelector("ul").innerHTML = `
    <li><strong>Gender:</strong> ${dog.getGender()}</li>
    <li><strong>Age:</strong> ${dog.age}</li>
    <li><strong>Size:</strong> ${dog.size}</li>
  `;
  console.log("new card:", dog.name, "- html: ", card);

  const favButton = document.createElement("button");
  favButton.classList.add("fav-btn");

  favButton.innerHTML = '<i class="fas fa-paw"></i>';
  favButton.style.color = dog.favorited ? "#223745": "#a0aab0";
 
  favButton.addEventListener("click", function () {
    dog.favorited = !dog.favorited;
    favButton.innerHTML = '<i class="fas fa-paw"></i>';
    favButton.style.color = dog.favorited ? "#223745": "#a0aab0";
  }); 
 
  card.querySelector(".card-content").appendChild(favButton);

  card.querySelector(".card-content").prepend(favButton);

  card.addEventListener("click", function () {
    if (!fosterMode) return;
    const confirmFoster = confirm(`Do you want to foster ${dog.name}?`);
    if (confirmFoster) {
      alert(
        `Thank you for willing to be a part of their tales!\nWe will contact you regarding logistics.\n\nAs you have offered to foster ${dog.name}, we will remove their availability :)`
      );
      const index = fosterDogs.indexOf(dog);
      if (index !== -1) {
        fosterDogs.splice(index, 1);
      }
      fosterMode = false; 
      showCards();
    }
  });
}

// sorts from A to Z
function sortNames() {   
  let swap="";
  for (let i = 0; i < fosterDogs.length - 1; i++) {
    for(let j = 0; j < fosterDogs.length - i - 1; j++){
      if(fosterDogs[j].name.toLowerCase() > fosterDogs[j + 1].name.toLowerCase()){  
        swap= fosterDogs[j];
        fosterDogs[j]= fosterDogs[j + 1];
        fosterDogs[j + 1] = swap;
      };
    }
  } 
  showCards();
}

//sorts from young to old
function sortAge() {  
  let swap = -1;
  for (let i = 0; i < fosterDogs.length - 1; i++) {
    for(let j = 0; j < fosterDogs.length - i - 1; j++){
      if(fosterDogs[j].age > fosterDogs[j + 1].age){  
        swap = fosterDogs[j];
        fosterDogs[j] = fosterDogs[j + 1];
        fosterDogs[j + 1] = swap;
      };
    }
  } 
  showCards();
}

//finds and displays only female dogs
function sortFemale(){
  const allCards = document.getElementById("card-container");
  allCards.innerHTML = ""; 

  for (let i = 0; i < fosterDogs.length; i++) {
    const dog = fosterDogs[i];
    if (dog.gender === true) {  
      const femaleCard = templateCard.cloneNode(true);
      editCardContent(femaleCard, dog);
      allCards.appendChild(femaleCard);
    }
  }
}

//finds and displays only small dogs
function sortSmall(){
  const allCards = document.getElementById("card-container");
  allCards.innerHTML = ""; 

  for (let i = 0; i < fosterDogs.length; i++) {
    const dog = fosterDogs[i];
    if (dog.size === "Small") {  
      const smallCard = templateCard.cloneNode(true);
      editCardContent(smallCard, dog);
      allCards.appendChild(smallCard);
    }
  }
}

//searches for dog names
function searchByName() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const allCards = document.getElementById("card-container");
  const noMatch = document.getElementById("noName"); 
  allCards.innerHTML = "";
  let foundMatch = false;

  for (let i = 0; i < fosterDogs.length; i++) {
    const dogName = fosterDogs[i].name.toLowerCase();
    let match = true;
    for (let j = 0; j < input.length; j++) {
      if (dogName[j] !== input[j]) {
        match = false;
        break;
      }
    }
    if (match == true) {
      const matchCard = templateCard.cloneNode(true);
      editCardContent(matchCard, fosterDogs[i]);
      allCards.appendChild(matchCard);
      foundMatch = true;
    }
  }

  if (!foundMatch) {
    noMatch.style.display = "block"; 
  } else {
    noMatch.style.display = "none";
  }
}

//if searchbyName() can't find, display error message
function hideNoMatchMessage() {
  const noMatch = document.getElementById("noName");
  if (noMatch){
    noMatch.style.display = "none";
  } 
}

//finds and displays only Pawed (liked) dogs
function favorites(){
  const allCards = document.getElementById("card-container");
  allCards.innerHTML = ""; 

  for (let i = 0; i < fosterDogs.length; i++) {
    const dog = fosterDogs[i];
    if (dog.favorited === true) {  
      const likedCard = templateCard.cloneNode(true);
      editCardContent(likedCard, dog);
      allCards.appendChild(likedCard);
    }
  }
}

document.getElementById("searchButton").addEventListener("click", (e) => {
  e.preventDefault();
  hideNoMatchMessage();
  searchByName();
});

document.getElementById("sortNameButton").addEventListener("click", (e) => {
  e.preventDefault();
  hideNoMatchMessage();
  sortNames();
});

document.getElementById("sortAgeButton").addEventListener("click", (e) => {
  e.preventDefault();
  hideNoMatchMessage();
  sortAge();
});

document.getElementById("sortFemaleButton").addEventListener("click", (e) => {
  e.preventDefault();
  hideNoMatchMessage();
  sortFemale();
});

document.getElementById("sortSmallDogsButton").addEventListener("click", (e) => {
  e.preventDefault();
  hideNoMatchMessage();
  sortSmall();
});

document.getElementById("pawed").addEventListener("click", (e) => {
  e.preventDefault();
  hideNoMatchMessage();
  favorites(); 
});

document.getElementById("selectFoster").addEventListener("click", (e) => {
  e.preventDefault();
  hideNoMatchMessage();
  fosterMode = true;
  alert("Click on the dog you'd like to foster.");
});

document.addEventListener("DOMContentLoaded", showCards);