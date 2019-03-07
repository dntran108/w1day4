function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = 0;

  return function() {
    var result = list[index];
    index = index + 1 % list.length;
    return result;
  }
}

var rollLoadedDie = makeLoadedDie();


console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

var countdownGenerator = function (x) {
  /* your code here */

  return function() {
    if (x > 0) {
      console.log("T-minus "+ x + "...");
    }
    else if (x === 0) {
      console.log("Blast Off!");
    }
    else {
      console.log("Rockets already gone,bub!");
    }
    x--;

  }
};

var countdown = countdownGenerator(12.2);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

