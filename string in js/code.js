
//All string in javascript

let str = "Hello omda";

// Length Property
console.log("Length:", str.length);

// charAt(index)
console.log("Character at index 0:", str.charAt(0));

// concat(str1, str2, ...)
let str2 = "!";
console.log("Concatenated string:", str.concat(str2));

// indexOf(searchValue, startIndex)
console.log("Index of 'emad':", str.indexOf("World"));

// substring(startIndex, endIndex)
console.log("Substring from index 6:", str.substring(6));

// slice(startIndex, endIndex)
console.log("Slice from index 6:", str.slice(6));

// toUpperCase()
console.log("Uppercase:", str.toUpperCase());

// toLowerCase()
console.log("Lowercase:", str.toLowerCase());

// split(separator, limit)
console.log("Split by space:", str.split(" "));

// replace(searchValue, replaceValue)
console.log("Replace 'omda' with 'Universe':", str.replace("World", "Universe"));
