document.write("Changing page content in HTML using JavaScript!" + "<br /><br />");





let paragraphDiv = document.getElementsByClassName("thirdContentDiv");
console.log(paragraphDiv);

// Using innerHTML you can change inner value of mentioned tag. In below we change full thirdContentDiv content using innerHTML
paragraphDiv[0].innerHTML = "<p>Pragraph was changed to this sentence using Javascript.</p>"

// Using textContent you can change inner text value of mentioned tag.
let myTitle = document.getElementById("page-title");
myTitle.textContent = "Yo Guys, Get Ready to learn!";