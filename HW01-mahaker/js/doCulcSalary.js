var olimpic_year = "2020-07"; //ハイフンを区切りとした年月

function doPrintsalary() {
	var target = document.getElementById("output_salary");
	target.innerText = document.forms.form1.salary.value;
}

function doPrintDate() {
	var now = new Date();
	var output = now.toISOString(); //2016-09-20T08:55:40.204Z
	document.getElementById("date").innerText = output;
	doPrintParseDate(output);
	doPrintParseDist(olimpic_year);
}

function doPrintParseDate(source) {
	var output = source.split("-");
	document.getElementById("parse_date_month").innerText = output[0];
	document.getElementById("parse_date_day").innerText = output[1];
}

function doPrintParseDist(source) {
	var output = source.split("-");
	document.getElementById("parse_dist_month").innerText = output[0];
	document.getElementById("parse_dist_day").innerText = output[1];
}

function maskInputNum() {
	if (!(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39)) {
		event.preventDefault();
	  return false;
	}
	return true;
}
