// Prime Factorization

function primeFactor(number) {
  //integer is the value for which we are finding prime factors
  let primeArray = [];
  let isPrime;

  //find divisors starting with 2

  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      //check if divisor is prime
      for (let j = 2; j <= i / 2; j++) {
        i % j === 0 ? (isPrime = false) : (isPrime = true);
      }

      //if the divisor is prime
      //divide integer by prime factor & factor store in array primeArray
      isPrime === true ? ((number /= i), primeArray.push(i)) : "";
    }
  }

  return primeArray;
}

function myFunction() {
  const number = document.getElementById("input").value;
  let output = primeFactor(number);
  output = output.toString();
  // console.log(output);
  document.getElementById("output").innerHTML = `${output}`;
}
