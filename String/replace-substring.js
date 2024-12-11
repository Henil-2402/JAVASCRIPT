//replace() will replace only first occurences.
//replaceAll() will replace all the occurences.

//delete any substing replace with empty string.

let s="hello to all"
console.log(s.replace("hello","hii"))
console.log(s.replace("ll","@@@"))
console.log(s.replaceAll("ll","@@@"))
console.log(s.replaceAll("ll",""))
console.log(s.replace("welcome","hi"))