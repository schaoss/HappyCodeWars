// < 4 kyu > - Dependency Injection
// https://www.codewars.com/kata/dependency-injection

var DI = function(deps) {
  this.deps = deps
}

DI.prototype.inject = function(func) {
  let inj = func
    .toString()
    .match(/\((.*)\)/)[1]
    .split(',')
    .reduce((acc, c) => (c ? (acc.push(this.deps[c.trim()]), acc) : acc), [])
  return () => func(...inj)
}
