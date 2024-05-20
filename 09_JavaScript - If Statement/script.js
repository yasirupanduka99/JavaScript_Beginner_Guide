alert("IF Statement!");

/*

    Conditional Statements
    Very often when you write code, you want to perform different actions for different decisions.

    You can use conditional statements in your code to do this.

    In JavaScript we have the following conditional statements:
        - Use if to specify a block of code to be executed, if a specified condition is true
        - Use else to specify a block of code to be executed, if the same condition is false
        - Use else if to specify a new condition to test, if the first condition is false
        - Use switch to specify many alternative blocks of code to be executed

    The if Statement
    Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

    Syntax
        if (condition) {
            //  block of code to be executed if the condition is true
        }

        
    The else Statement
    Use the else statement to specify a block of code to be executed if the condition is false.

        if (condition) {
            //  block of code to be executed if the condition is true
        } else {
            //  block of code to be executed if the condition is false
        }
*/

    let youLikeMeat = true;
    let myNum = 10;

    if(youLikeMeat) { // Condition is true
        document.write("You Like Meat! Here is the meaty menu... 🍗"); // This statement only work when condition is true inside the if statement.
    }

    if(myNum == 10){ // Condition is true
        document.write("<br /> myNum is equal to 10. 🍾");
    }

    if(myNum != 10){ // Condition is false
        document.write("<br /> myNum is not equal to 10. 😕"); // This statement not work because condition is false
    }

    // We can write else statement along with if statemet
    if(myNum != 10){ // Condition is false
        document.write("<br /> myNum is not equal to 10. 😕"); // This statement not work because condition is false
    } else{
        document.write("<br /> myNum is equal to 10. 🍾 - from else statement"); // This statement work because if condition is false so then work else statement. if 'if statement' work then else not runing.
    }