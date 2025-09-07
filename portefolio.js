


const bars = document.getElementById("bars");
const menu = document.getElementById("menu");
const x = document.getElementById("x");
const header = document.getElementById("header");
const html = document.getElementById("html");

html.addEventListener("onload", phrase);
function phrase(){
	alert("Welcome to my portfolio!!")
}
bars.addEventListener("click", mark);

function mark(){
	bars.style.display = "none";
	x.style.display = "block";
	header.style.height = "500px";
	menu.style.display = "flex";
	menu.style.flexDirection= "column";
}

x.addEventListener("click", markx);

function markx(){
	bars.style.display = "block";
	x.style.display = "none";
	header.style.height = "100px";
	menu.style.display = "none";
	
}







