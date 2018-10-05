// Calculates the return change from the cost and the money given

function changeReturn(cost, moneyGiven, currency) {
  let moneyBack = moneyGiven - cost;
  let moneyReturn = [];

  // For each note and coin, calculates if it can be return with that size, puts it into the return array and removes the calculated amount
  for (let index = 0; index < currency.length; index++) {
    let currAmount = moneyBack / currency[index];
    let addedAmount = Math.floor(currAmount);
    moneyReturn.push(addedAmount);
    moneyBack = moneyBack - addedAmount * currency[index];
  }

  return moneyReturn;
}

function myFunction() {
  let currency = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  const cost = document.getElementById("cost").value;
  const moneyGiven = document.getElementById("moneyGiven").value;

  const changeBack = changeReturn(cost, moneyGiven, currency);

  let output = document.getElementById("output");

  // Check if there are previous results
  if (document.querySelector("h6") !== null) {
    while (document.querySelector("h6").parentNode.hasChildNodes()) {
      document
        .querySelector("h6")
        .parentNode.removeChild(document.querySelector("h6"));

      // if there are no results left, break the loop
      if (document.querySelector("h6") === null) {
        break;
      }
    }
  }

  // Create h6 elements for each type of coins and note in the return
  for (let i = 0; i < changeBack.length; i++) {
    if (changeBack[i] !== 0) {
      let newH6 = document.createElement("h6");
      newH6.appendChild(
        document.createTextNode(
          `${changeBack[i]} of ${currency[i]} SEK ${
            currency[i] >= 20 ? "notes" : "coins"
          }`
        )
      );
      output.appendChild(newH6);
    }
  }
  return;
}
