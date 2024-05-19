// Rule01 -  JavaScript is case sensitive
    alert("Hello World!"); 
    // Alert("Hello World!"); - can't use like this. becasue of case sensitivity in javascript

    function myFunction(){
        alert("This is sample function!")
    }

    myFunction(); 
    // myfunction(); - can't call function like this. becasue of case sensitivity in javascript

// Rule02 - Statements and statement end with always semicolons.
    alert("First Statement!"); alert("Second Statement!"); // writing like this is not clear. so after every statement breaking line is more readable.

    alert("Third Statement!");
    alert("Fourth Statement!");

// Rule03 - Comments in JavaScript
    // - Signal Line Comment

    /*
        Multi-Line Comment
        alert("Sample alert 1!");
        alert("Sample alert 2!");
    */

// Rule04 - JavaScripts runs from top to bottom
    alert("1st statement of runing");
    alert("2nd statemet of runing");
    alert("3rd statement of runing");
    // So JS runs 1st statement to last statemtnt. so watch where are you put code statement.

// Rule05 - JavaScript not sensitive to whitespace or line breaks.
    alert ("Whitespace alert!"); // Between this alert and bracket there is whitespace. but javascript doesn't think about it. so statement will run properly.
    alert
    ("Line breaked alert!"); // This alert is also working properly. because JS not sensitive for line breaks. when the statement over with semicolon it is taken as a one statemnet even that statement in multiple lines.