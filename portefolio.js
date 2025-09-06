


const bars = document.getElementById("bars");
const menu = document.getElementById("menu");
const x = document.getElementById("x");
const header = document.getElementById("header")

x.style.display = "none";

bars.addEventListener("click", mark);

function mark(){
	alert("Hello world!");
	bars.style.display = "none";
	x.style.display = "block";
	header.style.height = "500px";
	menu.style.display = "flex";
	menu.style.flexDirection= "column";
}

x.addEventListener("click", markx);

function markx(){
	alert("Hello world!");
	bars.style.display = "block";
	x.style.display = "none";
	header.style.height = "100px";
	menu.style.display = "none";
	
}





