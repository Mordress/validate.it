/*
 * Any assert is a function of one or more arguments:
 *   *base - the value to validate
 *   *ags - other arguments used in validation process
 * 
 * It should return nothing if assertsment pass. And other values if not.
 *   should return meaningfull object instead of simple string:
 *     'longer than 5 symbols' -> {length: 10, max: 5, message: 'longer than 5 symbols'}
 *     'noLatin symbol found' -> {symbol: 'Ы', pos: 3, message: 'noLatin symbol found'}
 *   simple strings will be converted into object with message property:
 *     'no noumbers found' -> {mesage: 'no noumbers found'}
 *   other results will be converted into empty object:
 *     true -> {}
 *     [1, 2, 3] -> {}
 *
 * Feel free to design your error objects. Just use common sense.
 * Try to provide message string which can be displayed to user
 */

// This template assert passes if no arguments provided. Fails otherwise.
module.exports = (base, ...args) => {

  // Return error if at least one argumets provided
  if (args.length > 0)
    return {base, args}; // Design of this error object is unique. You don't need to reproduce it

  // "Validation" pass - return nothing
  return;
};