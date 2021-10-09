/*
    Problem: Perform a basic string compression using counts of repeated
    characters.

    EXAMPLE:
    aabcccccaaa => a2b1c5a3

    Note: 
        - if compressed string not smaller than original, return original string
        - assume only upper and lowercase letters 

    solution:
        - convert original string to all lowercase
        - use a hash to keep track of letter counts
        - iterate through string, for each character
        - store it in hash with count set to 1 if not already in hash
        - increment characters count if already in hash
        - use an array to hold characters with counts
        - itearete over hash, for each key store it in array with value next to it
        - return joined array as string
*/

function stringCompression(str) {
    str = str.toLowerCase();
    const charCounts = {};

    for (const char of str) {
        if (char in charCounts) {
            charCounts[char] += 1;
        } else {
            charCounts[char] = 1;
        }
    }

    const compressedStr = [];

    // create compressed string
    for (const char of Object.keys(charCounts)) {
        compressedStr.push(char, charCounts[char]);
    }

    console.log(compressedStr);

    return compressedStr.join('');
}

// O(p + k^2)
function stringCompressBad(str) {
    let compressedString = "";
    let countConsecutive = 0;
    for (let i = 0; i < str.length; i++) {
        countConsecutive++;

        // if next char is diff than current, append it to result
        if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
            compressedString += "" + str.charAt(i) + countConsecutive;
            countConsecutive = 0;
        }
    }
    return compressedString.length < str.length ? compressedString : str;
}

function compress(str) {
    const compressed = [];
    let countConsecutive = 0;
    for (let i = 0; i < str.length; i++) {
        countConsecutive++;

        // If next char is different than current, append it to compressed
        if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
            compressed.push(str.charAt(i));
            compressed.push(countConsecutive);
            countConsecutive = 0;
        }
    }
    return compressed.length < str.length ? compressed.join('') : str;
}


console.log(stringCompression('aabcccccaaa')); // a2b1c5a3

console.log(stringCompressBad('aabcccccaaa'));

console.log(compress('aabcccccaaa'));