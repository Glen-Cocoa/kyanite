/**
 * A transformer wrapper for transducers
 * @private
 * @param {Function} fn The function to wrap
 * @return {Object} The wrapped function
 */
const _xwrap = fn => {
  const res = {}

  res['@@transducer/result'] = acc => acc
  res['@@transducer/step'] = (x, acc) => fn(x, acc)

  return res
}

export default _xwrap
