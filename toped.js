var list_jualan = "https://www.tokopedia.com/cozymart/kacamata-locs-original/";

var x = document.getElementById("dink-it");
var clickPush = function(){x.click();};
var consolePush = function(){console.log("consolePush")};
var Popup = document.getElementsByClassName("dialog-close jqmClose");
var closePopup = function(){Popup[0].click();};

var date = new Date();
console.log("Start: " + date );

if (list_jualan == location.href){
setInterval( function(){ 
   consolePush(), clickPush() }, 605 * 1000);}

if (list_jualan == location.href){
setInterval( function(){ 
	var date = new Date();
	var ms = date.getMilliseconds();
    console.log(date + ms);  
    if (Popup !== null){closePopup()}
    },120 * 1000);}
    
