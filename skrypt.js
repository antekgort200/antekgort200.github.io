const btn = document.getElementById('btn');

function start(){
	alert("brawo you can press a button");
	dpcument.getElementById("cont").textContent = "TEST";
}
function time(){
	document.getElementById("click").textContent = "Made in HTML, CSS and JS.";
	setTimeout(function(){
		document.getElementById("click").textContent = "And show some things i already did.";
	},3000);

	setTimeout(function(){
                document.getElementById("click").textContent = "about";
        },3000);

}

$.getJSON("https://api.ipfy.org?format=json",function(data){
	alert(data.ip);
},"json")
