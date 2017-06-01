/*
  Function declaration for FizzBuzz and export statement making that
  function the default export from this module.
  Enforced argument requirements:
    0. The argument count is 0.
*/
export default function fizzBuzz() {
  // If the arguments are valid:
  if (arguments.length === 0) {
    // Define a function to change a number to a string as required.
    const changer = (currentValue, index) => {
      const quantity = index + 1;
      if (quantity % 15 === 0) {
        return 'FizzBuzz';
      }
      else if (quantity % 5 === 0) {
        return 'Buzz';
      }
      else if (quantity % 3 === 0) {
        return 'Fizz';
      }
      else {
        return quantity;
      }
    };
    // Return the result.
    return Array(100).fill(0).map(changer);
  }
}
