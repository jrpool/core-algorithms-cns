/*
  Function declaration for setSymmetricDifference and export statement making
  that function the default export from this module.
  Preconditions:
    0. The argument count is 2.
    1. Both arguments are arrays.
*/
export default function setSymmetricDifference(a, b) {
  // If the arguments are valid:
  if (arguments.length === 2 && Array.isArray(a) && Array.isArray(b)) {
    // Initialize the result.
    let result = [];
    // For each permutation of the arrays:
    for (let i of [[a, b], [b, a]]) {
      // For each element of the first array in the permutation:
      for (let j of i[0]) {
        // If it is not in the other array but not yet in the result:
        if (! i[1].includes(j) && ! result.includes(j)) {
          // Append it to the result.
          result.push(j);
        }
      }
    }
    // Return the union of the sets.
    return result;
  }
}
