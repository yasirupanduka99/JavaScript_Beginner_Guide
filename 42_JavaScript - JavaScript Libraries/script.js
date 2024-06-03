document.write("<br /> <br/>" + "JavaScript Libraries!" + "<br /><br />");

/*

    JavaScript Libraries

        JavaScript libraries are collections of pre-written JavaScript code that make it 
        easier to develop web applications by providing reusable functions and components. 
        They are designed to handle common tasks, streamline complex operations, and enhance 
        functionality without requiring developers to write everything from scratch.

        Here are some popular JavaScript libraries and their purposes:

        1. jQuery
            Purpose: Simplifies DOM manipulation, event handling, animations, and Ajax interactions.
            Example:
                // jQuery example for hiding an element
                $(document).ready(function() {
                    $("#myElement").hide();
                });

        2. Lodash
            Purpose: Provides utility functions for common programming tasks such as manipulating arrays, objects, and strings.
            Example:
                // Lodash example for cloning an object
                let object = { 'a': 1 };
                let clonedObject = _.clone(object);
                console.log(clonedObject); // { 'a': 1 }

        3. D3.js
            Purpose: Enables data visualization by allowing you to bind data to a Document Object Model (DOM) and apply data-driven transformations to the document.
            Example:
                // D3 example for creating a simple bar chart
                d3.select("body")
                    .selectAll("div")
                    .data([4, 8, 15, 16, 23, 42])
                    .enter().append("div")
                    .style("width", function(d) { return d * 10 + "px"; })
                    .text(function(d) { return d; });

        4. Moment.js
            Purpose: Simplifies the parsing, validation, manipulation, and display of dates and times.
            Example:
                // Moment.js example for formatting a date
                let now = moment();
                console.log(now.format('MMMM Do YYYY, h:mm:ss a')); // June 3rd 2024, 2:30:12 pm

        5. Axios
            Purpose: Provides a promise-based HTTP client for making XMLHttpRequests from the browser and Node.js.
            Example:
                // Axios example for making a GET request
                axios.get('https://api.example.com/data')
                .then(function(response) {
                    console.log(response.data);
                })
                .catch(function(error) {
                    console.log(error);
                });

        6. Chart.js
            Purpose: Creates responsive, interactive, and animated charts using the HTML5 canvas element.
            Example:
                // Chart.js example for creating a bar chart
                var ctx = document.getElementById('myChart').getContext('2d');
                var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                    y: {
                        beginAtZero: true
                    }
                    }
                }
                });




    Benefits of Using JavaScript Libraries:

        1. Time-Saving: Libraries provide pre-built functions and components, reducing the amount 
           of code you need to write from scratch.

        2. Cross-Browser Compatibility: Many libraries handle browser inconsistencies, ensuring 
           that your code works across different web browsers.

        3. Community Support: Popular libraries have large communities, extensive documentation, 
           and many tutorials, making it easier to find help and resources.

        4. Performance Optimization: Libraries are often optimized for performance, which can 
           improve the efficiency of your web applications.

        5. Enhanced Functionality: Libraries can add advanced features and functionality to your 
           web projects without requiring deep expertise in those areas.

*/


// Here we use jQuery library -  we use CDN link for connect jQuery for this project file. look at HTML file


    // Getting fifth paragrph inside the content div

        // - Pure JS way
            let myPara = document.getElementById("content").getElementsByTagName("p")[4];
            console.log(myPara);

        // - Jquery way
            let myPara2 = $("#content p:last-child"); //jQuery use CSS for taking element
            console.log(myPara2);


    // Methods

        // - Pure JS way
            let fourthPara = document.getElementById("content").getElementsByTagName("p")[3];
            fourthPara.className = "fourth-para"; // Addding a class name to forth paragraph using pure JS way

        // - jQuery Way
            myPara2.addClass("fifth-para"); // Adding a class name to last para using jQuery

            let secondPara = $("#content p:nth-child(2)");
            secondPara.removeClass("second-para"); // removinf a class name of second paragraph using jQuery

        // - More methods in jQuery
            myPara2.fadeOut(); // Hide Paragraph with fading out effect
            myPara2.fadeIn(); // Visible Pragraph with fading In effect
            myPara2.css({position: "relative", color: "#ffd000"}); // Adding css elements to paragraph tag
            myPara2.animate({left: "150px"}); // Animate paragraph 150px to left