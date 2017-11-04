function addNumbers(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(addNumbers([1,2,3,4,5]));

function addNumbersRest(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(addNumbersRest(1,2,3,4,5));


// Spread
const defaultColors = [ 'red', 'green' ];
const userFavoriteColors = [ 'orange', 'yellow' ];
console.log(defaultColors.concat(userFavoriteColors));
console.log([ ...defaultColors, ...userFavoriteColors ]);

const MathLibrary = {
  calculateProduct(...rest) {
      console.log('Please use the multiply method instead');
      return this.multiply(...rest);
  },
    multiply(a, b) {
      return a * b;
    }
};