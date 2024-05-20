alert("ELSE IF Statement!");

/*

    Conditional Statements
    Very often when you write code, you want to perform different actions for different decisions.

    You can use conditional statements in your code to do this.

    In JavaScript we have the following conditional statements:
        - Use if to specify a block of code to be executed, if a specified condition is true
        - Use else to specify a block of code to be executed, if the same condition is false
        - Use else if to specify a new condition to test, if the first condition is false
        - Use switch to specify many alternative blocks of code to be executed

    The else if Statement
    Use the else if statement to specify a new condition if the first condition is false.

    Syntax
        if (condition1) {
            //  block of code to be executed if condition1 is true
        } else if (condition2) {
            //  block of code to be executed if the condition1 is false and condition2 is true
        } else {
            //  block of code to be executed if the condition1 is false and condition2 is false
        }
*/

let myAge = 29;

if (myAge > 30) {
  document.write("You are over 30! 🍾😁");
} else if (myAge > 20) {
  document.write("You are over 20! 🎉😁");
} else if (myAge > 10) {
  document.write("You are over 10! 🍗😁");
} else {
  document.write("You are not over 10! 🍟😁");
}
