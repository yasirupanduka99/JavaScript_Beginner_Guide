document.write("Creating a new JavaScript Object!" + "<br /><br />");

// Documenttation for the Javascript objects in previous session. - 24_JavaScript - Introduction to Object

    // Decalaring javascript object as new instance of Object().
    let myCar = new Object();

    // Adding Properties to myCar object
    myCar.maxSpeed = 50;
    myCar.driver = "Yasiru";

    // Adding Methods to myCar object
    myCar.driveFunction = function() {
        console.log("Now driving!");
    };

    myCar.driveFunction(); // Calling method to trigger the function.

    // Short-hand notation for declaring object
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
        }
    }

    // Accessing to person object
    console.log("Person first name : " + person.firstName);
    console.log("Person Full Name : " + person.fullName());
    console.log("Person BMI value : " + person.bmi(58, 1.8288) + " kg/m2");
        
