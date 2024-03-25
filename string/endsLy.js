// Given a string, return true if it ends in "ly".

// Examples

// endsLy('oddly') → true
// endsLy('y') → false
// endsLy('oddl') → false



function endsLy(str) {
  if (
    str.charAt(str.length - 1) === "y" &&
    // str.charAt(str.length - 2) === "l"
  ) {
    return true;
  }
  return false;
}
console.log(endsLy("oddl"));