alert("Not a Number(Nan) in JavaScript!");

/*
    JavaScript Number NaN
        Examples
        let x = Number.NaN;
        let x = NaN;

    Description
        - In JavaScript, NaN is short for "Not-a-Number".
        - In JavaScript, NaN is a number that is not a legal number.
        - The Global NaN property is the same as the Number.Nan property.

    Syntax
        - Number.NaN
*/


let a = 5;
let b = "apple";

console.log(a + b); // This will concatinate number with string
console.log(a * b); // This will give output as Not-a-Number(NaN)

if (isNaN(b)) {
    console.log("b is Not-a-Number. b is " + b);
} else {
    console.log("b is a number. So a * b is " + (a * b));
}
