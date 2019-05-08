// < 6 kyu > - The Supermarket Queue
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

const queueTime = (arr, n) =>
  arr.length
    ? Math.max(...arr.reduce((q, c) => (q.length < n ? q.push(c) : (q[q.indexOf(Math.min(...q))] += c), q), []))
    : 0
