/*
  Function declaration for setUnion and export statement making that
  function the default export from this module.
  Preconditions:
    0. The argument count is 2.
    1. Both arguments are arrays.
*/
export default function setUnion(a, b) {
  // If the arguments are valid:
  if (arguments.length === 2 && Array.isArray(a) && Array.isArray(b)) {
    // Initialize the result.
    let result = [];
    // For each array:
    for (let i of [a, b]) {
      // For each element:
      for (let j of i) {
        // If it is not yet in the result:
        if (! result.includes(j)) {
          // Append it to the result.
          result.push(j);
        }
      }
    }
    // Return the union of the sets.
    return result;
  }
}
