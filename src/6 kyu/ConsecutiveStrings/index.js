// < 6 kyu > - Consecutive strings
// https://www.codewars.com/kata/consecutive-strings

function longestConsec(arr, k) {
  const n = arr.length

  if (k <= 0 || !n || k > n) return ''
  if (k === n) return arr.join('')

  const index = arr.reduce(
    (acc, c, i) => {
      if (i + k <= n) {
        const sum = arr.slice(i, i + k).reduce((s, str) => s + str.length, 0)
        if (sum > acc[1]) return [i, sum]
      }
      return acc
    },
    [-1, -1]
  )[0]

  return arr.slice(index, index + k).join('')
}
