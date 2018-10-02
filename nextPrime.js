// Next Prime Number

// Function that runs on the html button
function myFunction() {
  // Get the current prime number.
  let number = document.getElementById("output").innerHTML;

  // Finds next prime number from the one in output
  let output = nextPrime(number);

  document.getElementById("output").innerHTML = `${output}`;
}

// Finds the next prime number
function nextPrime(prime) {
  prime++;

  // Set to false to start the while check
  let next = false;

  // Increments the prime variable and checks if it's a prime number.
  while (!next) {
    next = isPrime(prime);
    !next ? prime++ : "";
    console.log(prime);
  }
  // Returns the prime what has been checked
  return prime;
}

// Check if the given number is a prime number
function isPrime(number) {
  let start = 2;
  const limit = Math.sqrt(number);
  while (start <= limit) {
    if (number % start++ < 1) return false;
  }
  return number > 1;
}
