var fn{
	ready: function(){
		document.addEventListener("deviceready",fn.init,false);
	},
	init: function(){
		navigator.geolocation.getCurrentPosition(fn.posicionObtenida,fn.error);
	},
	posicionObtenida: function(p){
		alert(p.coords.latitude + " " + p.coords.logitude + " " + p.coords.timeStamp);
	}
}
$(fn.ready);