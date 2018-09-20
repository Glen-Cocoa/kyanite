/**
 * @name range
 * @since v0.1.0
 * @category Function
 * @sig Number a -> Number b -> [Number a...b]
 * @description Create an array range from start to end
 * @param  {Number} from Starting number for the range
 * @param  {Number} to Number to end on for the range
 * @return {Array} Returns an array of numbers consisting of the range
 *
 * @example
 * const test = range(3, 7) // => [3, 4, 5, 6]
 * const test = range(3) // => [0, 1, 2]
 */
const range = (from = 0, to = 0) => {
  if (isNaN(from) || (to && isNaN(to))) {
    throw new TypeError('Arguments should be Numbers')
  }

  const result = []
  let stop = to
  let start = from

  if (!to) {
    start = 0
    stop = from
  }

  while (start < stop) {
    result.push(start)
    start += 1
  }

  return result
}

export default range
