// < 6 kyu > - Duplicate Encoder
// https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
  const arr = word.toLowerCase().split``
  const map = arr.reduce((acc, c) => (!acc[c] ? (acc[c] = 1) : (acc[c] += 1), acc), {})
  return arr.map(c => (map[c] < 2 ? '(' : ')')).join``
}