/*
  Function declaration for isPalindrome and export statement making that
  function the default export from this module.
  Enforced argument requirements:
    0. The argument count is 1.
    1. Argument 0 is a string.
*/
export default function isPalindrome(string) {
  // If the arguments are valid:
  if (arguments.length === 1 && typeof string === 'string') {
    // Make XRegExp available.
    const XRegExp = require('xregexp');
    // Identify a pattern matching all characters except letters and numbers.
    const discardables = XRegExp('[^\\pL\\pN]', 'g');
    // Identify the string without disregarded characters and lower-cased.
    const prunedString
      = XRegExp.replace(string, discardables, '').toLowerCase();
    // Identify its length.
    const prunedLength = prunedString.length;
    // Identify its halves, without any middle character.
    const half0 = prunedString.slice(0, Math.floor(prunedLength / 2));
    const half1 = prunedString.slice(Math.ceil(prunedLength / 2));
    // Return whether the pruned string is a palindrome.
    const halfLength = half0.length;
    for (let i = 0; i < halfLength; i++) {
      if (half1[i] !== half0[halfLength - 1 - i]) {
        return false;
      }
    }
    return true;
    // ALTERNATE VERSION
    // More compact, but about twice as expensive.
    // return half0 === half1.split('').reverse().join('');
  }
}
