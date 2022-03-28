var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("generate");


function inputColorsOnLoad(){
	color1.setAttribute("value", "#ff0000");
	color2.setAttribute("value", "#ffff00");

}


function firstColorGenerator(){

	var hex = "#";

	var r1 = Math.floor(Math.random() * 10);
	var r2 = Math.floor(Math.random() * 10);

	var g1 = Math.floor(Math.random() * 10);
	var g2 = Math.floor(Math.random() * 10);

	var b1 = Math.floor(Math.random() * 10);
	var b2 = Math.floor(Math.random() * 10);

	color1.setAttribute("value", hex + r1 + r2 + g1 + g2 + b1 +b2);

}


function secondColorGenerator(){

	var hex = "#";

	var r1 = Math.floor(Math.random() * 10);
	var r2 = Math.floor(Math.random() * 10);

	var g1 = Math.floor(Math.random() * 10);
	var g2 = Math.floor(Math.random() * 10);

	var b1 = Math.floor(Math.random() * 10);
	var b2 = Math.floor(Math.random() * 10);

	color2.setAttribute("value", hex + r1 + r2 + g1 + g2 + b1 +b2);
}


function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


window.addEventListener("load", inputColorsOnLoad);
window.addEventListener("load", setGradient);


button.addEventListener("click", firstColorGenerator);
button.addEventListener("click", secondColorGenerator);
button.addEventListener("click", setGradient);






