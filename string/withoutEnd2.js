// Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

// Examples

// withoutEnd2('Hello') → ell
// withoutEnd2('abc') → b
// withoutEnd2('ab') →



function withoutEnd2(str) {
  if (str.length > 1) {
    result = str.substring(1, str.length - 1);
    return result;
  }
  return "";
}
console.log(withoutEnd2("ab"));