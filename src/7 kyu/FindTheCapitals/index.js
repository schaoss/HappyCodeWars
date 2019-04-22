// < 7 kyu > - Find the capitals
// https://www.codewars.com/kata/find-the-capitals-1

const capitals = w =>
  w
    .split('')
    .map((c, i) => (c < 'a' ? i : '.'))
    .filter(c => c !== '.')
