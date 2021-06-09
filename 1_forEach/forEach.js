var sumImperative = function(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result;
};

var sumDeclarative = function(array) {
  // your code here
  var result = 0;
  array.forEach( function(val) {
    result += val;
  });
  return result;
};

// test
var arr = [1, 2, 3, 4, 0, -1];
console.log(sumImperative(arr));
console.log(sumDeclarative(arr));

var maxNumImperative = function(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

var maxNumDeclarative = function(array) {
  var max = 0;
  array.forEach( function(val) {
    max = (val > max ? val : max);
  });
  return max;
};

// test
console.log(maxNumImperative(arr));
console.log(maxNumDeclarative(arr));

var printNames = function(names) {
  names.forEach( function(name) { console.log(name); });
};

printNames(['Tom', 'Jerry', 'Arnold', 'Casper']);

function remove(array, element) {
  var result = [];
  array.forEach( function(val) {
    if (val !== element) {
      result.push(val);
    }
  });
  return result;
}
console.log(remove([1, 3, 6, 2, 3], 3)); // => [1, 6, 2]

var reverseString = function(str) {
  var letters = str.split('');
  var reverse = [];
  for (var i = letters.length - 1; i >= 0; i--) {
    reverse.push(letters[i]);
  }
  return reverse.join('');
}
console.log(reverseString('hello'));

var isEven = function(num) {
  return (num % 2 === 0);
}

var keep = function(arr, test) {
  var result = [];
  arr.forEach( function(val) {
    if (test(val)) {
      result.push(val);
    }
  });
  return result;
}
console.log('evens:', keep(arr, isEven));
console.log('odds:', keep(arr, function(num) { return (!isEven(num)); }));

