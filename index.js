'use strict';

const fs = require('fs');
const util = require('util');
let write = util.promisify(fs.writeFile);

function createLoopJS(create) {
  write(`${__dirname}/files/loop.js`, create)
    .then(() => {
      console.log('Created loop.js in the files folder');
    });
}
let loopJSCreate = Buffer.from(`'use strict';
  let names = ['Sam', 'Demi', 'David'];
  names.forEach(name => console.log(name));
`);

createLoopJS(loopJSCreate);

// ************************************
//          Assignment 2
// ************************************


let articleStart = Buffer.from('<article>');
let articleEnd = Buffer.from('</article>');
let h2Start = Buffer.from('<h2>');
let h2End = Buffer.from('</h2>');
let pStart = Buffer.from('<p>');
let pEnd = Buffer.from('</p>');

function readIt(){
  fs.readFile('./files/pair-programming.txt', (err, data) => {
    console.log(data);
    if (err) {throw err;}
    // data = (articleStart +h2Start) + (data += articleEnd);
    let temp = 0;
    let arr = [];
    for(let i = 0; i < data.length; i++){
      if(data[i] === 10){
      // console.log(temp, i);
        let bufferLineBreak = data.slice(temp, i);
        temp = i;
        if(bufferLineBreak.length < 40 && bufferLineBreak.length > 1){
          arr.push(Buffer.from(bufferLineBreak = h2Start + (bufferLineBreak += h2End)));
        } else {
          arr.push(Buffer.from(bufferLineBreak = pStart + (bufferLineBreak += pEnd))); 
        }
      }
    }
    arr.push(articleEnd);
    arr.unshift(articleStart);
    let newBuff = Buffer.concat(arr);
    write(`${__dirname}/files/pair-programming.html`, newBuff)
      .then(() => {
        console.log('Created pair-programming.html in the files folder');
      });
  });
}

readIt();

