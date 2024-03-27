// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

// Examples

// nonStart('Hello', 'There') → ellohere
// nonStart('java', 'code') → avaode
// nonStart('shotl', 'java') → hotlava


function nonStart(a, b) {
let aa=a.substring(1)
let bb = b.substring(1);
return aa+bb
}
console.log(nonStart("shotl", "java"));

