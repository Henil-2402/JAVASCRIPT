let r=/to/
let s="hi to all hello to world"
console.log(r.test(s))
console.log(r.exec(s))
console.log(s.search(r))
console.log(s.match(r))

r=/to/g
console.log(s.match(r))
s="hi to all hello TO world"
console.log(s.match(r))

r=/to/gi
console.log(s.match(r))