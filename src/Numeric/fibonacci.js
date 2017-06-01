/*
  Function declaration for fibonacci and export statement making that
  function the default export from this module.
  Preconditions:
    0. The argument count is 1.
    1. Argument 0 is a positive finite integer.
*/
export default function fibonacci(number) {
  // If the arguments are valid:
  if (
    arguments.length === 1
    && typeof number === 'number'
    && number > 0
    && number !== Infinity
    && Math.ceil(number) === Math.floor(number)
  ) {
    // Identify a minimal Fibonacci array.
    let result = [0, 1];
    // If the number is 1 or 2:
    if (number < 3) {
      // Return the Fibonacci array with the specified length.
      return result.slice(0, number);
    }
    // Otherwise:
    else {
      // For each integer from 3 through the number:
      for (let i = 3; i <= number; i++) {
        // Append an element to the array.
        result.push(result[i - 3] + result[i - 2]);
      }
      // Return the array.
      return result;
    }
  }
}
