/*
    Problem: :Assume you have a method isSubstring which checks if one word is a substring
    of another. Given two strings, sl and s2, write code to check if s2 is a rotation of 
    sl using only one call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").
*/

// O(A + B) => O(n) time
const isSubstring = (s1s1, s2) => s1s1.includes(s2);

function isRotation(s1, s2) {
    const len = s1.length;

    // Check that s1 and s2 are equal length and not empty
    if (len === s2.length && len > 0) {
        // Concatenate s1 and s1 within new buffer
        let s1s1 = s1 + s1;
        console.log('s1s1 ', s1s1)
        console.log('s2 ', s2)
        return isSubstring(s1s1, s2);
    }

    return false;
}

console.log(isRotation("waterbottle", "erbottlewat")); // true