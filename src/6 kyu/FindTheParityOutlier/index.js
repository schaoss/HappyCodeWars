// < 6 kyu > - Find The Parity Outlier
// https://www.codewars.com/kata/find-the-parity-outlier

const findOutlier = n => {
  const arr = n.map(c => Math.abs(c) % 2)
  if (arr[0] === arr[1]) {
    return n[arr.findIndex(c => c === 1 - arr[0])]
  } else if (arr[0] === arr[2]) {
    return n[1]
  } else if (arr[1] === arr[2]) {
    return n[0]
  }
}
