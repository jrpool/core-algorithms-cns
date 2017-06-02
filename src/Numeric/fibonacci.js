import isNaturalNumber from './isNaturalNumber';

/*
  Function declaration for fibonacci and export statement making that
  function the default export from this module.
  Enforced argument requirements:
    0. The argument count is 1.
    1. Argument 0 is a positive finite integer.
*/
export default function fibonacci(...args) {
  // If the arguments are valid:
  if (isNaturalNumber(args)) {
    // Identify a minimal Fibonacci array.
    let result = [0, 1];
    let number;
    // If the specified array length is 1 or 2:
    if ((number = args[0]) < 3) {
      // Return the Fibonacci array with that length.
      return result.slice(0, number);
    }
    // Otherwise:
    else {
      // For each length from 3 through the specified length:
      for (let i = 3; i <= number; i++) {
        // Append an element to the array.
        result.push(result[i - 3] + result[i - 2]);
      }
      // Return the array.
      return result;
    }
  }
}
