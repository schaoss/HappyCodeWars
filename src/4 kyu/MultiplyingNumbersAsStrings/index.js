// < 4 kyu > - Multiplying numbers as strings
// https://www.codewars.com/kata/multiplying-numbers-as-strings

function multiply(a, b) {
  if (a == 0 || b == 0) return '0'
  if (a.length + b.length < 16) return ~~a * ~~b + ''

  const ar1 = a.split('').map(Number)
  const ar2 = b.split('').map(Number)

  const res = new Array(ar1.length + ar2.length).fill(0)

  for (let i = 0; i < ar1.length; i++) {
    for (let j = 0; j < ar2.length; j++) {
      let tmp = ar1[i] * ar2[j]
      res[i + j + 1] += tmp
    }
  }

  for (let i = res.length - 1; i > 0; i--) {
    res[i - 1] += ~~(res[i] / 10)
    res[i] = res[i] % 10
  }

  while (!res[0]) res.shift()
  return res.join('')
}
