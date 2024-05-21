let links = document.getElementsByTagName("a");

for(let i = 0; i < links.length; i++){

    // Adding unique class to every anchor tags using loop
    links[i].className = "link-" + i;

}