const btn = document.getElementById('btn');
const games = document.getElementById("g");
games.addEventListener('click',zmien);
var press = false;
function zmien(){
	if(!press){
	document.getElementById("gaz").innerHTML += `
	<h2>Quake</h2>
	<p>I love all Quake games from classic Quake 1 to newest Quake Champions they have this special thing in them.</p>
	<h2>Ultrakill</h2>
	<p>There are two kinds of pepole those who played it and thoes who don't i am one who played and not disapointed</p>
	<h2>Borderlands series</h2>
	<p>I have a boner when i see small gold bean on ground and like claptrap</p>
	<h2>Hedgewars</h2>
	<p>Funny hedhoges kill themselfs(never played worms).</p>
		`;
	press = true;
	}
}

function start(){
	document.getElementById("spam").innerHTML += "<p>fork :)</p><br>";
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

