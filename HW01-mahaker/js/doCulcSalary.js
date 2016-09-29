var olympic = "2020-07"; //ハイフンを区切りとした年月
var now = new Date();

function doPrintParseDist() {
  olympicSprit = getOlympic();
  var output_olympic_message = "次回オリンピック開催は "+olympicSprit[0]+"年"+olympicSprit[1]+"月 です";
	document.getElementById("dist_date").innerText = output_olympic_message;
}

function doCulcSalaryOlympic() {
	nowISOSprit = getNowISO();
  var span_year = getSpan_year();
  var span_month = getSpan_month();
  var total_span_month = span_year * 12 + span_month;
  var result_culc_salary = total_span_month * document.forms.form1.salary.value;
  document.getElementById("culc_salary_olympic").innerText = result_culc_salary;
}

function getNowISO() {
  return now.toISOString().split("-");
}

function getOlympic() {
  return olympic.split("-");
}

function getSpan_year() {
  return olympicSprit[0] - nowISOSprit[0];
}

function getSpan_month() {
  return olympicSprit[1] - nowISOSprit[1];
}

function maskInputNum() {
	if (!(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39)) {
		event.preventDefault();
	  return false;
	}
	return true;
}
