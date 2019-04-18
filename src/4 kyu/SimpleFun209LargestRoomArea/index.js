// < 4 kyu > - Simple Fun #209: Largest Room Area
// https://www.codewars.com/kata/simple-fun-number-209-largest-room-area

const largestRoomArea = rooms => {
  const m = rooms.length
  const n = rooms[0].length
  const isChecked = new Array(m).fill(0).map(() => new Array(n).fill(0))
  const checkAround = (i, j) =>
    isChecked[i][j] || rooms[i][j]
      ? 0
      : ((isChecked[i][j] = 1),
        [
          i > 0 ? checkAround(i - 1, j) : 0,
          i < m - 1 ? checkAround(i + 1, j) : 0,
          j > 0 ? checkAround(i, j - 1) : 0,
          j < n - 1 ? checkAround(i, j + 1) : 0
        ].reduce((acc, c) => acc + c, 1))

  let best = 0

  rooms.forEach((r, i) => {
    r.forEach((t, j) => {
      if (!isChecked[i][j]) {
        best = Math.max(best, checkAround(i, j))
      }
    })
  })
  return best
}
