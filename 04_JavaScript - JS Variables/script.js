alert("JS Variables!");

/*
    Variables are Containers for Storing Data

    JavaScript Variables can be declared in 4 ways:

    Automatically
    Using var
    Using let
    Using const
*/

// Automatically decalring variables
    x = 5;
    y = 6;
    z = x + y;
    console.log("Z value: " + z);
    // Note: It is considered good programming practice to always declare variables before use.

// Declaring cariable using var
    var a = 5;
    var b = 6;
    var c = a + b;
    console.log("C value: " + c);
    // Note: The var keyword was used in all JavaScript code from 1995 to 2015.
    // Note: The let and const keywords were added to JavaScript in 2015.
    // Note: The var keyword should only be used in code written for older browsers.

// Declaring variable using let
    let e = 5;
    let f = 6;
    let g = e + f;
    console.log("G value: " + g);

// Declaring variable using const
    const i = 5;
    const j = 6;
    const k = i + j;
    console.log("K value: " + k);

// Declaring variables mixing let and const
    const price1 = 5;
    const price2 = 6;
    let total = price1 + price2;
    /*
        The two variables price1 and price2 are declared with the const keyword.
        These are constant values and cannot be changed.
        The variable total is declared with the let keyword.
        The value total can be changed.
    */

// When to Use var, let, or const?
    // 1. Always declare variables
    // 2. Always use const if the value should not be changed
    // 3. Always use const if the type should not be changed (Arrays and Objects)
    // 4. Only use let if you can't use const
    // 5. Only use var if you MUST support old browsers.

// Note: Variables are containers for storing values.