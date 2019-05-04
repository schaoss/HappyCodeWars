// < 4 kyu > - Born to be chained
// https://www.codewars.com/kata/born-to-be-chained

function chain(fns) {
  return new ChainFunc()

  function ChainFunc(called = []) {
    this.called = called
    this.execute = function() {
      return this.called.reduce((acc, [f, argus]) => {
        if (acc === null) return fns[f](...argus)
        return fns[f](acc, ...argus)
      }, null)
    }

    Object.keys(fns).forEach(f => {
      this[f] = (...argus) => new ChainFunc([...called, [f, argus]])
    })
  }
}
