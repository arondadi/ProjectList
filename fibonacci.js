// // Fibonacci sequence

function fibonacci(number) {
  let add = 0;
  let sum = 1;
  let arr = [];
  counter = 0;

  do {
    arr.push(sum);
    sum += add;
    add = sum;
    //console.log(arr);
    counter++;
  } while (counter < number);

  return arr;
}

function myFunction() {
  const number = document.getElementById("input").value;
  let output = fibonacci(number);
  output = output.toString();
  // console.log(output);

  document.getElementById("output").innerHTML = `${output}`;
}
