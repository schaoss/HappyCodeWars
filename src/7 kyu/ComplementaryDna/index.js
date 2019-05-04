// < 7 kyu > - Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function DNAStrand(dna){
  return Array.prototype.map.call(dna, c => {
    if (c === 'A') return 'T'
    if (c === 'T') return 'A'
    if (c === 'C') return 'G'
    if (c === 'G') return 'C'
  }).join('')
}