alert("Break & Continue in JS!");

/*

    JavaScript Break and Continue
    The break statement "jumps out" of a loop.

    The continue statement "jumps over" one iteration in the loop.

    The Break Statement
    You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.

    The break statement can also be used to jump out of a loop:

        Example
        for (let i = 0; i < 10; i++) {
            if (i === 3) { break; }
            text += "The number is " + i + "<br>";
        }
    In the example above, the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.


    The Continue Statement
    The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

    This example skips the value of 3:

        Example
        for (let i = 0; i < 10; i++) {
            if (i === 3) { continue; }
            text += "The number is " + i + "<br>";
        }

*/

for (let i = 0; i < 10; i++) {

    if(i === 5 || i === 3) {
        document.write("<br />Loop skip execution of Number " + i + " :: Because continue statement!");
        continue; // When code come to this loop will not excute below any lines loop continue to go with next number of iteration
    }

    document.write("<br />Number: " + i);
    if (i === 7) {
        document.write("<br />Number is equal to 7 so loop breaked using break statement! 🍳 : LOOP NO LONGER EXECUTE!");
        break;
    }
}

document.write("<br /><br />All links are now looped!");