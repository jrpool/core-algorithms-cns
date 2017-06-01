/*
  Function to return whether the argument array has length 1 and its
  element is a positive finite integer.
*/
export default function isNaturalNumber(args) {
  let arg;
  return args.length === 1
    && typeof (arg = args[0]) === 'number'
    && arg > 0
    && arg !== Infinity
    && Math.ceil(arg) === Math.floor(arg);
}
