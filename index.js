'use strict';

var fs = require('fs');

let articleStart = Buffer.from('<article>');
let articleEnd = Buffer.from('</article');
let h2Start = Buffer.from('<h2>');
let h2End = Buffer.from('</h2>');
let h3Start = Buffer.from('<h3>');
let h3End = Buffer.from('</h3>');
let ulStart = Buffer.from('<ul>');
let ulEnd = Buffer.from('</ul>');
let liStart = Buffer.from('<li>');
let liEnd = Buffer.from('</li>');
let newLine = Buffer.from('\n');


fs.readFile('./files/pair-programming.txt', (err, data) => {
  if (err) throw err;
  // for (let char of data){
  //   console.log(String.fromCharCode(char) );
  // }
  for(let i = 0; i < data.length; i++){
    if(data[i] === 10){
      console.log(data[i]);
      // console.log(String.fromCharCode(char) );
    } else{
      // console.log(data[i].toString() );
    }
  }
});

