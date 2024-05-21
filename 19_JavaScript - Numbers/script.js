alert("Numbers in JavaScript!");

/*
    JavaScript Numbers
    JavaScript has only one type of number. Numbers can be written with or without decimals.

        Example
        let x = 3.14;    // A number with decimals
        let y = 3;       // A number without decimals

    Extra large or extra small numbers can be written with scientific (exponent) notation:

        Example
        let x = 123e5;    // 12300000
        let y = 123e-5;   // 0.00123

    JavaScript Numbers are Always 64-bit Floating Point
        - Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
        - JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
        - This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

    
    Integer Precision
    Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

        Example
        let x = 999999999999999;   // x will be 999999999999999
        let y = 9999999999999999;  // y will be 10000000000000000
        The maximum number of decimals is 17.

    Floating Precision
    Floating point arithmetic is not always 100% accurate:

    let x = 0.2 + 0.1; // This will give x = 0.30000000000000004

    To solve the problem above, it helps to multiply and divide:

    let x = (0.2 * 10 + 0.1 * 10) / 10; // This will give x = 0.3
*/


let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

let i = 123e5;    // 12300000
let j = 123e-5;   // 0.00123

let a = 5;
let b = 5;
let c = "5";

console.log(a + b); // Adding here - 10
console.log(typeof (a + b)); // Giving data type of a + b output as number

console.log(a + c); // Concatinate values - 55
console.log(typeof (a + c)); // Giving data type of a + c  output as string

// For rounding number
let rounded = Math.round(7.5);
console.log("7.5 rounded to Number: " + rounded)

// For rounding number to down bound : Ex: 7.9 => 7
let downRound = Math.floor(7.9);
console.log("7.9 rounded to down boundary: " + downRound);


// For rounding number to upper bound : Ex: 7.2 => 8
let upperRound = Math.ceil(7.1);
console.log("7.1 rounded to upper boundary: " + upperRound);

// For getting maxiumum number
let maximumNum = Math.max(7, 4, 9, 8);
console.log("Maximun number from 7, 4, 9, 8: " + maximumNum);