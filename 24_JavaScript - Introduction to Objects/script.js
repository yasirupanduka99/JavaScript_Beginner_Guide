document.write("Objects in JavaScript!" + "<br /><br />");


/*
    JavaScript Objects

        Objects are contains properties and methods.
        In real life, objects are things like: houses, cars, people, animals, or any other subjects.

        Here is a car object example:

            Properties	            Methods
        
            car.name = Fiat         car.start()
            car.model = 500         car.drive()
            car.weight = 850kg      car.brake()
            car.color = white       car.stop()	

        Object Properties
            - A real life car has properties like weight and color:
            - car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.
            - Car objects have the same properties, but the values differ from car to car.

        Object Methods
            - A real life car has methods like start and stop:
            - car.start(), car.drive(), car.brake(), car.stop().
            - Car objects have the same methods, but the methods are performed at different times.

        JavaScript Objects
            - Objects are variables too. But objects can contain many values.
            - This code assigns many values (Fiat, 500, white) to an object named car:

                Example
                const car = {type:"Fiat", model:"500", color:"white"};

        JavaScript Object Definition
            How to Define a JavaScript Object
                - Using an Object Literal
                - Using the new Keyword
                - Using an Object Constructor
                

        JavaScript Object Literal
            - An object literal is a list of name:value pairs inside curly braces {}.

                {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

            Note:
                name:value pairs are also called key:value pairs.
                object literals are also called object initializers.

        Creating a JavaScrip Object
            - These examples create a JavaScript object with 4 properties:

            Examples
                // Create an Object
                    const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

                Spaces and line breaks are not important. An object initializer can span multiple lines:

                    // Create an Object
                    const person = {
                        firstName: "John",
                        lastName: "Doe",
                        age: 50,
                        eyeColor: "blue"
                    };

                This example creates an empty JavaScript object, and then adds 4 properties:

                    // Create an Object
                    const person = {};

                    // Add Properties
                    person.firstName = "John";
                    person.lastName = "Doe";
                    person.age = 50;
                    person.eyeColor = "blue";

            Using the new Keyword
                This example create a new JavaScript object using new Object(), and then adds 4 properties:

                Example
                    // Create an Object
                    const person = new Object();

                    // Add Properties
                    person.firstName = "John";
                    person.lastName = "Doe";
                    person.age = 50;
                    person.eyeColor = "blue";

                    Note :
                        The examples above do exactly the same.
                        But, there is no need to use new Object().

            
        Accessing Object Properties
            You can access object properties in two ways:

            objectName.propertyName
            objectName["propertyName"]

                Examples
                    person.lastName;
                    person["lastName"];


        JavaScript Object Methods
            - Methods are actions that can be performed on objects.
            - Methods are function definitions stored as property values.

            Example
                const person = {
                    firstName: "John",
                    lastName : "Doe",
                    id       : 5566,
                    fullName : function() {
                        return this.firstName + " " + this.lastName;
                    }
                };
                    - In the example above, this refers to the person object:
                    - this.firstName means the firstName property of person.
                    - this.lastName means the lastName property of person.

        In JavaScript, Objects are King.
        If you Understand Objects, you Understand JavaScript.
*/

document.write("Creating javascript object and practises in next session. Go for it! 🍾");