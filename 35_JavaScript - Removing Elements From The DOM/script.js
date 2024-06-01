document.write("Removing Elements from the DOM using JavaScript!" + "<br /><br />");



// Going to add new item for list in HTML. that means i have to create new <li></li> element using javascript
let parent = document.getElementById("list-container").getElementsByTagName("ul")[0];
console.log(parent);

var child = document.getElementsByTagName("li")[0];
console.log(child);

// Lets remove this child from the list
let removed = parent.removeChild(child);
console.log("Removed Child in List : ", removed);

// If you want to add it again - Uncommnt below two lines
// parent.appendChild(removed); // This will add item last position in list
// parent.insertBefore(removed, parent.getElementsByTagName("li")[0]); // this will add item first position in list