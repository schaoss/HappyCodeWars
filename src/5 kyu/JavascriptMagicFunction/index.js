// < 5 kyu > - Javascript Magic Function
// https://www.codewars.com/kata/55caf9ff29c318407c00001f

function MagicFunction(...argu) {
  let sum = argu
    .filter(a => !isNaN(a))
    .map(Number)
    .reduce((acc, c) => acc + c, 0)
  let func = MagicFunction.bind(this, sum)
  func.valueOf = () => sum
  return func
}