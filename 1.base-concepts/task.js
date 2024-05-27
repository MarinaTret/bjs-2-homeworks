"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - (4*a*c);
  if (d < 0) {

  }
  else if (d == 0) {
    arr[0] = (-b/(2*a));
  }
  else if (d > 0){
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  }

    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let per = percent/100/12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (per + (per / (((1 + per) ** countMonths) - 1)));
  let sum = monthlyPayment * countMonths;
  sum = Number(sum.toFixed(2));

  return sum;

}

