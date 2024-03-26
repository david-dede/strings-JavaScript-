// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

// Examples

// lastChars('last', 'chars') → ls
// lastChars('yo', 'java') → ya
// lastChars('hi', '') → h@


function lastChars(a, b) {
let start = a.charAt(0)
// let end =b.charAt(b.length-1)
if(a.length===0){
    start="@"
}
if (b.length === 0) {
  end = "@";
}
return start+end
}
console.log(lastChars("hi", ""));
