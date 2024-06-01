document.write("Timers in JavaScript!" + "<br /><br />");


// Notice show after delay implementation
    let myMessage = document.getElementById("message");

    function showMessage() {

        myMessage.className = "show";

    }

    // This  above showMessage function should be call after some time delay. how we do that?
    let myTimeOutTimer = setTimeout(showMessage, 3000); // Calling showMessage() function after 3 seconds


// color changing in time intervals
    let colorChanger = document.getElementById("color-changer");
    let colors = ["red", "blue", "green", "pink"];
    let counter = 0;

    function changeColor() {

        if(counter >= colors.length){
            counter = 0;
        }

        colorChanger.style.backgroundColor = colors[counter];
        counter++;

    };

    let myIntervalTimer = setInterval(changeColor, 3000); // calling function every 3 seconds. that means setInterval use for doing something with 3 seconds intervals.


    // How to stop timer?
    colorChanger.onclick = function() {

        clearInterval(myIntervalTimer); // When colorChanger clicked, then intervalTimer will be stop.
        colorChanger.innerHTML = "Interval Timer⌛ Stopped!"

    }