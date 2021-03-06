/*
    Problem:
        Given a string, write a function to check if it is a permutation of a palindrome.
        A palindrome is a word or a phrase that is the same forwards as backwards. A 
        permutation is a rearrangement of letters. The palindrome does not need to be
        limited to just dictionary words. You can ignore casing and non-letter characters.
        Example:
        input: Tact Coa
        Output: True (permutations: "taco cat", "acto cta", etc.)

        steps:
            - edge cases:
                - str length is <= 1 return
            - convert str to lowercase
            - first check that input string is a palindrome:
                - traverse through str from length - 1 to 0
                - store each character in an array
                - reverse array, join it back to a string
                - compare the result with original string

            - then check if string is a permutation:
                - sort the palndrome string array
                - convert original string into an array and sort it
                - if both are equal its is also a permutation
            
            - if both of these conditions are true its a oermutatuon of a palindrome
 */
        

function isPermutationOfPalindrome(phrase) {
    const table = buildCharFrequencyTable(phrase);
    return checkMaxOneOdd(table);
}

function checkMaxOneOdd(table) {
    let foundOdd = false;
    for (const count of Object.values(table)) {
        if (count % 2 === 1) {
            if (foundOdd) {
                return false;
            }
            foundOdd = true;
        }
    }
    return true;
}


// function getCharNumber(c) {
//     let a = String.charCodeAt('a');
//     let z = String.charCodeAt('z');
//     let val = String.charCodeAt('c');
//     if (a <= val && val <= z) {
//         return val - a;
//     }
//     return -1;
// }

function buildCharFrequencyTable(phrase) {
    const table = {};
    phrase = phrase.toLowerCase();

    for (let i = 0; i < phrase.length; i++) {
        let char = phrase[i];

        if (char !== ' ') {
            table[char]++;
        }
    }
    return table;
}


console.log(isPermutationOfPalindrome("Tact Coa"))
console.log(isPermutationOfPalindrome("Tact Coa"))
console.log(isPermutationOfPalindrome("Tact Coa"))
console.log(isPermutationOfPalindrome("Tact Coa"))






