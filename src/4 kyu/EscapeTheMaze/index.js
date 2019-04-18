// < 4 kyu > - Escape the maze
// https://www.codewars.com/kata/5877027d885d4f6144000404

function escape(maze) {
  const mazeArr = maze.map(str => str.split(''))
  let checked = []

  let now = findStart()
  if (!now) return []

  let branch = []
  let result = ''
  let l = [mazeArr.length, mazeArr[0].length]

  do {
    let [i, j, face, rL] = now
    if (isEnd(i, j)) {
      return result.split('')
    }
    checkAround(i, j, face)
  } while (nextStep())

  return []

  function findStart() {
    let reg = /[>^<v]/
    let tmp = null
    mazeArr.forEach((row, i) => {
      checked.push([])
      let j = row.findIndex(c => reg.test(c))
      if (j !== -1) {
        let deg = row[j] === '^' ? 0 : row[j] === '>' ? 90 : row[j] === 'v' ? 180 : 270
        tmp = [i, j, deg, 0]
        checked[i][j] = true
      }
    })
    return tmp
  }

  function checkAround(i, j, face) {
    if (i > 0) check(i - 1, j, face, 0)
    if (i + 1 < l[0]) check(i + 1, j, face, 180)
    if (j > 0) check(i, j - 1, face, 270)
    if (j + 1 < l[1]) check(i, j + 1, face, 90)
  }

  function check(i, j, face, newFace) {
    const rL = result.length
    if (checked[i][j]) return 0
    if (mazeArr[i][j] === '#') checked[i][j] = true
    else if (mazeArr[i][j] === ' ') branch.push([i, j, newFace, checkStep(face, newFace), rL])
  }

  function checkStep(face, newFace) {
    let diff = face - newFace
    return (() => {
      switch (diff) {
        case 0:
          return 'F'
        case 90:
        case -270:
          return 'LF'
        case 180:
        case -180:
          return 'BF'
        case 270:
        case -90:
          return 'RF'
      }
    })()
  }

  function nextStep() {
    let next = branch.pop()
    if (!next) return false

    let [i, j, face, step, rL] = next
    checked[i][j] = true
    now = [i, j, face, rL]
    result = result.substring(0, rL) + step
    return true
  }

  function isEnd(i, j) {
    return i === 0 || i === l[0] - 1 || j === 0 || j === l[1] - 1
  }
}
