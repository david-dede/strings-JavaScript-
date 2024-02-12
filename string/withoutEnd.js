// Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

// Examples

// withoutEnd('Hello') → ell
// withoutEnd('java') → av
// withoutEnd('coding') → odin

function withoutEnd(str) {
  let length = str.length;
  let secondToTheEnd = length - 1;
  let result = str.substring(1, secondToTheEnd);
  return result;
}
console.log(withoutEnd("coding"));
