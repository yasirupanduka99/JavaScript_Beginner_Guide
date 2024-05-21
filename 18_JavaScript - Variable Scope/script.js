alert("Variable Scope!");

let foo = 20; // Global Variable - That means you can use this variable anywhere inside this file.

function myFunction() {
    let bar = 10; // Local Variable - This variable only can use insde this function. can't use in outside the function.
}


// Example 1
    function Result(subject1, subject2){

        let finalResultTotal = subject1 + subject2; // this finalResultTotal variable is local variable because we declare it inside a function. if you want this finalResultTotal variable outside the function, you have to declare it outside the function and use it inside and anywhere.
        console.log(finalResultTotal);
        return finalResultTotal;

    }

    let myResult = Result(80, 75); // this myResult variable is a global variable.
    document.write("Final Result: " + myResult + "<br />");


// Example 2
    function logResult() {

        console.log("The result is " + myResult + " (inside the function)"); // myResult is global function. so we can use it anywhere inside the file.

    }

    logResult();