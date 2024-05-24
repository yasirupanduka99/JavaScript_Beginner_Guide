document.write("THIS Keyword in JavaScript!" + "<br /><br />");

/*
    The JavaScript this Keyword

        Example
            const person = {
                firstName: "John",
                lastName : "Doe",
                id       : 5566,
                fullName : function() {
                    return this.firstName + " " + this.lastName;
                }
            };

    What is this?
    In JavaScript, the this keyword refers to an object.

    The this keyword refers to different objects depending on how it is used:

        - In an object method, this refers to the object.
        - Alone, this refers to the global object.
        - In a function, this refers to the global object.
        - In a function, in strict mode, this is undefined.
        - In an event, this refers to the element that received the event.
        - Methods like call(), apply(), and bind() can refer this to any object.

        Note : this is not a variable. It is a keyword. You cannot change the value of this.

    this Alone
        - When used alone, this refers to the global object.
        - Because this is running in the global scope.
        - In a browser window the global object is [object Window]:

            Example
                let x = this;

    this in a Function (Default)
        In a function, the global object is the default binding for this.

        In a browser window the global object is [object Window]:

            Example
                function myFunction() {
                    return this;
                }

    this in a Function (Strict)
        JavaScript strict mode does not allow default binding.

        So, when used in a function, in strict mode, this is undefined.

            Example
                "use strict";
                function myFunction() {
                    return this;
                }
*/

//  If 'this' use in root - top level
console.log("Use this keyword in root : ");
console.log(this);

let person = {
    // Adding properties
    firstName: "Yasiru",
    lastName: "Panduka",
    age: 24,

    // Adding Method
    fullName: function(){
        return this.firstName + this.lastName;
    },

    bmi: function(weight, height){
        return weight / Math.pow(height, 2);
    },

    test: function(){
        console.log("This key word insde a function : ");
        console.log(this);
    }
}

let person2 = {
    // Adding properties
    firstName: "Mighty",
    lastName: "Monkey",
    age: 2,

    // Adding Method
    fullName: function(){
        console.log("Full Name is " + this.firstName + this.lastName);
        return this.firstName + this.lastName;
    },

    bmi: function(weight, height){
        return weight / Math.pow(height, 2);
    },

    test: function(){
        console.log("This key word insde a function : ");
        console.log(this);
    }
}

person.test(); // Calling function inside the object that trigger this keyword to console.
person2.test(); // Calling function inside the object that trigger this keyword to console.

person2.fullName();