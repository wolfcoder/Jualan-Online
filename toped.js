var list_jualan = "https://www.tokopedia.com/cozymart/kacamata-locs-original/";

var x = document.getElementById("dink-it");
var clickPush = function(){x.click();}
var consolePush = function(){console.log("consolePush")};

var Popup = document.getElementsByClassName("dialog-close jqmClose");
var closePopup = function(){Popup[0].click();};

if (Popup != null){closePopup()}

if (list_jualan == location.href){
setInterval( function(){ 
    consolePush() , clickPush() }, 3600 * 1000);}
