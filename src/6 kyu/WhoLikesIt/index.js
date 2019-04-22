// < 6 kyu > - Who likes it?
// https://www.codewars.com/kata/who-likes-it

const likes = ([n1, n2, ...n3]) =>
  n1
    ? n2
      ? n3.length > 0
        ? n3.length > 1
          ? `${n1}, ${n2} and ${n3.length} others like this`
          : `${n1}, ${n2} and ${n3[0]} like this`
        : `${n1} and ${n2} like this`
      : `${n1} likes this`
    : 'no one likes this'
