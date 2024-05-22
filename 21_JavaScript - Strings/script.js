alert("Strings in JavaScript!");

/*
    JavaScript Strings
    Strings are for storing text

    Strings are written with quotes

    Using Quotes
    A JavaScript string is zero or more characters written inside quotes.
*/
        // Example
        let text = "John Doe";

    // You can use single or double quotes:

        // Example
        let carName1 = "Volvo XC60";  // Double quotes
        let carName2 = 'Volvo XC60';  // Single quotes
/*
    Note
        Strings created with single or double quotes works the same.
        There is no difference between the two.

    Quotes Inside Quotes
        - You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
*/
        // Example
        let answer1 = "It's alright";
        let answer2 = "He is called 'Johnny'";
        let answer3 = 'He is called "Johnny"';

/*        
    Template Strings
        - Templates were introduced with ES6 (JavaScript 2016).
        - Templates are strings enclosed in backticks (`This is a template string`).
        - Templates allow single and double quotes inside a string:
*/
        // Example
        let text1 = `He's often called "Johnny"`;
/*
        Note: Templates are not supported in Internet Explorer.

    String Length
        - To find the length of a string, use the built-in length property:
*/
        // Example
        let text2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let length = text.length;
/*
    Escape Characters
        - Because strings must be written within quotes, JavaScript will misunderstand this string:

        let text3 = "We are the so-called "Vikings" from the north.";

    The string will be chopped to "We are the so-called ".
    To solve this problem, you can use an backslash escape character.
    The backslash escape character (\) turns special characters into string characters:

    Code	Result	Description
    \'	'	Single quote
    \"	"	Double quote
    \\	\	Backslash

*/
        // Examples
        // \" inserts a double quote in a string:
        let text4 = "We are the so-called \"Vikings\" from the north.";

        // \' inserts a single quote in a string:
        let text5 = 'It\'s alright.';

        // \\ inserts a backslash in a string:
        let text6 = "The character \\ is called backslash.";



// JavaScript String Methods

    let myString = 'I\'m a "fun" string';
    document.write("String: " + myString + "<br />");

    // JavaScript String Length
    // The length property returns the length of a string:
    document.write("<br />" + "String Length: " + myString.length);

    // JavaScript Uppercase
    document.write("<br />" + "String to uppercase: " + myString.toUpperCase());

    // JavaScript Lowercase
    document.write("<br />" + "String to lowercase: " + myString.toLowerCase());

    // Javascript string find index
    document.write("<br />" + "Word 'fun' index: " + myString.indexOf("fun"));

    // Javascript string find index thrw -1 for not found strings
    document.write("<br />" + "Word 'apple' index: " + myString.indexOf("apple")); // This apple is not in myString string variable.

    if(myString.indexOf("apple") === -1){

        document.write("<br />The word 'apple' is not in the string");

    } else {

        document.write("<br />The word 'apple' starts at position" + myString.indexOf("apple"));

    }


    let string1 = "abc";
    let string2 = "bcd";
    let string3 = "abc";
    let string4 = "ABC";

    console.log(string1 === string2);
    console.log(string1 === string3);
    console.log(string1 === string4);

    console.log(string1 < string4);
    console.log(string1 > string4); // In JavaScript Uppercase letters are smaller than lowercase letters.
    

