/*
  Function declaration for setComplement and export statement making that
  function the default export from this module.
  Preconditions:
    0. The argument count is 2.
    1. Both arguments are arrays.
*/
export default function setComplement(a, b) {
  // If the arguments are invalid:
  if (
    arguments.length !== 2
    || ! Array.isArray(a)
    || ! Array.isArray(b)
  ) {
    // Return a failure result.
    return undefined;
  }
  // Otherwise:
  else {
    // Initialize the result.
    let result = [];
    // For each element of the second array:
    for (let i of b) {
      // If it is not in the first array but not yet in the result:
      if (! a.includes(i) && ! result.includes(i)) {
        // Append it to the result.
        result.push(i);
      }
    }
    // Return the complement of the first set in the sets’ population.
    return result;
  }
}
