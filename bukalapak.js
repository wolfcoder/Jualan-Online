// Here You can type your custom JavaScript input...
var list_jualan = "https://www.bukalapak.com/my_products?from=dropdown";

var x = document.getElementsByClassName("btn btn--orange btn--medium btn--block");
var clickPush = function(){x[0].click()};
var clickPush1 = function(){x[1].click()};
var clickPush2 = function(){x[2].click()};
var clickPush3 = function(){x[3].click()};
var date = new Date();
 
console.log("Start: " + date );

var consolePush = function(){console.log("consolePush 0")};

if (list_jualan == location.href){
setInterval( function(){ 
	var date = new Date();
	var ms = date.getMilliseconds();
    console.log(date + ms)  },60 * 1000);}
    
if (list_jualan == location.href){
setInterval( function(){ 
      clickPush() }, 601 * 1000);}
