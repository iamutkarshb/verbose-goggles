/**
* Demon King
*/
var ns = 6
var colors = generateRandomColors(ns);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var cd = document.getElementById('cd');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	ns = 3;
	colors = generateRandomColors(ns);
	pickedColor= pickColor();
	cd.textContent = pickedColor;
	for (var i = squares.length - 1; i >= 0; i--) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	ns=6;
	colors = generateRandomColors(ns);
	pickedColor= pickColor();
	cd.textContent = pickedColor;
	for (var i = squares.length - 1; i >= 0; i--) {
			squares[i].style.background = colors[i];
		
			squares[i].style.display = "block";
		 
	}
})



resetButton.addEventListener("click",function(){
	colors = generateRandomColors(ns);
	pickedColor = pickColor();
	cd.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
})

cd.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = ((this.style.background).split(')')[0]+')').replaceAll(' ', '');
		
		
		
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor; 
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
			
		}

	});
}

function changeColors(color){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random =  Math.floor(Math.random() * colors.length);
	return colors[random] ; 
}

function generateRandomColors(num){
	var arr =[]
	for (var i = num - 1; i >= 0; i--) {
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);	
	return "rgb("+r+","+ g +","+ b +")"; 
}