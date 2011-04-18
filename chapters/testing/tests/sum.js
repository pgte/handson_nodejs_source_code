require('should');

var sum = require('../lib/sum');

module.exports.testSumToZero = function() { 
  sum(0, 5).should.equal(5); 
};
module.exports.testSumToZero2 = function() { 
  sum(5, 0).should.equal(5); 
};
module.exports.someSums = function() { 
  sum(1, 1).should.equal(2); 
  sum(1, 2).should.equal(3); 
  sum(2, 1).should.equal(3); 
  sum(10, 120).should.equal(130); 
};
