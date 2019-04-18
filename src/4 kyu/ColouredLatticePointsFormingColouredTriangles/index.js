// < 4 kyu > - Coloured Lattice Points Forming Coloured Triangles
// https://www.codewars.com/kata/coloured-lattice-points-forming-coloured-triangles

const countColTriang = i => {
  const colors = getColors(i)
  const { sum, max } = getTriangles(colors)
  return [i.length, Object.keys(colors).length, sum, max]
}

const getColors = i =>
  i.reduce((acc, p) => {
    if (!acc[p[1]]) acc[p[1]] = []
    acc[p[1]].push(p[0])
    return acc
  }, {})

const getTriangles = colors => {
  const { color, count, sum } = Object.keys(colors).reduce(
    (acc, c) => {
      const points = colors[c]
      if (points.length < 3) return acc
      const count = points.reduce((t, p, i) => {
        for (let j = i + 1; j < points.length - 1; j++) {
          for (let k = j + 1; k < points.length; k++) {
            if (isTriangle(p, points[j], points[k])) t++
          }
        }
        return t
      }, 0)
      return count > acc.count
        ? { color: [c], count, sum: acc.sum + count }
        : count === acc.count
        ? { color: acc.color.concat(c), count: acc.count, sum: acc.sum + count }
        : { ...acc, sum: acc.sum + count }
    },
    { color: [], count: 0, sum: 0 }
  )
  const max = count === 0 ? [] : [...color.sort(), count]
  return { sum, max }
}

const isTriangle = (a, b, c) => (a[0] - b[0]) / (a[1] - b[1]) !== (b[0] - c[0]) / (b[1] - c[1])
