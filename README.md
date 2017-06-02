# Core Algorithms

Tests and implementations for algorithms commonly used in job interviews.

Base repository for the [Core Algorithms—Classic, Numeric, and Set](http://jsdev.learnersguild.org/goals/158-Core_Algorithms-Classic_Numeric_and_Set.html) goal of (Learners Guild)[http://learnersguild.org].

(Detailed goal specifications)[https://github.com/jrpool/core-algorithms-cns/blob/master/algorithms.md]

Project Name: encouraging-aardwolf

Project Members:

[Jonathan Pool](https://github.com/jrpool)

## Notes

Any test files in which arrow function expressions could be but are not used
are written to conform with the [recommendation][mocha] that “Passing arrow
functions … to Mocha is discouraged”.

## Installation and Setup

0. These instructions presuppose that npm (https://nodejs.org/en/) is installed.

1. Clone this repository into a local directory.

2. In the local directory, install required dependencies (see package.json) by executing:

    npm i

3. In the local directory, perform the provided tests by executing:

    npm test

4. In the local directory, perform linting on the files in the `src` and `test`
directories by executing:

    npm run eslint

## Algorithms:

```
=== Classic
fizzBuzz.js
isPalindrome.js
makeChange.js
=== Numeric
collatzConjecture.js
factorial.js
fibonacci.js
=== Set
setComplement.js
setIntersection.js
setSymmetricDifference.js
setUnion.js
```

## Usage and Examples

Example of portion of output from `npm test`:

```
isPalindrome
  ✓ is a function
  valid arguments
    ✓ true when given an empty string
    ✓ true when given a length-1 palindrome
    ✓ true when given a simple even-length palindrome
    ✓ true when given a simple odd-length palindrome
    ✓ true when given a cased even-length palindrome
    ✓ true when given a cased odd-length palindrome
    ✓ true when given a punctuated palindrome
    ✓ true when given a spaced palindrome
    ✓ true when given a palindrome containing digits
    ✓ true when given a palindrome containing digits
    ✓ false when given a nonpalindrome
    ✓ true when given a huge palindrome
  invalid arguments
    ✓ undefined when given no argument
    ✓ undefined when given multiple arguments
    ✓ undefined when given a number
    ✓ undefined when given an array
    ✓ undefined when given an object
```

## Resources

[npm]: https://www.npmjs.com/
[npm-documentation]: https://www.npmjs.com/package/documentation
[mocha]: https://mochajs.org/#arrow-functions
