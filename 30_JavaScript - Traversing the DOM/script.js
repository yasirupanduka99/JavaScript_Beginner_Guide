document.write("Traversing the DOM in JavaScript!" + "<br /><br />");

/*
    What is Traversing the DOM?
        - Traversing the DOM (Document Object Model) refers to the process of navigating through the different elements in an HTML or XML document using JavaScript. The DOM is a hierarchical tree-like structure that represents the different elements in a web page, and each element is represented as a node in the tree.

*/

let myContentDiv = document.getElementsByClassName("content");
console.log(myContentDiv);

// Navigating content div to inside element. finding tagname h2 inside the content div. This naviagating is Traversing the DOM
let myH2 = myContentDiv[0].getElementsByTagName("h2");
console.log(myH2);

let changedHeader = myH2[0].innerHTML = "Header Title Changed Using JavaScript";

let header = document.getElementById("page-title").innerHTML;
console.log(header);
