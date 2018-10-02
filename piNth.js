// Pi to the Nth decimal
// Not working
let r = 5;
let points_total = 0;
var points_inside = 0;

function piToTheNth(N) {
  let r = 5;
  let points_total = 0;
  let points_inside = 0;

  while ((points_total < 10) ^ N) {
    points_total++;

    var x = Math.random() * r * 2 - r;
    var y = Math.random() * r * 2 - r;

    if (Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(r, 2)) points_inside++;

    if (points_total % 100000000 == 0) {
      pi = (4 * points_inside) / points_total;
      console.log(pi.toPrecision(10));
    }
  }
}

piToTheNth(4);
