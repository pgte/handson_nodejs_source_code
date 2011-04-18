var Step = require('step');

var async = function(order, callback) {
  var timeout = Math.round(Math.random() * 1000);
  setTimeout(function() {
    callback(null, order);
  }, timeout);
};

Step (
  function doAll() {
    for (var i = 0; i < 10; i ++) {
      async(i, this.parallel());
    }
  },
  function finalize(err) {
    console.log('done. arguments:');
    console.log(arguments);
  }
);