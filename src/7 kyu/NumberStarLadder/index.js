// < 7 kyu > - Number-Star ladder
// https://www.codewars.com/kata/number-star-ladder

const pattern = n =>
  new Array(n)
    .fill(0)
    .map((c, i) => (!i ? 1 : 1 + new Array(i).fill('*').join('') + (i + 1)))
    .join('\n')
