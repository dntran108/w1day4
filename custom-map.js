https://github.com/dntran108/w1day4/blob/master/sort.jsvar words = ["ground", "control", "to", "major", "tom"];



var result1 = map(words, function(word) {

  return word.length;

});



var result2 = map(words, function(word) {

  return word.toUpperCase();

});



var result3 = map(words, function(word) {

  return word.split('').reverse().join('');

});





var test1 = [6, 7, 2, 5, 3]



var test2 = [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]



var test3 = [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]







function map(array, callback) {

  var resultArray = [];

  array.forEach(function(element) {

                resultArray.push(callback(element))

              })

  return resultArray;

}



console.log(result1);

console.log(result2);

console.log(result3);

