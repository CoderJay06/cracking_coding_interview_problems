/*
    Problem: Given two strings, write a function to check if they are 
    one edit (or zero edits) away.

    EXAMPLE:
    pale, ple -> true
    pales, pale -> true
    pale, bale -> true
    pale, bake -> false

    first solution: 
        - set an edit counter to keep track of needed edits
        - iterate over first string
        - for each character
        - if character in second string is not in first
        - insert character
        - increment edit counter
        - if edit counter is equal to 1 or zero, return true
*/

// function checkOneAway(str1, str2) {
//     let editCount = 0;
//     console.log('before ', str1, ' ', str2)
//     // check for how many edits need to be made
//     for (let i = 0; i < str1.length; i++) {

//         if (str1[i] !== str2[i] && isLetter(str2[i]) ) {
//             // insert character in str2
//             // str2.splice(i, 0, str1[i]);
//             str2 = `${str2.substring(0, i)}${str1[i]}${str2.substring(i + 1, str2.length - 1)}`;
//             editCount++;
//         }
//     }
//     console.log('after ', str1, ' ', str2)
//     return editCount === 1 || editCount === 0;
// }
// function isLetter(char) {
//     return /[a-zA-Z]/.test(char);
// }
// SOLUTION 1st:

// // O(n) time and space
// function oneEditAway(first, second) {
//     if (first.length === second.length) {
//         return oneEditReplace(first, second);
//     } else if (first.length + 1 === second.length) {
//         return oneEditInsert(first, second);
//     } else if (first.length - 1 === second.length) {
//         return oneEditInsert(second, first);
//     }
//     return false;
// }

// function oneEditReplace(s1, s2) {
//     let foundDifference = false;
//     for (let i = 0; i < s2.length; i++) {
//         if (s1[i] !== s2[i]) {
//             if (foundDifference) {
//                 return false;
//             }

//             foundDifference = true;
//         }
//     }
//     return true;
// }

// // check if you can insert a character into s1 to make s2
// function oneEditInsert(s1, s2) {
//     let index1 = 0;
//     let index2 = 0;
//     while (index2 < s2.length && index1 < s1.length) {
//         if (s1[index1] !== s2[index2]) {
//             if (index1 !== index2) {
//                 return false;
//             }
//             index2++;
//         } else {
//             index1++;
//             index2++;
//         }
//     }
//     return true;
// }

// SOLUTION 2nd:
// merge methods into one

function oneEditAway(first, second) {
    // Length checks
    if (Math.abs(first.length - second.length) > 1) {
        return false;
    }

    // get shorter and longer string
    let s1 = first.length < second.length ? first : second;
    let s2 = first.length < second.length ? second : first;

    let index1 = 0;
    let index2 = 0;
    let foundDifference = false;
    while (index2 < s2.length && index1 < s1.length) {
        if (s1[index1] !== s2[index2]) {
            // ensure that this is the first difference found
            if (foundDifference) return false;

            foundDifference = true;

            if (s1.length === s2.length) { // on replace, move shorter pointer
                index1++;
            }
        } else {
            index1++; // if matching, move shorter pointer
        }
        index2++;
    }
    return true;
}

// Tests
console.log(oneEditAway('pale', 'ple')); // true
console.log(oneEditAway('pales', 'pale')); // true
console.log(oneEditAway('pale', 'bale')); // true
console.log(oneEditAway('pale', 'bake')); // false