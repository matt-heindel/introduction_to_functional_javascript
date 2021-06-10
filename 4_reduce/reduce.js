var sum = function(nums) {
  var result = 0;
  for (var i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}
var nums = [2, 4, 6];
console.log('sum:', sum(nums));
