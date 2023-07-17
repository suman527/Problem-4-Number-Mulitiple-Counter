function countMultiples() {
  var numbersInput = document.getElementById("numbers");
  var numbers = numbersInput.value.split(",").map(Number);
  
  var counts = {};

  for (var i = 1; i <= 9; i++) {
    counts[i] = 0;
  }

  for (var j = 0; j < numbers.length; j++) {
    var num = numbers[j];

    for (var k = 1; k <= 9; k++) {
      if (num % k === 0) {
        counts[k]++;
      }
    }
  }

  var result = JSON.stringify(counts, null, 2);
  document.getElementById("result").textContent = result;
}
