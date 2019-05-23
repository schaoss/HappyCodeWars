// < 6 kyu > - Write Number in Expanded Form
// https://www.codewars.com/kata/write-number-in-expanded-form

function expandedForm(num) {
  return `${num}`
    .split('')
    .reduce((acc, c, i, arr) => (c !== '0' ? acc.push(c.padEnd(arr.length - i, '0')) : 0, acc), [])
    .join(' + ')
}
