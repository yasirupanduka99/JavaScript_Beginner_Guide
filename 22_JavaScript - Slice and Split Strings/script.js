alert("Slice and Split Strings in JavaScript!");


/*
    JavaScript String slice()

        - The slice() method extracts a part of a string.
        - The slice() method returns the extracted part in a new string.
        - The slice() method does not change the original string.

    The start and end parameters specifies the part of the string to extract.

    The first position is 0, the second is 1, ...

    A negative number selects from the end of the string.


    Syntax
        string.slice(start, end)

    Parameters
        Parameter	Description
        start	    Required.
                    The start position.
                    (First character is 0).
        end	        Optional.
                    The end position (up to, but not including).
                    Default is string length.

    Return Value
        Type	    Description
        A string	The extracted part of the string.
*/

let str = "hello, world!"; 
document.write("<br />" + "String : " + str);

let str2 = str.slice(2,9); // this slice method should cut the sentence in position 2 to position 9. output will be => llo, wo
document.write("<br />" + "String slice into position 2 to 9 : " + str2);

let str3 = str.slice(2); // this time only pass start parameter. then slice from position 2 and get all string values until string end. ouput will be => llo, world!
document.write("<br />" + "String slice in position 2 : " + str3);


/*
    JavaScript String split()

        - The split() method splits a string into an array of substrings.
        - The split() method returns the new array.
        - The split() method does not change the original string.
        - If (" ") is used as separator, the string is split between words.

    
    Syntax
        string.split(separator, limit)

    Parameters
        Parameter	Description
        separator	Optional.
                    A string or regular expression to use for splitting.
                    If omitted, an array with the original string is returned.
        limit	    Optional.
                    An integer that limits the number of splits.
                    Items after the limit are excluded.

    Return Value
        Type	    Description
        Array	    An array containing the splitted values.
*/


let tags = "meat, ham, salami, pork, beef, chicken";
document.write("<br /><br />" + "String : " + tags);

let tagsArray = tags.split(","); // Split the string to parts, where the coma(,) is.
document.write("<br />" + "Tags Array(Spliting using comas) : " + tagsArray);

let tagsArray2 = tags.split(" "); // Spliting the string from spaces(" ").
document.write("<br />" + "Tags Array(Spliting using spaces) : " + tagsArray2);