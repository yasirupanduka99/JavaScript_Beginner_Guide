document.write("Changing Element Attribute in HTML using JavaScript!" + "<br /><br />");





let link = document.getElementById("test");
console.log(link);

// Getting attribute of anchor tag
    // - Method way
        let href = link.getAttribute("href");
        console.log("Getting href using method : " + href);

        let className = link.getAttribute("class");
        console.log(className);

    // - property way
        let classNameProperty = link.className;
        console.log(classNameProperty);

        let hrefProperty = link.href;
        console.log("Getting href using property : " + hrefProperty);

        // Note : Property way and method way are two diffrent behaviour. look at web console and find getting href part with two diffrent way. how it response.
        
        

// Set attribute value
    // - Method way
        link.setAttribute("class", "coffeeAnchor");
        link.setAttribute("alt", "hello");

    // - Property way
        link.className = "coffee";