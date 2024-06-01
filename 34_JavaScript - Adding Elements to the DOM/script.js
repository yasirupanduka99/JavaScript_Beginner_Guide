document.write("Adding Elements to the DOM using JavaScript!" + "<br /><br />");



// Going to add new item for list in HTML. that means i have to create new <li></li> element using javascript
let newLi = document.createElement("li");
console.log(newLi);

let newAnchor = document.createElement("a");
console.log(newAnchor);

let list = document.getElementById("list-container").getElementsByTagName("ul")[0];
console.log(list);

list.appendChild(newLi); // This is how add new Element to DOM (HTML). Using appendChild() method
newLi.appendChild(newAnchor);

// Adding innerHTML for anchor tag
newAnchor.innerHTML = "Butter";


// How to add list item that have to placed as first list item. we can use insertBefore() methd for it
list.insertBefore(newLi, list.getElementsByTagName("li")[0])