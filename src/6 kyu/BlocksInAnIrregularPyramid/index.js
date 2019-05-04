// < 6 kyu > - Blocks in an Irregular Pyramid
// https://www.codewars.com/kata/blocks-in-an-irregular-pyramid

function numBlocks(w, l, h) {
  // return h > 1n ? w * l + numBlocks(w + 1n, l + 1n, h - 1n) : w * l

  // let sum = w * l * h
  // while (h > 1) {
  //   sum += (w++ + l++ + 1n) * h
  // }
  // return sum

  return new Array(h).fill(0).reduce((s, c, i) => s + w++ * l++)
}
