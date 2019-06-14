// < 6 kyu > - Counting Duplicates
// https://www.codewars.com/kata/counting-duplicates

function duplicateCount(text) {
  return Object.entries(
    text.toLowerCase().split``.reduce((acc, c) => (!acc[c] ? (acc[c] = 1) : (acc[c] += 1), acc), {})
  ).reduce((acc, [k, v]) => (v < 2 ? acc : acc + 1), 0)
}
