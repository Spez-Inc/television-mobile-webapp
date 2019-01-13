var live = document.getElementsByClassName("menu-button")[0];
var catchup = document.getElementsByClassName("menu-button")[1];
var websites = document.getElementsByClassName("menu-button")[2];

live.click();

function opentab(tabid, btnclass) {
	live.setAttribute("class", "menu-button");
	catchup.setAttribute("class", "menu-button");
	websites.setAttribute("class", "menu-button");
	btnclass.setAttribute("class", "menu-button menu-active");
	
	document.getElementById("LiveTV").style.display = "none";
	document.getElementById("CatchUp").style.display = "none";
	document.getElementById("Websites").style.display = "none";
	document.getElementById(tabid).style.display = "block";
}