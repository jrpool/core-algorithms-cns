/*
  Function declaration for FizzBuzz and export statement making that
  function the default export from this module.
  Enforced argument requirements:
    0. The argument count is 0.
*/
export default function fizzBuzz() {
  // If the arguments are valid:
  if (arguments.length === 0) {
    // Identify a conversion table.
    const conversions = [[15, 'FizzBuzz'], [5, 'Buzz'], [3, 'Fizz']];
    // Return the result.
    return Array(100).fill(0).map(
      (currentValue, index) => {
        const quantity = index + 1;
        for (const conversion of conversions) {
          if (quantity % conversion[0] === 0) {
            return conversion[1];
          }
        }
        return quantity;
      }
    );
  }
}
