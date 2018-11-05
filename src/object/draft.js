import _curry2 from '../_internals/_curry2'
import _assocǃ from '../_internals/_assocǃ'

/**
 * @name draft
 * @since v0.6.0
 * @category Object
 * @sig Function (a -> b) -> Object { k: v }
 * @description Runs a provided function against all of the values that are within the provided object
 * @param {Function} fn The Function we want to apply to all of the data values
 * @param {Object} obj The object to apply our functions too
 * @return {Object} A new object with the updated data from our applied function
 * @example
 * draft(x => x * 2, { a: 1, b: 2, c: 3 }) // => { a: 2, b: 4, c: 6 }
 *
 * // It's also curried
 *
 * const d = draft(x => x * 2)
 *
 * d({ a: 1, b: 2, c: 3 }) // => { a: 2, b: 4, c: 6 }
 */
const draft = (fn, obj) =>
  Object.keys(obj).reduce((acc, key) =>
    _assocǃ(acc, key, fn(obj[key])), {})

export default _curry2(draft)
