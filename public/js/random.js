function NotAConstrctor() {
  if (this instanceof NotAConstrctor) {
    console.error('NotAConstrctor is not a constructor');
    return null;
  } else {
    console.log('this is called');
    return 'hi there please dont use new with me';
  }
}

let test = NotAConstrctor();
console.log(test);

let newTest = new NotAConstrctor();
console.log(newTest);

// let sym1 = new Symbol('test');
// console.log(sym1);
