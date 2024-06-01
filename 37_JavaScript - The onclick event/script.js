document.write("The onclick event in JavaScript!" + "<br /><br />");


let content = document.getElementById("content");
let button = document.getElementById("show-more");

button.onclick = function() {

    if(content.className == "open") {

        content.className = "";
        button.innerHTML = "Show more";
        button.style.backgroundColor = "#1594e5";

    } else {

        content.className = "open";
        button.innerHTML= "Show less";
        button.style.backgroundColor = "#FFC300";

    }

};