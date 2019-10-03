/* Write a program, which creates an array of 20 elements of type integer and initializes
 * each of the elements with a value equals to the index of the element multiplied by 5.
 * Print the elements to the console.
 */

function initializeArray() {
  const array = [];

  for (let i = 0; i < 20; i++) {
    array.push(i*5);
  }

  return array;
}

console.log(initializeArray());
