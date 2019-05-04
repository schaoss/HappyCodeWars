// < 4 kyu > - Connect Four
// https://www.codewars.com/kata/connect-four-1

function whoIsWinner(input) {
  const grid = new Array(7).fill(0).map(() => [])
  let winner = 'Draw'

  for (let i = 0; i < input.length; i++) {
    let [char, color] = input[i].split('_')
    let row = char.charCodeAt() - 65

    // dropItem
    grid[row].push(color)
    // check winner
    if (i > 6 && check(row, color)) {
      winner = color
      break
    }
  }
  return winner

  function check(i) {
    let j = grid[i].length - 1
    if (checkV() || checkH() || checkS() || checkRS()) {
      return true
    }
    return false

    function checkV() {
      if (j > 2) {
        return grid[i][j] === grid[i][j - 1] && grid[i][j - 1] === grid[i][j - 2] && grid[i][j - 2] === grid[i][j - 3]
      }
      return false
    }

    function checkH() {
      for (let k = 0; k < 4; k++) {
        if (
          grid[k][j] &&
          grid[k + 1][j] &&
          grid[k + 2][j] &&
          grid[k + 3][j] &&
          grid[k][j] === grid[k + 1][j] &&
          grid[k + 1][j] === grid[k + 2][j] &&
          grid[k + 2][j] === grid[k + 3][j]
        ) {
          return true
        }
      }
      return false
    }

    function checkS() {
      for (let x = i - Math.min(i, j), y = j - Math.min(i, j); x < 4 && y < 3; x++, y++) {
        if (
          grid[x][y] &&
          grid[x + 1][y + 1] &&
          grid[x + 2][y + 2] &&
          grid[x + 3][y + 3] &&
          grid[x][y] === grid[x + 1][y + 1] &&
          grid[x + 1][y + 1] === grid[x + 2][y + 2] &&
          grid[x + 2][y + 2] === grid[x + 3][y + 3]
        ) {
          return true
        }
      }
      return false
    }

    function checkRS() {
      for (let x = i + Math.min(6 - i, j), y = j - Math.min(6 - i, j); x > 2 && y < 3; x--, y++) {
        if (
          grid[x][y] &&
          grid[x - 1][y + 1] &&
          grid[x - 2][y + 2] &&
          grid[x - 3][y + 3] &&
          grid[x][y] === grid[x - 1][y + 1] &&
          grid[x - 1][y + 1] === grid[x - 2][y + 2] &&
          grid[x - 2][y + 2] === grid[x - 3][y + 3]
        ) {
          return true
        }
      }
      return false
    }
  }
}
