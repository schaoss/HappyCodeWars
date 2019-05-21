// < 4 kyu > - Differentiate a polynomial
// https://www.codewars.com/kata/differentiate-a-polynomial-1

function differentiate(eq, p) {
  return `+${eq}`
    .replace(/(-|\+)x/g, (_, p1) => p1 + '1x')
    .replace(/-/g, '+-')
    .split('+')
    .reduce((acc, c) => {
      if (!c || !c.includes('x')) return acc
      if (!c.includes('^')) return acc + +c.split('x')[0]
      let [m, n] = c.split('x^')
      return acc + m * n * p ** (n - 1)
    }, 0)
}
