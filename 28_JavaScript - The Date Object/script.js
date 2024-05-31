document.write("The Date Object in JavaScript!" + "<br /><br />");

/*
    The Date Object

*/

let myDate = new Date(); // Getting Current Date.
console.log("Current Date : " + myDate);

// Getting Past Date
let myPastDate = new Date(1545, 11, 2); // Month is 0 to 11. 0 means january and 11 means decemeber wise.
console.log("Past Date : " + myPastDate);

// Getting Future Date
let myFutureDate = new Date(2515, 0, 31); // Month is 0 to 11. 0 means january and 11 means decemeber wise.
console.log("Future Date : " + myFutureDate);



// Calling methods from date object
let birthday = new Date(1985, 0, 15, 11, 15, 25); // (YYYY, MM, DD, HH, mm, ss)
console.log("Birthday : " + birthday);

console.log("Birthday Month : " + birthday.getMonth()); // get the month of the date (0 - 11)
console.log("Birthday Year : " + birthday.getFullYear()); // get the full year (YYYY)
console.log("Birthday Date : " + birthday.getDate()); // get the date of the month (0 - 31)
console.log("Birthday Day : " + birthday.getDay()); // get the day of week (0 -6)
console.log("Birthday Hour : " + birthday.getHours()); // get the hour of the date (0 - 23)
console.log("Birthday Time : " + birthday.getTime()); // get the number of miliseconds since 1st jan 1970

// Why we need getTime() method?
// lets make another date as birthday2, but values same.
let birthday2 = new Date(1985, 0, 15, 11, 15, 25);

// Lets create if else statement to check this birthday and birthday2 objects are same or not
if ( birthday === birthday2){

    console.log("Birthdays are equal");

} else {

    console.log("Birthdays are not equal");

}
// This if-else gives "Birthdays are not equal" statement. but these two birthdays have same values then why?
// That because birthday and birthday2 are objects of Date() object are not same thats why throwing not equal satement. Then how we check these values of birthdays. 

if( birthday.getTime() === birthday2.getTime() ){

    console.log("Birthdays are equal");

} else {

    console.log("Birthdays are not equal");

}