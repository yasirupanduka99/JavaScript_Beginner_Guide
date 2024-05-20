alert("Logical Operators!");

/*

    Logical Operators
    Logical operators are used to determine the logic between variables or values.

    Given that x = 6 and y = 3, the table below explains the logical operators:

    Operator	Description	    Example
    &&	        and	            (x < 10 && y > 1) is true
                                (x > 10 && y > 1) is false

    ||	        or	            (x == 5 || y == 5) is false	
                                (x == 6 || y == 5) is true
                                (x == 6 || y == 3) is true

    !	        not	            !(x == y) is true

*/

let myAge = 25;

// AND Logical Operator (&&) - If both conditions are true only works. if one condition false, then all false
if(myAge >= 18 && myAge <= 30){
    document.write("You can come, you cool dude! 😁🎉 - Usinf AND Logical Operator");
} else{
    document.write("You ain't comming!");
}

// OR Logical Operator (||) - If both or one condition true, whole expression going to true. 
if(myAge < 18 || myAge > 20){
    document.write("<br /> You can come, you cool dude! 😁🎉 - Using OR Logical Operator")
} else{
    document.write("<br /> You ain't comming!");
}

// NOT Logical Operator (!) - This operator says conditions oposite value
if(!(myAge == 30)) {
    document.write("<br /> NOT Logical Operator Statement! 🍾");
} else{
    document.write("<br /> Condition false in IF statement.");
}