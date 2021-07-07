/*  
    PROBLEM:
    Write a method to replace all spaces in a string with '%20'. 
    You may assume yhat the string has sufficent space at the
    end to hold the additional characters, and that you are
    given the "true" length of the string.

    EXAMPLE:
    input: "Mr John Smith   ", 13
    output: "Mr%20John%20Smith"
*/

// time: O(2N) => O(N) space: O(N)
function urlIfy(s) {
    let strArray = s.split(' ');
    strArray = strArray.join("%20");

    // convert back to array
    strArray = strArray.split('')

    // remove urlify characters from the end
    for (let idx = strArray.length - 1; idx >= 0; idx--) {
        if (isUrlifyCharacter(strArray[idx])) {
            strArray[idx] = '';
        }
        // break from loop when letters reached
        if ((/[a-zA-Z]/).test(strArray[idx]) === true) {
            break;
        }
    }

    // remove urlify characters from the beginning
    for (let idx = 0; idx < strArray.length; idx++) {
        if (isUrlifyCharacter(strArray[idx])) {
            strArray[idx] = '';
        }
        // break from loop when letters reached
        if ((/[a-zA-Z]/).test(strArray[idx]) === true) {
            break;
        }
    }
    return strArray.join("");
}

function isUrlifyCharacter(character) {
    return (
        character === '2' ||
        character === '0' ||
        character === '%'
    )
}

// general test cases
console.log(urlIfy("Mr Bob Jones")) // Mr%20Bob%20Jones
console.log(urlIfy("This string is urlified")) // This%20string%20is%20urlified
console.log(urlIfy("Another urlified string here")) // Another%20urlified%20string%20here

// base cases
console.log(urlIfy("Mr John Smith   ")); // Mr%20John%20Smith
console.log(urlIfy("  Mr  Spaces     ")); // Mr%20Spaces
console.log(urlIfy("Spaceman         ")); // Spaceman

// error cases
