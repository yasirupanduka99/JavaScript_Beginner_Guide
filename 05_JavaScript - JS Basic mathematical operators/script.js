alert("JS Arithmetic Operators!");

/*
    JavaScript Arithmetic Operators
    Arithmetic operators perform arithmetic on numbers (literals or variables).

    Operator	Description
    =           Assign
    +	        Addition
    -	        Subtraction
    *	        Multiplication
    **	        Exponentiation (ES2016)
    /	        Division
    %	        Modulus (Remainder)
    ++	        Increment
    --	        Decrement


    Operators and Operands
    The numbers (in an arithmetic operation) are called operands.
    The operation (to be performed between the two operands) is defined by an operator.

    Operand	Operator	Operand
    100	    +	        50
*/

// Assign Operator (=)
    var myVar = 5;
    var a = 15;
    var b = 5;
    // This equal sign is assign operator 
    console.log("Assign value: " + myVar);
    

// Addition Operator (+)
    var x = 100 + 50;
    var z = a + b; 
    // This plus sign is assign operator 
    console.log("Addition value: " + z);
    
// Subtraction Operator (-)
    let s = a - b;
    // This minus sign is subtracting operator
    console.log("Subracting value: " + s);
    
// Multiplication Operator (*)
    let m = a * b;
    // This star sign is multiplying operator
    console.log("Multiplying value: " + m);

// Division Operator (/)
    let d = a / b;
    // This forward slash sign is dividing operator
    console.log("Division value: " + d);
    
// Modulus (Remainder) Operator (%)
    let r = a % b;
    // This precentage sign is reminder operator
    console.log("Reminder value: " + r);

// Increment Operator (++)
    let i = 5;
    i++;
    let n = i;
    // This double plus sign is increment operator
    console.log("Incremented value: " + n);

// Decrement Operator (--)
    let j = 5;
    j--;
    let k = j;
    // This double minus sign is decrement operator
    console.log("Decremented value: " + k);

// Exponentiation (ES2016) (**) - The exponentiation operator (**) raises the first operand to the power of the second operand
    let e = a ** 2;
    // This double star sign is exponentiation operator.
    console.log("Exponentiation value: " + e);

    let q = Math.pow(a,2); // This is also doing exponentiation operation
    console.log("Exponentiation value using Math.pow(): " + q);
    

// Note: Remember if you adding number with string. JS will concatinate two parameters and give another one string.
    let num = 5;
    let firstname = "Yasiru";
    let lastname = " Panduka";
    let addition = num + firstname;
    let fullname = firstname + lastname;
    console.log("Concatinate value: " + addition);
    console.log("Concatinate Full Name: " + fullname);