document.write("<br /> <br/>" + "Accessing Form Elements using JavaScript!" + "<br /><br />");

let formByID = document.getElementById("my-form");
console.log(formByID);

// We can also get form another way. it is calling form name
let formByName = document.forms.myForm; //This myForm is form name
console.log(formByName);

// Access to input field inside the form which is name as nameInput
console.log(formByName.nameInput);

// Geting value inside the input field that user typed
console.log(formByName.nameInput.value);
console.log(formByName.colorInput.value);

// onfocus method -  which is when we focus to input field then what to do
formByName.nameInput.onfocus = function() {

    formByName.nameInput.style.outline = "none";
    formByName.nameInput.style.border = "1px solid #ffc700";
    formByName.nameInput.style.borderRadius = "2px";

}

// onblur method - which is when we outthe focus in focused item what to do
formByName.nameInput.onblur = function() {

    formByName.nameInput.style.border = "1px solid #000";
    formByName.nameInput.style.borderRadius = "2px";

}