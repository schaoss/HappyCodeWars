// < 6 kyu > - Braking well
// https://www.codewars.com/kata/braking-well

// function dist(v, mu) {
//   let vs = v / 3.6
//   return vs + (vs ** 2 / 2) * mu * 9.81
// }

const dist = (v, mu) => v / 3.6 + (v / 3.6) ** 2 / (2 * mu * 9.81)

// function speed(d, mu) {
//   let a = 1,
//     b = 2 * mu * 9.81,
//     c = -d * b,
//     delta = b ** 2 - 4 * a * c,
//     x1 = ((-b + delta ** 0.5) / 2) * a
//     return x1 * 3.6
// }

const speed = (d, mu) => (3.6 * (-2 * mu * 9.81 + ((2 * mu * 9.81) ** 2 + 4 * d * 2 * mu * 9.81) ** 0.5)) / 2
