


const bars = document.getElementById("bars");
const menu = document.getElementById("menu");
const x = document.getElementById("x");
const header = document.getElementById("header");
const html = document.getElementById("html");
var make = window.alert("Welcome to my portfolio!")
x.style.display = "none";
bars.style.display= "block";
html.addEventListener("onload", phrase);
function phrase(){
	alert("Welcome to my portfolio!!")
}
bars.addEventListener("click", mark);

function mark(){
	x.style.display = "block"
	x.style.float="right";
	bars.style.display = "none";
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











