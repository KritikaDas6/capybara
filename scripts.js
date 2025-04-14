class Dog{
  constructor(name, gender, age, size, image){
    this.name= name;
    this.gender = gender;
    this.age=age;
    this.size=size;
    this.image= image;
  }

  getGender(){
    if(this.gender===true){ 
      return "Female";
    }
    return "Male";
  }
}
let fosterMode = false;
const fosterDogs = [
  new Dog("Motley", false, 4, "Small", "https://kritikadas6.github.io/capybara//assets/motley.png"),
  new Dog("Nila", true, 8, "Big", "https://kritikadas6.github.io/capybara/assets/Nila.png"),
  new Dog("Gilbert", false, 2, "Small", "assets/gilbert.png"),
  new Dog("Milo", false, 6, "Big", "https://placedog.net/400?id=4"),
  new Dog("Dixie", false, 3, "Small", "https://placedog.net/400?id=5"),
  new Dog("Sandie", true, 4, "Small", "assets/sandy.png"), 
  new Dog("Ollie", false, 2, "Big", "./assets/yoga.png"),
  new Dog("Harris", false, 2, "Small", "assets/harris.png"),
  new Dog("Jaadu", false, 1, "Small", "assets/jaadu.png"),
  new Dog("Posie", true, 2, "Small", "https://kritikadas6.github.io/capybara/assets/posie.png"),
  new Dog("Nala", true, 6, "Big", "https://kritikadas6.github.io/capybara/assets/diva.png"),
  new Dog("Wall-e", false, 3, "Medium", "/assets/sitting.png"),
  new Dog("Sunny", true, 1, "Big", "/assets/chicken.png"),
  new Dog("bailey", false, 4, "Big", "https://kritikadas6.github.io/capybara/assets/cook.png"),
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


  card.addEventListener("click", function () {
    if (!fosterMode) return;
    const confirmFoster = confirm(`Do you want to foster ${dog.name}?`);
    if (confirmFoster) {
      alert(
        `Thank you for willing to be a part of their tales!\nWe will contact you regarding logistics.\nAs you have offered to foster ${dog.name}, we will remove their availability :)`
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
  for (let i = 0; i < fosterDogs.length-1; i++) {
    for(let j=0; j< fosterDogs.length-i-1; j++){
      if(fosterDogs[j].name.toLowerCase() > fosterDogs[j+1].name.toLowerCase()){  
        swap= fosterDogs[j];
        fosterDogs[j]= fosterDogs[j+1];
        fosterDogs[j+1]=swap;
      };
    }
  } 
  showCards();
}

 //sorts from young to old
function sortAge() {  
  let swap=-1;
  for (let i = 0; i < fosterDogs.length-1; i++) {
    for(let j=0; j< fosterDogs.length-i-1; j++){
      if(fosterDogs[j].age > fosterDogs[j+1].age){  
        swap= fosterDogs[j];
        fosterDogs[j]= fosterDogs[j+1];
        fosterDogs[j+1]=swap;
      };
    }
  } 
  showCards();
}

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

function sortSmall(){
  const allCards = document.getElementById("card-container");
  allCards.innerHTML = ""; 

  for (let i = 0; i < fosterDogs.length; i++) {
    const dog = fosterDogs[i];
    if (dog.size=== "Small") {  
      const smallCard = templateCard.cloneNode(true);
      editCardContent(smallCard, dog);
      allCards.appendChild(smallCard);
    }
  }
}

function searchByName() {
  let foundMatch = false;
  const input = document.getElementById("searchInput").value.toLowerCase();
  const allCards = document.getElementById("card-container");
  const noMatch = document.getElementById("noName"); 
  allCards.innerHTML = "";

  for (let i = 0; i < fosterDogs.length; i++) {
    const dog = fosterDogs[i];
    if (dog.name.toLowerCase()===(input)) {
      const matchCard = templateCard.cloneNode(true);
      editCardContent(matchCard, dog);
      allCards.appendChild(matchCard);
      foundMatch= true;
    }
  }
  if (!foundMatch) {
    noMatch.style.display = "block"; 
  }
}

function hideNoMatchMessage() {
  const noMatch = document.getElementById("noName");
  if (noMatch){
    noMatch.style.display = "none";
  } 
}




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

document.getElementById("searchToggleButton").addEventListener("click", () => {
  const searchDiv = document.getElementById("searchContainer");
  if (searchDiv.style.display === "none") {
    searchDiv.style.display = "block";
  } else {
    searchDiv.style.display = "none";
  }
  hideNoMatchMessage();
});

document.getElementById("searchButton").addEventListener("click", (e) => {
  e.preventDefault();
  hideNoMatchMessage();
  searchByName();
});

document.getElementById("selectFoster").addEventListener("click", (e) => {
  e.preventDefault();
  hideNoMatchMessage();
  fosterMode = true;
  alert("Click on the dog you'd like to foster.");
});

document.addEventListener("DOMContentLoaded", showCards);