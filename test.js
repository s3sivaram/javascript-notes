// Object reference
// if the below program is run in browser, and the first console output is looked upon before the second console output gets executed, then the  output will be a:1.
//  if the first console output is looked upon after the execution of second console output, then the output will be a:2.

let arr = new Array(3).fill({ a: 1 });

console.log(arr);

setTimeout(() => {
  arr[1].a = 2;
  console.log(arr);
}, 3000);
