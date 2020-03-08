function fmtNumber(arg) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整する
   if( arg < 10 ) { ret = "0" + arg; }
   return arg;
}
function showDate() {
   var now = new Date();
   var nowHour = fmtNumber( now.getHours() );
   var nowMin  = fmtNumber( now.getMinutes() );
   var nowSec  = fMtNumber( now.getSeconds() );
   var msg = "現在日時は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。aa";
   document.getElementById("RealtimeClockArea2").innerHTML = msg;
}
setInterval('showDate()',1000);
