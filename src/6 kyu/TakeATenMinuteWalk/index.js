// < 6 kyu > - Take a Ten Minute Walk
// https://www.codewars.com/kata/take-a-ten-minute-walk

const isValidWalk = w => w.length === 10 && w.reduce(count, [0, 0]).reduce((a, b) => a && b === 0, true)

const count = ([ns, we], c) => {
  if (c === 'n') return [ns + 1, we]
  if (c === 's') return [ns - 1, we]
  if (c === 'w') return [ns, we + 1]
  if (c === 'e') return [ns, we - 1]
}
