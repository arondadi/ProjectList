// Listen for submit
document.getElementById("input-form").addEventListener("submit", e => {
  // Hide results
  document.getElementById("results").style.display = "none";

  calculateResults();

  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  const dec2bin = document.getElementById("dec2bin");
  const bin2dec = document.getElementById("bin2dec");

  let outputArr = [];
  let outputArrPush = input;

  if (dec2bin.classList.contains("btn-dark")) {
    while (outputArrPush > 0) {
      if (outputArrPush % 2 === 0) {
        outputArr.push(0);
        outputArrPush = outputArrPush / 2;
      } else if (outputArrPush % 2 === 1) {
        outputArr.push(1);
        outputArrPush = outputArrPush / 2 - 0.5;
      }
    }
    output.value = outputArr.reverse().join("");
  } else {
    let cast = outputArrPush.toString(10).split("");
    let sum = 0;

    for (let i = cast.length - 1; i > -1; i--) {
      console.log(i);
      let add = parseInt(cast[i]);
      sum = sum + add * Math.pow(2, cast.length - i - 1);
    }
    output.value = sum;
  }

  // Show results
  document.getElementById("results").style.display = "block";
}

// Change UI
function changeUI(value) {
  const dec2bin = document.getElementById("dec2bin");
  const bin2dec = document.getElementById("bin2dec");

  // Check which
  if (value === "Binary-to-Decimal") {
    dec2bin.classList.remove("btn-dark");
    bin2dec.classList.add("btn-dark");
    document.getElementById("input").placeholder = "Binary Number";
  } else if (value === "Decimal-to-Binary") {
    dec2bin.classList.add("btn-dark");
    bin2dec.classList.remove("btn-dark");
    document.getElementById("input").placeholder = "Decimal Number";
  }
}
