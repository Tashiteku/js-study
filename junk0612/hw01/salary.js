BASE_SALARY = 200000;

function calcMonth(toYear, toMonth) {
  var now = new Date();

  return (toYear - now.getFullYear()) * 12 + toMonth - now.getMonth();
}

function calcSalary(toYear, toMonth) {
  return BASE_SALARY * calcMonth(toYear, toMonth);
}

console.log(calcSalary(2020, 7));
