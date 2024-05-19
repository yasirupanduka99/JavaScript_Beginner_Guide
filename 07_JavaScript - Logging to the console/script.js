alert("Logging to the console!");

let myLet = "Yasiru";
let dateNow = new Date();

document.write(myLet);
document.write("<br />");
document.write(dateNow); // The write() method writes directly to an open (HTML) document stream.
// Warning: The write() method deletes all existing HTML when used on a loaded document.

console.log("My name is " + myLet); // The log() method writes (logs) a message to the console.
// Note: The log() method is useful for testing purposes.