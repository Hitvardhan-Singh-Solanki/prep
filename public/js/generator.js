function* generate() {
  yield 8;
  yield 9;
  yield 10;
  // last value
  return 11;
}

var genobj = generate();

console.log(genobj.next());
console.log(genobj.next());
console.log(genobj.next());
console.log(genobj.next());

// Iteration example
for (var n of generate()) {
  console.log('=>', n);
}

function* generateSquareOfNNumbers() {
  let n = 0;
  while (true) {
    n++;
    yield n * n;
  }
}

var genobjNew = generateSquareOfNNumbers();

console.log(genobjNew.next().value);
console.log(genobjNew.next().value);
console.log(genobjNew.next().value);
console.log(genobjNew.next().value);
console.log(genobjNew.next().value);
console.log(genobjNew.next().value);
console.log(genobjNew.next().value);
console.log(genobjNew.next().value);
