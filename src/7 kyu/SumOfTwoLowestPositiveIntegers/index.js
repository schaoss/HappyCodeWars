// < 7 kyu > - Sum of two lowest positive integers
// https://www.codewars.com/kata/sum-of-two-lowest-positive-integers

function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .splice(0, 2)
    .reduce((a, b) => a + b)
}
