/*
  Function declaration for factorial and export statement making that
  function the default export from this module.
  Preconditions:
    0. The argument count is 1.
    1. Argument 0 is a positive finite integer.
*/
export default function factorial(number) {
  // If the arguments are valid:
  if (
    arguments.length === 1
    && typeof number === 'number'
    && number > 0
    && number !== Infinity
    && Math.ceil(number) === Math.floor(number)
  ) {
    // Return the factorial of the number.
    return Array(number - 1).fill(0).reduce(
      (accumulator, currentValue, currentIndex) => {
        return accumulator * (currentIndex + 2);
      },
      1
    );
  }
}
