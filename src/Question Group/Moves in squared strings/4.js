// < 6 kyu > - Moves in squared strings (IV)
// https://www.codewars.com/kata/56dbf59b0a10feb08c000227

const diag2Sym = s => {
  const arr = s.split('\n').map(c => c.split(''))
  const res = helper(arr, 3)
  return res.map(r => r.join('')).join('\n')
}

const rot90Counter = s => {
  const arr = s.split('\n').map(c => c.split(''))
  const res = helper(arr, 4)
  return res.map(r => r.join('')).join('\n')
}

const selfieDiag2Counterclock = s => {
  const arr = s.split('\n').map(c => c.split(''))
  const diag2 = helper(arr, 3)
  const counterclock = helper(arr, 4)
  return arr.map((c, i) => c.concat('|', diag2[i], '|', counterclock[i]).join('')).join('\n')
}

const helper = (arr, type) => {
  if (!type) return arr
  const l = arr.length
  const res = new Array(l).fill(0).map(() => [])
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      switch (type) {
        case 1: // diag1
          res[j][i] = arr[i][j]
          break
        case 2: // rot90
          res[j][l - i] = arr[i][j]
          break
        case 3: // diag2
          res[l - 1 - j][l - i] = arr[i][j]
          break
        case 4: // rot90Counter
          res[l - 1 - j][i] = arr[i][j]
          break
      }
    }
  }
  return res
}
const oper = (f, s) => (f && s ? f(s) : '')
