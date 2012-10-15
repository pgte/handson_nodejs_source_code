function myFilter(collection, filter, map, callback) {
  var calledback = false
    , results = [];

  function done(err, result) {
    if (! calledback) {
      calledback = true;
      callback(err, result);
    }
  }

  var i = 0;
  var countdown = 0;

  collection.forEach(function(elem) {
    (function(i) {

      function next(err, passes) {
        if (err) { return done(err); }
        if (passes) {

          countdown ++;

          function mapDone(err, result) {
            if (err) { return done(err); }
            
            results[i] = result;

            if (-- countdown === 0) {
              done(null, results);
            }

          }
          
          map(elem, mapDone);
        }
      }

      filter(elem, next);
    }(i));

    i ++;
  });  
}

module.exports = myFilter;