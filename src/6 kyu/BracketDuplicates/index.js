// < 6 kyu > - Bracket Duplicates
// https://www.codewars.com/kata/5411c4205f3a7fd3f90009ea

const stringParse = s =>
  typeof s !== 'string'
    ? 'Please enter a valid string'
    : s.length < 3
    ? s
    : s
        .split('')
        .reduce((acc, c, i, arr) => (c === arr[i - 1] ? [...acc, c] : [...acc, '|', c]))
        .join('')
        .split('|')
        .map(c => (c.length > 2 ? `${c.substring(0, 2)}[${c.substring(2)}]` : c))
        .join('')
