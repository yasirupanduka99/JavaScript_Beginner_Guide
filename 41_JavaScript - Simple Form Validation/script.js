document.write("<br /> <br/>" + "Simple Form Validation using JavaScript!" + "<br /><br />");

// put the form to variable
let form = document.forms.myForm;
let message = document.getElementById("message");

form.onsubmit = function() {

    // Implementing form validation
    if(form.nameInput.value == "") {

        message.innerHTML = "⚠️ Please Enter a Name!";
        return false; // Don't submitting the form

    } 
    // Check if at least one hobby is checked
    else if(!form.biking.checked && !form.skiing.checked && !form.diving.checked) {

        message.innerHTML = "⚠️ At Least a Hobby Required!";
        return false;

    }
    // Check if a color is selected
    else if(form.colorInput.value == "") {

        message.innerHTML = "⚠️ A Color Required!";
        return false;

    } else{

        message.innerHTML = "";
        return true; // Submit the form

    }

}