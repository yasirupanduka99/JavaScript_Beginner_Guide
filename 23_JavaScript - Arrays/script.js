document.write("Arrays in JavaScript!" + "<br /><br />");


/*
    JavaScript Arrays
        An array is a special variable, which can hold more than one value:

            const cars = ["Saab", "Volvo", "BMW"];

    Why Use Arrays?
        If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

            let car1 = "Saab";
            let car2 = "Volvo";
            let car3 = "BMW";
        However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

        The solution is an array!

        An array can hold many values under a single name, and you can access the values by referring to an index number.

    Creating an Array
        Using an array literal is the easiest way to create a JavaScript Array.

        Syntax:
            const array_name = [item1, item2, ...];      

        It is a common practice to declare arrays with the const keyword.

    
    Using the JavaScript Keyword new
        The following example also creates an Array, and assigns values to it:

            Example
            const cars = new Array("Saab", "Volvo", "BMW");

            - The two examples above do exactly the same.
            - There is no need to use new Array().
            - For simplicity, readability and execution speed, use the array literal method.

    
    Accessing Array Elements
        You access an array element by referring to the index number:

            const cars = ["Saab", "Volvo", "BMW"];
            let car = cars[0]; // This is how access the first data in array

        Note: Array indexes start with 0. [0] is the first element. [1] is the second element.

    Changing an Array Element
        This statement changes the value of the first element in cars:

            Example
            const cars = ["Saab", "Volvo", "BMW"];
            cars[0] = "Opel";
*/

// Creating Array
let myArray = []; // Declaring empty array

myArray[0] = 25; // Add first data to first element in array. Note: Array indexes start with 0. [0] is the first element. [1] is the second element.
console.log("myArray[0] : " + myArray[0]);

myArray[1] = 35;
console.log("myArray[1] : " + myArray[1]);

myArray[2] = true;
console.log("myArray[2] : " + myArray[2]);

myArray[3] = "hello";
console.log("myArray[3] : " + myArray[3]);

// Adds a new element (batman) to myArray array
myArray.push("batman"); // Using push you can push data to the Array. data will store in as next index. (Last index)

console.log("Access to full Array : " + myArray);

myArray[2] = false;
console.log("Updated index 2 in Array! myArray[2] : " + myArray[2]);


// Creating Array with elements
let myArray2 = [10 , 20, "hi", false];
console.log("Declaring Array with elements. myArray2 : " + myArray2);

// Creating Array with new keyword
let myArray3 = new Array(); // Creating new instance using Arrya built in method. this method is not using. use upper method for declaring array.

// Array Length method
console.log("myArray Length : " + myArray.length);

// Array sort method
console.log("myArray after sort : " + myArray.sort());

// Array element reverse method
console.log("myArray after revesed : " + myArray.reverse());