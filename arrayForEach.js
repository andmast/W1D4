// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var count = 0
arr.forEach(function(element){


  if (element === "Waldo") {
      found.index = count;

      found();   // execute callback

    }
  count ++
});
}

function actionWhenFound() {
  console.log("Found Waldo at index of", actionWhenFound.index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
