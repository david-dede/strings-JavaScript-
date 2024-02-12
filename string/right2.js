// Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

// Examples

// right2('Hello') → loHel
// right2('java') → vaja
// right2('Hi') → Hi


function right2(str) {
let end =str.substring(str.length-2)

let start =str.substring(0,str.length-2)
return end+start;
}
console.log(right2("Hi"));