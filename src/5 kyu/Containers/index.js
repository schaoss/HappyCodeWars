// < 5 kyu > - Containers
// https://www.codewars.com/kata/5b80dea49895f71f3e00002d

const Containers = q =>
  q.split('').reduce((a, c) => {
    let i = a.findIndex(x => c <= x)
    return i > -1 ? ((a[i] = c), a) : (a.push(c), a)
  }, []).length
