function fmtNumber(arg) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整する
   if( arg < 10 ) { ret = "0" + arg; }
   return arg;
}
function showDate() {
   var now = new Date();
   var nowYear = now.getFullYear();
   var nowMonth = now.getMonth() + 1;
   var nowDate = now.getDate();
   var nowHour = fmtNumber( now.getHours() );
   var nowMin  = fmtNumber( now.getMinutes() );
   var nowSec  = fMtNumber( now.getSeconds() );
   var msg = nowYear + "年" + nowMonth + "月" + nowDate + "日";
   document.getElementById("RealtimeClockArea2").innerHTML = msg;
}
setInterval('showDate()',1000);
