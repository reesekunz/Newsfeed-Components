/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}=
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// Creating function
function createMenu(content) {
  // Creating new elements
  let menu = document.createElement("div");
  let list = document.createElement("ul");

  // Setup structure of elements in reference to HTML parent/child
  menu.appendChild(list);

  // Iterate over array and create li element for each item in array
  content.forEach(menuItem => {
    var listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.textContent = menuItem;
  });

  menu.classList.add("menu");

  // Add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  let menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", event => {
    menu.classList.toggle("menu--open");
  });

  // Return new component
  return menu;
}

// Add component to DOM
const header = document.querySelector(".header");
header.appendChild(createMenu(menuItems));
