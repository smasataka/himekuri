// main thread
window.addEventListener(
  "DOMContentLoaded",
  function() {
    getDate();
    setInterval("getDate();", 1000);
  },
  false
);


// 桁数が1桁だったら先頭に0を加えて2桁に調整する
function fmtNumber(arg) {
   if ( arg < 10 ) { return "0" + arg; }
   else { return arg; }
}

// 日本語の曜日に変換
function fmtWeek(arg) {
	switch (arg) {
 		case 0: return "日"; break;
		case 1: return "月"; break;
		case 2: return "火"; break;
		case 3: return "水"; break;
		case 4: return "木"; break;
		case 5: return "金"; break;
		case 6: return "土"; break;
		case 7: return "日"; break;
		default: return "エラー"; break;
	}
}

// コンテナ
function getDate() {
	var now = new Date();
	var year = now.getFullYear();
	var month = fmtNumber( now.getMonth() + 1 );
	var date = fmtNumber( now.getDate() );
	var week = fmtWeek( now.getDay() );
	var hour = fmtNumber( now.getHours() );
	var min  = fmtNumber( now.getMinutes() );
   	document.getElementById("week").innerHTML = week;
	document.getElementById("date").innerHTML = year + "年" + month + "月" + date + "日";
	document.getElementById("time").innerHTML = hour + "時" + min + "分";
}
