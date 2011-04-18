(function schedule() {
  setTimeout(function() {
    console.log('Hello World!');
    schedule();
  }, 1000);
})();