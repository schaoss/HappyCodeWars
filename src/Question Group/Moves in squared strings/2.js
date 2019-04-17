// < 6 kyu > - Moves in squared strings (II)
// https://www.codewars.com/kata/56dbe7f113c2f63570000b86

const rot = s => s ? s.split('').reverse().join('') : ''

const selfieAndRot = s => 
  s ? s.map(r => r.padEnd(r.length * 2,'.')).concat(rot(s.map(r => r.padEnd(r.length * 2,'.')))) : ''

const oper = (f, s) => f && s ? f(s) : ''