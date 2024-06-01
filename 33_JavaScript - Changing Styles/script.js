document.write("Changing CSS Styles in HTML using JavaScript!" + "<br /><br />");





let title = document.getElementById("page-title");
console.log(title);

// Adding styles to title

    // - setAttribute Method way
        title.setAttribute("style", "position: relative;");
        title.setAttribute("style", "color: #FF0000;");
        // Note : When you setAttribute one by one in lines, then only add last style attribute you set to title.

        // So you have to add all styles in one setAttribute method.
        title.setAttribute("style", "position: relative; color: #FF0000; text-align: center;");

    
    // - style Property way
        let footerText = document.getElementById("footer-text");
        console.log(footerText);

        footerText.style.color = "#FFC300";
        footerText.style.textAlign = "center";
        footerText.style.backgroundColor = "#282c34";
        // Note : This property way is best way to change style. and when it use you have to type css attribute names as in camal case.