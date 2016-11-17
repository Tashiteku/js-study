var olympic = "2020-07"; //次回オリンピック開催日。yyyy-mm形式で指定。
var now = new Date();

/*
*画面ロード時に実行される関数
*olympicをyyyy年mm月形式で表示します。
*/
function doPrintParseDist() {
  olympicSprit = getOlympic();
  var output_olympic_message = "次回オリンピック開催は "+olympicSprit[0]+"年"+olympicSprit[1]+"月 です";
	document.getElementById("dist_date").innerText = output_olympic_message;
}

/*
*次回オリンピック開催日までのお給料を計算。
*/
function doCulcSalaryOlympic() {
  nowISOSprit = getNowISO();
  var span_year = getSpan_year();
  var span_month = getSpan_month();
  var total_span_month = span_year * 12 + span_month;
  var result_culc_salary = total_span_month * document.forms.form1.salary.value;
  document.getElementById("culc_salary_olympic").innerText = result_culc_salary;
}

/*
*ISO 8601（yyyy-MM-ddTHH:mm:ss）フォーマットの現在日時をハイフンで分割。
*計算に使用するのは、yyyy-MMまで。
*/
function getNowISO() {
  return now.toISOString().split("-");
}

/*
*olympicをハイフンで分割
*/
function getOlympic() {
  return olympic.split("-");
}

/*
*olympicとnowの年の差分を計算する。
*/
function getSpan_year() {
  return olympicSprit[0] - nowISOSprit[0];
}

/*
*olympicとnowの月の差分を計算する。
*/
function getSpan_month() {
  return olympicSprit[1] - nowISOSprit[1];
}

/*
*半角数字、バックスペース、デリート、← →キー、エンターキーのみを有効にします。
*/
function maskInputNum() {
	if (!(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39)) {
    /*押下されたキーを無効化*/
		event.preventDefault();
	  return false;
	}
	return true;
}
