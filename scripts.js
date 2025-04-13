/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


class Dog{
  constructor(name, gender, age, size, image){
    this.name= name;
    this.gender = gender;
    this.age=age;
    this.size=size;
    this.image= image;
  }

  getGender(){
    if(this.gender===true){  //js
      return "Female";
    }
    return "Male";
  }
}


const fosterDogs = [
  new Dog("Motley", true, 2, "Small", "https://placedog.net/400?id=1"),
  new Dog("Nila", true, 5, "Big", "https://placedog.net/400?id=2"),
  new Dog("Gilbert", true, 1, "Small", "https://placedog.net/400?id=3"),
  new Dog("Milo", false, 6, "Big", "https://placedog.net/400?id=4"),
  new Dog("Daisy", false, 3, "Medium", "https://placedog.net/400?id=5"),
  new Dog("Sandie", true, 4, "Small", "https://placedog.net/400?id=6"),
  new Dog("Ollie", false, 2, "Big", "https://placedog.net/400?id=7"),
  new Dog("Harris", true, 1, "Small", "https://placedog.net/400?id=8"),
  new Dog("Jaadu", false, 5, "Medium", "https://placedog.net/400?id=9"),
  new Dog("Posie", false, 2, "Small", "https://placedog.net/400?id=10"),
  new Dog("Nala", true, 6, "Big", "https://placedog.net/400?id=11"),
  new Dog("Wall-e", false, 3, "Medium", "https://placedog.net/400?id=12"),
  new Dog("Capy-pug", true, 1, "Small", "https://placedog.net/400?id=13"),
  new Dog("Bailey", false, 4, "Big", "https://placedog.net/400?id=14"),
  new Dog("Pintu", false, 3, "Medium", "https://placedog.net/400?id=15")
];

const templateCard = document.querySelector(".template-card"); 
if (!templateCard) {
  console.error("TEMPLATE CARD NOT FOUND");
}


function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing cards

  for (let i = 0; i < fosterDogs.length; i++) {
    // let title = titles[i];

    // let imageURL = "";
    // if (i === 0) {
    //   imageURL = FRESH_PRINCE_URL;
    // } else if (i === 1) {
    //   imageURL = CURB_POSTER_URL;
    // } else if (i === 2) {
    //   imageURL = EAST_LOS_HIGH_POSTER_URL;
    // }

    const dog = fosterDogs[i];
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, dog);    // Update title and image
    cardContainer.appendChild(nextCard);           // Add to the DOM
  }
}

function sortNames() {   //sorts from A to Z
  // let letter_indx= fosterDogs[m].name[0]; 
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

  for (let m = 0; m < fosterDogs.length; m++) {
    const firstLetter = fosterDogs[m].name[0];
    console.log(`Index ${m}: First letter = ${firstLetter}`);
  }
  showCards();
}

document.getElementById("sortButton").addEventListener("click", function (e) {
  e.preventDefault();
  sortNames();
});

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
}

document.addEventListener("DOMContentLoaded", showCards);




// function quoteAlert() {
//   console.log("Button Clicked!");
//   alert(
//     "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
//   );
// }

// function removeLastCard() {
//   titles.pop();
//   showCards();



// }
