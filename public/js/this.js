/**
 * this takes the global scope when:
 * we define a function inside the function
 */
var c = {
  name: 'the c object',
  log() {
    var setName = function(newName) {
      //   this.name = newName;
      console.log('THis inside the function', this);
    };
    console.log('-->', this);
    setName.call(this);
  }
};

c.log();
