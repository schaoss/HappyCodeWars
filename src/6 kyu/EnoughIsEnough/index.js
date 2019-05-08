// < 6 kyu > - Enough is enough!
// https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times

function deleteNth(arr, n) {
  const counter = {}
  return arr.reduce((acc,c) => {
    if (!counter[c]) counter[c] = 0
    if (counter[c] < n) {
      counter[c]++
      acc.push(c)
    }
    return acc
  }, [])
}
