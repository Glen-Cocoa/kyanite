import factors from '../../src/number/factors'
import test from 'tape'

test('factors -- Find the factors of the provided numbers', t => {
  t.same(factors(36), [1, 2, 3, 4, 6, 9, 12, 18, 36])
  t.same(factors(-36), [1, 2, 3, 4, 6, 9, 12, 18, 36])
  t.same(factors(-1), [1])
  t.same(factors(102), [1, 2, 3, 6, 17, 34, 51, 102])
  t.same(factors(-102), [1, 2, 3, 6, 17, 34, 51, 102])
  t.same(factors(0), [])
  t.same(factors(), [])
  t.same(factors(NaN), [])
  t.end()
})
