// Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

// Examples

// hasBad('badxx') → true
// hasBad('xbadxx') → true
// hasBad('xxbadxx') → false


function hasBad(str) {
let first =str.substring(0,3)
// let second =str.substring(1,4)
if ((first==="bad")||(second==="bad")){
    return true
}
return false
}

console.log(hasBad("xxbadxx"));