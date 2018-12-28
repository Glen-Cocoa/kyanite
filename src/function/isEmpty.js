import empty from './empty'

/**
 * @name isEmpty
 * @deprecated since v0.11.0 use empty
 * @see empty
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> Boolean
 * @description Determines if the entered value is empty or not
 * @param  {Any} x Value to check against
 * @return {Boolean} Returns the boolean after running our check
 *
 * @example
 * import { isEmpty } from 'kyanite'
 *
 * isEmpty([]) // => true
 * isEmpty({}) // => true
 * isEmpty('') // => true
 * isEmpty(NaN) // => true
 * isEmpty(null) // => true
 * isEmpty(undefined) // => true
 * isEmpty(true) // => true
 * isEmpty(false) // => true
 */
const isEmpty = empty

export default isEmpty
