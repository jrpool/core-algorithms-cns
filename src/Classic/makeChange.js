// Function to validate the arguments.
const isValid = (args) => {
  let arg;
  return args.length === 1
    && (arg = args[0]) !== undefined
    && arg !== null
    && typeof arg === 'object'
    && arg.hasOwnProperty('price')
    && arg.hasOwnProperty('amountGiven')
    && Object.keys(arg).length === 2
    && typeof arg.price === 'number'
    && typeof arg.amountGiven === 'number'
    && arg.price >= 0
    && arg.amountGiven >= arg.price
    && arg.amountGiven !== Infinity
    && Math.ceil(arg.price) === Math.floor(arg.price)
    && Math.ceil(arg.amountGiven) === Math.floor(arg.amountGiven);
};

/*
  Function and default export declaration for makeChange.
  Enforced argument requirements:
    0. The argument count is 1.
    1. Argument 0 is an object with properties price and amountGiven.
    2. The value of price is a nonnegative integer.
    3. The value of amountGiven is an integer no smaller than price.
*/
export default function makeChange (...args) {
  // If the arguments are valid:
  if (isValid(args)) {
    // Identify the true argument.
    const amounts = args[0];
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
