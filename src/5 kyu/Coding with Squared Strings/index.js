// < 5 kyu > - Coding with Squared Strings
// https://www.codewars.com/kata/56fcc393c5957c666900024d

const code = s => {
  if (!s) return ''
  const n = Math.ceil(Math.sqrt(s.length))
  const reg = new RegExp(`.{1,${n}}`, 'g')
  const a = s.match(reg).map(c => c.split(''))

  return new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(String.fromCharCode(11)))
    .map((r, i) => r.map((x, j) => (a[n - j - 1] && a[n - j - 1][i] ? a[n - j - 1][i] : x)).join(''))
    .join('\n')
}

const decode = s => {
  if (!s) return ''
  const a = s.split('\n').map(c => c.split(''))
  const n = a.length

  return new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0))
    .map((r, i) => r.map((x, j) => (a[j][n - 1 - i] === String.fromCharCode(11) ? ' ' : a[j][n - 1 - i])).join(''))
    .join('')
    .trim()
}
