var list_jualan = "https://www.bukalapak.com/my_products?from=dropdown&page=1";

var x = document.getElementsByClassName("btn btn--orange btn--medium btn--block");
var clickPush = function(){x[1].click();}
var consolePush = function(){console.log("consolePush")};

if (list_jualan == location.href){
setInterval( function(){ 
    consolePush() , clickPush() }, 6000 * 1000);}
	
	
	
