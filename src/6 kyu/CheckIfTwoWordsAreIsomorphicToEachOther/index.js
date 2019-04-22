// < 6 kyu > - Check if two words are isomorphic to each other
// https://www.codewars.com/kata/check-if-two-words-are-isomorphic-to-each-other

function isomorph(a, b) {
  const ar1 = a.split('')
  const ar2 = b.split('')
  const map = {}

  for (let i = 0; i < ar1.length; i++) {
    if (!map[ar1[i]] && !Object.values(map).includes(ar2[i])) map[ar1[i]] = ar2[i]
    if (ar2[i] === map[ar1[i]]) ar2[i] = ar1[i]
  }

  return ar1.join('') === ar2.join('')
}
