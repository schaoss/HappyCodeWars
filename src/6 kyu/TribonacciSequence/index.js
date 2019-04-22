// < 6 kyu > - Tribonacci Sequence
// https://www.codewars.com/kata/tribonacci-sequence

function tribonacci(s, n) {
  while (s.length < n) s.push(s[s.length - 3] + s[s.length - 2] + s[s.length - 1])
  return s.slice(0, n)
}
