// < 5 kyu > - Super power frequency function
// https://www.codewars.com/kata/super-power-frequency-function

function frequency(arr, { compareTo, criteria } = {}) {
  if (!arr.length) return []
  return [
    ...arr
      .reduce((map, c) => {
        if (criteria) c = criteria(c)
        if (!map.has(c)) map.set(c, 1)
        else map.set(c, map.get(c) + 1)
        return map
      }, new Map())
      .entries()
  ].sort((a, b) => {
    if (compareTo) return compareTo(a[0], b[0], a[1], b[1])
    else if (typeof a[0] === 'string') return String(a[0]) > String(b[0]) ? 1 : -1
    else return a[0] - b[0]
  })
}
