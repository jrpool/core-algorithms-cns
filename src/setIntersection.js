/*
  Function declaration for setIntersection and export statement making that
  function the default export from this module.
  Preconditions:
    0. The argument count is 2.
    1. Both arguments are arrays.
*/
export default function setIntersection(a, b) {
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
    // For each element of the first array:
    for (let i of a) {
      // If it is in the second array but not yet in the result:
      if (b.includes(i) && ! result.includes(i)) {
        // Append it to the result.
        result.push(i);
      }
    }
    // Return the intersection of the sets.
    return result;
  }
}
