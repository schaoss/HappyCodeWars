// < 7 kyu > - Moves in squared strings (I)
// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25

const vertMirror = s => s ? s.split('\n').map(r => r.split('').reverse().join('')).join('\n'): ''

const horMirror = s => s ? s.split('\n').reverse().join('\n'): ''

const oper = (f, s) => f && s ? f(s) : ''