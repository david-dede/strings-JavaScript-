// Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.

// Examples

// twoChar('java', 0) → ja
// twoChar('java', 2) → va
// twoChar('java', 3) → ja


function twoChar(str, index) {
  let sum = index + 2;
  if (str.length >= sum) {
    if (index < 1) {
      return str.substring(0, 2);
    }
    return str.substring(index, index + 2);
  }

  return str.substring(0, 2);
}
console.log(twoChar("java", 3));