// < 5 kyu > - Calculating with objects
// https://www.codewars.com/kata/calculating-with-objects

// class Num {
//   constructor(num) {
//     this.num = num
//   }
//   toString() {
//     return 'The number is ' + this.num
//   }
//   valueOf() {
//     return { num: this.num }
//   }
// }

Num.prototype[Symbol.toPrimitive] = function(hint) {
  return hint === 'string' ? this.num.toString() : this.valueOf().num
}
