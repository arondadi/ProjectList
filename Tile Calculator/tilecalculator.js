// // Tile calculator

function tileCalculator(width, height, cost) {
  return width * height * cost;
}

function myFunction() {
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const cost = document.getElementById("cost").value;

  const totalCost = tileCalculator(width, height, cost);

  document.getElementById("output").innerHTML = `${totalCost}`;
  return 0;
}
