var beNice = (function() {
  'use strict';

  // My public methods will get added to this object
  var publicAPIs = {};

  // A private method
  var saySomethingNice = function(somethingNice) {
    alert(somethingNice);
  };

  // A public method
  publicAPIs.smile = function(message) {
    if (message) {
      saySomethingNice(message);
    } else {
      saySomethingNice('You make the world better just by being you!');
    }
  };

  // Return our public methods so that they can be accessed
  return publicAPIs;
})();

console.log(beNice);
