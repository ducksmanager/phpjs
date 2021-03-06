function mt_rand(min, max) {
  // From: http://phpjs.org/functions
  // +   original by: Onno Marsman
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // +   input by: Kongo
  // *     example 1: mt_rand(1, 1);
  // *     returns 1: 1
  var argc = arguments.length;
  if (argc === 0) {
    min = 0;
    max = 2147483647;
  }
  else if (argc === 1) {
    throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
  }
  else {
    min = parseInt(min, 10);
    max = parseInt(max, 10);
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
