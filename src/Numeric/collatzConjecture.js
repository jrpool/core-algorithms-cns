import isNaturalNumber from './isNaturalNumber';

/*
  Function and default export declaration for collatzConjecture.
  Enforced argument requirements:
    0. The argument count is 1.
    1. Argument 0 is a positive finite integer.
*/
export default function collatzConjecture (...args) {
  // If the arguments are valid:
  if (isNaturalNumber(args)) {
    // Identify the true argument.
    const number = args[0];
    // Initialize a result array.
    let result = [number];
    // Initialize its last element.
    let last = number;
    // As long as the last element is not 1:
    while (last !== 1) {
      // Update it to the next element.
      last = last % 2 === 0 ? last / 2 : 3 * last + 1;
      // Append it to the array.
      result.push(last);
    }
    // Return the array.
    return result;
  }
}
