// // mortgage calculator

function mortgageCalculator(mortgage, interest, intervalType, intervalNumber) {
  let r;
  let termsMulti;
  switch (intervalType) {
    case "Daily":
      r = interest / 100 / 365;
      termsMulti = 365;
      break;
    case "Weekly":
      r = interest / 100 / 52;
      termsMulti = 52;
      break;
    case "Monthly":
      r = interest / 100 / 12;
      termsMulti = 12;
      break;
  }

  return (
    (r / (1 - Math.pow(1 + r, -intervalNumber * termsMulti))) *
    mortgage
  ).toFixed(2);
}

function myFunction() {
  const mortgage = document.getElementById("mortgage").value;
  const interest = document.getElementById("interest").value;
  const intervalType = document.getElementById("intervalType").value;
  const intervalNumber = document.getElementById("intervalNumber").value;

  const monthlyPayment = mortgageCalculator(
    mortgage,
    interest,
    intervalType,
    intervalNumber
  );

  document.getElementById("output").innerHTML = `${monthlyPayment}`;
  return 0;
}
