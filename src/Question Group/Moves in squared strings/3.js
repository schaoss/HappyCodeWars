// < 6 kyu > - Moves in squared strings (III)
// https://www.codewars.com/kata/56dbeec613c2f63be4000be6

const rot90Clock = s => {
  const arr = s.split('\n').map(c => c.split(''))
  const res = helper(arr, 2)
  return res.map(r => r.join('')).join('\n')
}

const diag1Sym = s => {
  const arr = s.split('\n').map(c => c.split(''))
  const res = helper(arr, 1)
  return res.map(r => r.join('')).join('\n')
}

const selfieAndDiag1 = s => {
  const arr = s.split('\n').map(c => c.split(''))
  const diag1 = helper(arr, 1)
  return arr.map((c, i) => c.concat('|', diag1[i]).join('')).join('\n')
}

const helper = (arr, type) => {
  if (!type) return arr
  const res = new Array(arr.length).fill(0).map(() => [])
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (type === 1) res[j][i] = arr[i][j]
      else if (type === 2) res[j][arr.length - i] = arr[i][j]
    }
  }
  return res
}
const oper = (f, s) => (f && s ? f(s) : '')
