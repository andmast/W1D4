var words = ["ground", "control", "to", "major", "tom"];

var map = function(array,fx){
  var final =[]
  array.forEach(function(element){
    final.push(fx(element));
  });
  return final;
}
console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));


