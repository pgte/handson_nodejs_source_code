var timeoutA = setTimeout(function() {
  console.log('timeout A');
}, 2000);

var timeoutB = setTimeout(function() {
  console.log('timeout B');
  clearTimeout(timeoutA);
}, 1000);