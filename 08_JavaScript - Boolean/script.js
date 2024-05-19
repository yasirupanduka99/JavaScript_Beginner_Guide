alert("Boolean in JavaScript!");

/*
    Boolean Values
    Very often, in programming, you will need a data type that can only have one of two values, like
        YES / NO
        ON / OFF
        TRUE / FALSE

    For this, JavaScript has a Boolean data type. It can only take the values true or false.
*/


// The Boolean() Function
// You can use the Boolean() function to find out if an expression (or a variable) is true:
    Boolean(10 > 9);

// Everything With a "Value" is True
    let x = 5;
    Boolean(x);

    let y = -15;
    Boolean(y);

    let q = "Hello";
    Boolean(q);

// Everything Without a "Value" is False
    // The Boolean value of 0 (zero) is false:
    let z = 0;
    Boolean(z);

    // The Boolean value of -0 (minus zero) is false:
    let r = -0;
    Boolean(r);

    // The Boolean value of "" (empty string) is false:
    let g = "";
    Boolean(g);

    // The Boolean value of undefined is false:
    let h;
    Boolean(h);

    // The Boolean value of null is false:
    let j = null;
    Boolean(j);

    // The Boolean value of false is (you guessed it) false:
    let f = false;
    Boolean(f);

    // The Boolean value of NaN is false:
    let o = 10 / "Hello";
    Boolean(o);


// JavaScript Booleans as Objects
    // Normally JavaScript booleans are primitive values created from literals:
    let xx = false;

    // But booleans can also be defined as objects with the keyword new:
    let yy = new Boolean(false);

    // typeof xx returns boolean
    // typeof yy returns object

    // Note: Do not create Boolean objects. The new keyword complicates the code and slows down execution speed. Boolean objects can produce unexpected results:
    