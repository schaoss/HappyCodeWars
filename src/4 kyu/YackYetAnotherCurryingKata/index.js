// < 4 kyu > - YACK (Yet Another Currying Kata)
// https://www.codewars.com/kata/yack-yet-another-currying-kata

function yack(fn, ...argus) {
  if (argus.length < fn.length) return (...params) => yack(fn, ...argus, ...params)
  else return fn(...argus)
}
