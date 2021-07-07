/*
    Problem: 
        Given two strings, write an algorithm to decide if one is a permutation of another.
*/

// Solution:

// time: O(n) space: O(n)
function checkPermutations(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const sortedStr1Array = str1.split('').sort((a, b) => a.localeCompare(b));
    const sortedStr2Array = str2.split('').sort((a, b) => a.localeCompare(b));
    const isPermutation = sortedStr1Array.join('') === sortedStr2Array.join('')

    return isPermutation;
}


// simple tests
console.log(checkPermutations("abc", "cba")); // true
console.log(checkPermutations("abd", "abdabd")); // false
console.log(checkPermutations("ddd", "dadaaddcdadc")) // false
console.log(checkPermutations("dad", "adaDabcD")); // false
console.log(checkPermutations("fafafa", "afafaf"));  // true
