// < 6 kyu > - Build Tower
// https://www.codewars.com/kata/build-tower/train/javascript

const towerBuilder = n =>
  new Array(n).fill(0).map((c, i) => ' '.repeat(n - i - 1) + '*'.repeat(2 * (i + 1) - 1) + ' '.repeat(n - i - 1))
