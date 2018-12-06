import _curry2 from '../_internals/_curry2'

/**
 * @name gt
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> a -> Boolean
 * @description Checks if a value is greater than the other
 * @param {Any} a Value to determine if it is greater than the other
 * @param {Any} b Value to compare to see if it is less than the other
 * @return {Boolean} Based on the outcome of the logic a Boolean
 * @example
 * import { gt } from 'kyanite'
 *
 * gt(2, 1) // => true
 * gt('b', 'a') // => true
 *
 * // It's also curried
 *
 * const g = gt(2)
 *
 * g(1) // => true
 * g(2) // => false
 */
const gt = (a, b) => b > a

export default _curry2(gt)
