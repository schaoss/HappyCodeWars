// < 7 kyu > - Unlucky Days
// https://www.codewars.com/kata/unlucky-days

const unluckyDays = y => new Array(12).fill(0).reduce((s, c, i) => (new Date(y, i, 13).getDay() === 5 ? s + 1 : s), 0)
