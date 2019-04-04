var countdownGenerator = function (x) {
  var screens =["Blast Off ","T-minus ","Rockets already gone, bub",];
  var count = x+1;

  return function(){
    count --;
    if (count === 0){
      console.log(`${screens[0]}`);
    } else if (count > 0){
      console.log(`${screens[1]}` + count +"...")
    } else {
      console.log(`${screens[2]}`);
    }
  }

  /* your code here */
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!