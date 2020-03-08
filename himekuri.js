// 桁数が1桁だったら先頭に0を加えて2桁に調整する
function fmtNumber(arg) {
   if( arg < 10 ) { return "0" + arg; }
   else { return arg; }
}

// 日本語の曜日に返還
function fmtWeek(arg) {
	switch (arg)
	{
    case 0: return "日"; break;
    case 1: return "月"; break;
    case 2: return "火"; break;
    case 3: return "水"; break;
    case 4: return "木"; break;
    case 5: return "金"; break;
    case 6: return "ド"; break;
    case 7: return "日"; break;
    default: return "エラー"; break;
	}
}

// メイン
function getDate() {
   var now = new Date();
   var year = now.getFullYear();
   var month = now.getMonth() + 1;
   var date = now.getDate();
   var week = fmtWeek( now.getDay() );
   var hour = fmtNumber( now.getHours() );
   var min  = fmtNumber( now.getMinutes() );
   var sec  = fmtNumber( now.getSeconds() );
   var content = year + "年" + month + "月" + date + "日" + week + "曜日" + hour + "時" + min + "分" + sec + "秒";
   document.getElementById("RealtimeClockArea2").innerHTML = content;
}
setInterval('getDate()',1000);
