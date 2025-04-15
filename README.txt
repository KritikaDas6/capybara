Brief Description of the Data

For my website, I looked to create a bridge between homes looking to foster and dogs ready to be fostered. I created mock data that outlined 5 characteristics of each dog. 7 of the dogs featured on the website are my past foster dogs!


Data Operations Implemented

Alphabetical Sorting: implemented a bubble sort algorithm that rearranges the dog's names within the fosterDogs array. I used toLowerCase() to ensure case-insensitive comparison. This demonstrates my understanding of array traversal, swapping, and string methods.

Foster Selection: implemented a click event that allows the user to "foster" a dog, which removes it from the array using splice() and dynamically updates the display. This shows I can manage dynamic data structures.

Age Sorting: I used another bubble sort to reorder the array by age from youngest to oldest. This shows I can compare numeric values inside objects and modify an array of class instances.

Filtering by Gender and Size: used filtering logic to display only female or small-sized dogs by checking each dog object’s gender and size properties. I used conditionals to create new views from the same dataset, demonstrating my control over object filtering and DOM updates.

Letter-by-Letter Search: I implemented a search function that compares each character of the user’s input with each dog’s name using a character-by-character loop instead of built-in methods. This shows I understand string manipulation and how to control for exact prefix matches using loops and conditionals.

Favorites "pawed" Functionality (Boolean Toggle): I added a boolean icon property to each Dog object, the paw toggle button updates whether they like the dog or not. It has a visual update the paw icon and then filter which dogs the user "pawed".

Additional Data Structure Implementation

Data organization (Dog class): I created a dog class to organize my data. Each foster dog is an instance of this class and home name, age, size, picture and favorited properties. It shows that I understand object-oriented programming. It allowed me to structure complex data in a uniform way. By adding getGender, demonstrated how to reuse and scale logic efficiently across multiple objects.



Tools and Resources Used
Font-Awesome Library to obtain Icon Symbols; Pinterest, Placedog.net, Dall-E to find additional dog images and generate logo; Chat GPT, Stack Overflow, CSS Flexbox Guide, and W3Schools for html+css. W3schools, Paper+pencil, Stack Overflow, Altcademy for JS; Mdn web-docs for improving JS readability.

Reflection

The one aspect that took me the longest was implementing the search functionality to match dog names letter by letter. I found it difficult at first due to syntax and logic errors, which made the debugging process time consuming. To solve this, I researched how arrays work in JavaScript and mapped out my logic on paper before translating it into code. After several trials and adjustments, I was able to get it working correctly. The biggest thing I learned was how to work effectively with arrays in JavaScript, which made the rest of the project functionalities much easier to build. If I had more time, I would address the styling inconsistencies I noticed between browsers—specifically, my search button which looks mis-aligned on Safari compared to Chrome.

