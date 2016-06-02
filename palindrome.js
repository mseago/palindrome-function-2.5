
// Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.
//
// Palindromes are words that are the same
// going forwards and backwards. Examples:
//
// i
// dod
// meeteem
// TrickirT

function isPalindrome(string) {
    var palindrome = string.split('').reverse().join('');

    if (palindrome === string){
        return true;
    } else {
        return false;
    }
}

// tests

console.assert( isPalindrome("tacocat") === true, 'first one is incorrect' )
console.assert( isPalindrome("Tacocat") === false )
console.assert( isPalindrome("racecar") === true )
console.assert( isPalindrome("cowboy") === false )
