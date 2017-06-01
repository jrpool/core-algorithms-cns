/*
  Function declaration for makeChange and export statement making that
  function the default export from this module.
  Preconditions:
    0. The argument count is 1.
    1. Argument 0 is an object with properties price and amountGiven.
    2. The value of price is a nonnegative integer.
    3. The value of amountGiven is an integer no smaller than price.
*/
export default function makeChange(amounts) {
  // If the arguments are valid:
  if (
    arguments.length === 1
    && amounts !== undefined
    && amounts !== null
    && typeof amounts === 'object'
    && amounts.hasOwnProperty('price')
    && amounts.hasOwnProperty('amountGiven')
    && Object.keys(amounts).length === 2
    && typeof amounts.price === 'number'
    && typeof amounts.amountGiven === 'number'
    && amounts.price >= 0
    && amounts.amountGiven >= amounts.price
    && amounts.amountGiven !== Infinity
    && Math.ceil(amounts.price) === Math.floor(amounts.price)
    && Math.ceil(amounts.amountGiven) === Math.floor(amounts.amountGiven)
  ) {
    // Identify an array of names and values of denominations.
    const coinTypes = [
      ['dollars', 100],
      ['half-dollars', 50],
      ['quarters', 25],
      ['dimes', 10],
      ['nickels', 5],
      ['pennies', 1]
    ];
    // Initialize the amount to be returned that has not yet been allocated.
    let remainingChange = amounts.amountGiven - amounts.price;
    // Initialize an object containing the components of the change.
    let changeCoins = {
      'dollars': 0,
      'half-dollars': 0,
      'quarters': 0,
      'dimes': 0,
      'nickels': 0,
      'pennies': 0
    };
    // For each denomination, in descending order of size:
    for (let i = 0; i < coinTypes.length; i++) {
      // If there is no more change to return:
      if (remainingChange === 0) {
        // Stop calculating.
        break;
      }
      // Identify its value.
      const thisValue = coinTypes[i][1];
      // Identify the count of coins of the denomination to return.
      const thisCount = Math.floor(remainingChange / thisValue);
      // Identify the amount those coins constitute.
      const thisAmount = thisCount * thisValue;
      // Amend the object to specify the count of those coins.
      changeCoins[coinTypes[i][0]] = thisCount;
      // Amend the remaining amount to be returned.
      remainingChange -= thisAmount;
    }
    // Return the object.
    return changeCoins;
  }
}
