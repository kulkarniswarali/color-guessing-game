/*var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]
*/
numSquares =6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons()
{
	for(var i=0; i<modeButtons.length; i++)
	{
			modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			//to check if button is easy or hard
			if(this.textContent === "Easy")
			{
				numSquares = 3;
			}
			else
			{
				numSquares = 6;
			}
			reset();
		});
	}

}

function setupSquares()
{

	for (var i=0; i<squares.length; i++)
	{
		//add initial color to squares
		squares[i].style.background = colors[i];

		//add click listener to squares
		squares[i].addEventListener("click", function(){

			//grab the clicked color
			var clickedColor = this.style.background;

			//compare color of picked color
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "play again?";
			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
	})
	}
}
function reset()
{
	messageDisplay.textContent = "";
	//generate random colors
	colors = generateRandomColors(numSquares);
	//picks a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to change picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New colors";
	
	//change color of squares
	for (var i=0; i<squares.length; i++)
	{
		//squares[i].style.background = colors[i];

		if(colors[i]){
			squares[i].style.display = "block" ;
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none" ;
		}
	}

	h1.style.background = "steelblue";
}
// easyBtn.addEventListener("click", function(){
// 	//alert("ease");
// 	messageDisplay.textContent = "";
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i=0; i<squares.length ; i++)
// 	{
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else
// 		{
// 			squares[i].style.display = "none" ;
// 		}
// 	}

// });

// hardBtn.addEventListener("click", function(){
// 	//alert("hard");
// 	messageDisplay.textContent = "";
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i=0; i<squares.length ; i++)
// 	{
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else
// 		{
// 			squares[i].style.background = "block";
// 		}
// 	}

// });


resetButton.addEventListener("click", function(){
	    
	 reset(); 
	//  messageDisplay.textContent = "";
	// //generate random colors
	// colors = generateRandomColors(numSquares);
	// //picks a new random color from array
	// pickedColor = pickColor();
	// //change colorDisplay to change picked color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New colors";
	// //change color of squares
	// for (var i=0; i<squares.length; i++)
	// {
	// 	squares[i].style.background = colors[i];
	// }

	// h1.style.background = "steelblue";

})

function changeColors(color)
{
	for(var i=0;i<squares.length ; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	//generate no's from 1-6 
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	//make an array
	var arr = [];

	//repeat num times
	for(var i=0; i<num ;i++)
	{
		//get random and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor()
{
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb"+ "(" + r +", "+ g + ", " + b + ")";
	
}