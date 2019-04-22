// < 7 kyu > - Alternate case
// https://www.codewars.com/kata/alternate-case

const alternateCase = s =>
  s
    .split('')
    .map(c =>
      c < 'A' ? c : c < 'a' ? String.fromCharCode(c.charCodeAt() + 32) : String.fromCharCode(c.charCodeAt() - 32)
    )
    .join('')
