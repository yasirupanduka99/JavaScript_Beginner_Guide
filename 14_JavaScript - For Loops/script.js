alert("For Loop in JS!");

/*

    Different Kinds of Loops
    JavaScript supports different kinds of loops:

        - for - loops through a block of code a number of times
        - for/in - loops through the properties of an object
        - for/of - loops through the values of an iterable object
        - while - loops through a block of code while a specified condition is true
        - do/while - also loops through a block of code while a specified condition is true


    The For Loop
    The for statement creates a loop with 3 optional expressions:

        for (expression 1; expression 2; expression 3) {
            // code block to be executed
        }
    Expression 1 is executed (one time) before the execution of the code block.
    Expression 2 defines the condition for executing the code block.
    Expression 3 is executed (every time) after the code block has been executed.

*/

let links = document.getElementsByTagName("a"); // Get all anchor tags

for (let i = 1; i <= links.length; i++) {
    document.write("<br />This is link number: " + i);
}

document.write("<br /><br />All links are now looped!");