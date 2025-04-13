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
console.log("✅ JavaScript is running!");
const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg"; 
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
  "Mresh Prince of Bel Air",
  "Lurb Your Enthusiasm",
  "Kast Los High",
  "ringstop",
  "rapyfly",
  "Cope",
  "Aristro",
];

const templateCard = document.querySelector(".template-card"); 
if (!templateCard) {
  console.error("TEMPLATE CARD NOT FOUND");
}


function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing cards

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    let imageURL = "";
    if (i === 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i === 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i === 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL);    // Update title and image
    cardContainer.appendChild(nextCard);           // Add to the DOM
  }
}

function sortNames() {   //sorts from A to Z
  let letter_indx=0;  
  let swap="";
  for (let i = 0; i < titles.length-1; i++) {
    for(let j=0; j< titles.length-i-1; j++){
      if( (titles[j][letter_indx]).toLowerCase() > (titles[j+1][letter_indx]).toLowerCase() ){  //
        swap= titles[j];
        titles[j]= titles[j+1];
        titles[j+1]=swap;
      };
    }
  } 
  for(let m=0; m<titles.length;m++){
    const firstLetter = titles[m][0];
    console.log(`Index ${m}: First letter = ${firstLetter}`)
  } 

}



function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  console.log("new card:", newTitle, "- html: ", card);
}

document.addEventListener("DOMContentLoaded", showCards);
sortNames()

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
