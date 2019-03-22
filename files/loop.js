'use strict';

let names = [new Buffer([68, 101, 109, 105]), new Buffer([83, 97, 109]), new Buffer([68, 97, 118, 105, 100])];

/**
 * @param  {} function(element
 * @param  {} {console.log(element.toString(
 * @param  {} ;}
 */
names.forEach(function(element) {
  console.log(element.toString());
});

