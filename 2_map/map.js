var squared = function(numbers) {
  return numbers.map( function(num) { return num ** 2; });
};

var nums = [1, 2, 3, 4, 5];
console.log('squares:', squared(nums)); // => [1, 4, 9, 16, 25]

var pluralize = function(words) {
  return words.map( function(word) { return word + 's'; });
};

var words = ['dog', 'cat', 'worm', 'kyle'];
console.log('plural:', pluralize(words)); // => ['dogs', 'cats', 'worms', 'kyles']

var songs = [
  { song: 'Phenom', artist: 'Alex Mali' },
  { song: 'Too Deep', artist: 'dvsn' },
  { song: 'Firefly', artist: 'Mura Masa' }
];

var songsBy = function(songs) {
  return songs.map( function(song) {
    return song.song + ' by ' + song.artist;
  });
};

console.log('song desc:', songsBy(songs));
  // => ['Phenom by Alex Mali', 'Too Deep by dvsn', 'Firefly by Mura Masa']

var users = [
  { firstName: 'Homer', lastName: 'Simpson' },
  { firstName: 'Marge', lastName: 'Simpson' },
  { firstName: 'Bart', lastName: 'Simpson' },
  { firstName: 'Lisa', lastName: 'Simpson' },
  { firstName: 'Maggie', lastName: 'Simpson' }
];

var firstNames = function(users) {
  return users.map( function(user) {
    return user.firstName;
  });
};

console.log('first names:', firstNames(users)); // => ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']

var products =  [
  ['Dark Chocolate Crunchies', 4.11, 3],
  ['Peppermint Poppers', 0.88, 1],
  ['Banana Bunches', 2.33, 2]
]

var toObject = function(products) {
  return products.map( function(product) {
    return { name: product[0], price: product[1], quantity: product[2]};
  });
};

console.log('products:', toObject(products));
// [
//   { name: 'Dark Chocolate Crunchies', price: 4.11, quantity: 3 },
//   { name: 'Peppermint Poppers', price: 0.88, quantity: 1 },
//   { name: 'Banana Bunches', price: 2.33, quantity: 2 }
// ]