"use strict"

function solveEquation(a, b, c) {
  let arr;
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant === 0) {
    let root = -b / ( 2 * a );
    arr = [];
    arr.push(+root.toFixed(2));
  } else if (discriminant > 0) {
    let root1 = ( -b + Math.sqrt(discriminant) ) / ( 2 * a );
    let root2 = ( -b - Math.sqrt(discriminant) ) / ( 2 * a );
    arr = [];
    arr.push(+root1.toFixed(2), +root2.toFixed(2));
  } else {
    arr = [];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }

  percent = percent/100/12;

  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let totalPayment = monthlyPayment * countMonths;

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}
