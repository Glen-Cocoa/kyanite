import add from './add'

/**
 * @name mean
 * @since v0.1.0
 * @category Number
 * @sig [Number] -> Number
 * @description Gets the average from a given array of numbers
 * @param  {Array} x An array of numbers to add together
 * @return {Number} Returns the mean avg of the numbers
 *
 * @example
 * mean([1, 2, 3, 2]) // => 2
 * mean([]) // => 0
 * mean() // => 0
 */
const mean = (x = []) => {
  if (!x.length) {
    return 0
  }

  return x.reduce(add, 0) / x.length
}

export default mean
