![CF](http://i.imgur.com/7v5ASc8.png) LAB Buffers - File Transformers
=================================================

## Project Name
Buffers - File Transformers

### Author:
Alexander White

### Links and Resources
* [PR](https://github.com/alex-white-401-advanced-javascript/lab-04/pull/3/)

### Modules
#### `index.js`
##### Exported Values and Methods

###### `function createLoopJS(create) -> loop.js`
* This function generates a file called `loop.js` in the `/files` directory. It does this by generating the writing to said file with  buffer.

###### `readIt() -> pair-programming.html`
* This function creates a file called `pair-programming.html` in the `/files` directory. It does this by reading in a file called `pair-programming.txt` as a buffer. Then it looks for line breaks and checks its length being smaller than 40. It then adds to those buffers with HTML tags dependent on their length and pushes them to an array. Once the array is done populating, a concated array gets written to `pair-programing.html`.


### Setup
#### Running the app
* `node index.js` - run to generate both loop.js and pair-programming.html
* `node files/loop.js` - run to console.log the names from the created array in generated loop.js
  
#### Tests
* How do you run tests? `npm test`
* What assertions were made?
* What assertions need to be / should be made?

