document.write("The window.onload event in JavaScript!" + "<br /><br />");

/*
    The onload event occurs when an object(HTML page) has been loaded.
*/


// In HTML I create script tag inside the <head> tag. that means this javascript file functions are not working.
// beacuse before the html body render script file is rendered.but script file cant find any HTML content.
// so we can use window.onload to triggered the functions in this time.

function allImplementaions() {

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

}

window.onload = function() {

    // Calling function that have to triggered after render the HTML content
    allImplementaions();

}