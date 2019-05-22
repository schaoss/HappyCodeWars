// < 5 kyu > - Maximum subarray sum
// https://www.codewars.com/kata/maximum-subarray-sum

const maxSequence = arr => {
  if (!arr.length || arr.every(c => c < 0)) return 0
  const sums = []
  for (let d = 1; d <= arr.length; d++) {
    for (let i = 0; i < arr.length; i++) {
      if (i + d > arr.length) break
      sums.push(arr.slice(i, i + d).reduce((a, c) => a + c))
    }
  }

  return Math.max(...sums)
}
