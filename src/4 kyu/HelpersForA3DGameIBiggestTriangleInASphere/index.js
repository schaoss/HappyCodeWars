// < 4 kyu > - Helpers For a 3DGame I: Biggest Triangle in a Sphere
// https://www.codewars.com/kata/helpers-for-a-3dgame-i-biggest-triangle-in-a-sphere

const biggestTriangInt = (list, o, r) => (
  (res = list
    .filter(x => ((l = length(vector(x, o))), l < r && l > 10 ** -10))
    .reduce(
      (acc, c, i, arr) => {
        let [count, best, triangleArr] = acc
        for (let j = i + 1; j < arr.length - 1; j++) {
          for (let k = j + 1; k < arr.length; k++) {
            count++
            let a = area(vector(c, arr[j]), vector(c, arr[k]))
            if (a === best) triangleArr.push([c, arr[j], arr[k]])
            else if (a > best) {
              best = a
              triangleArr = [[c, arr[j], arr[k]]]
            }
          }
        }
        return [count, best, triangleArr]
      },
      [0, 0, []]
    )),
  res[0] === 0 ? [] : res[2].length === 1 ? [res[0], res[1], res[2][0]] : res
)

const vector = (p1, p2) => p1.map((x, i) => x - p2[i])
const length = v => v.reduce((a, i) => a + i ** 2, 0) ** 0.5
const area = ([x1, x2, x3], [y1, y2, y3]) => length([x2 * y3 - x3 * y2, x3 * y1 - x1 * y3, x1 * y2 - x2 * y1]) / 2
