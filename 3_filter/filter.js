var lessThanTen = function(nums) {
  return nums.filter( function(num) { return num < 10; } );
}
var nums = [1, 5, 12, 18, 94, 3, 16];
console.log('lessThanTen:', lessThanTen(nums));

var onlyEvens = function(nums) {
  return nums.filter( function(num) { return num % 2 === 0; } );
}
console.log('evens:', onlyEvens(nums));

var onlyPlural = function(words) {
  return words.filter( function(word) {
    return word[word.length - 1] === 's';
  });
};
var words = ['dogs', 'cat', 'humans', 'kyle'];
console.log('plurals:', onlyPlural(words));

