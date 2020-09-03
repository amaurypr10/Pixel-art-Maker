// Select color input
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let submitButton = document.getElementById('submitButton'); 

// Select size input
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function(event){
	event.preventDefault();
	let height = document.getElementById('inputHeight').value;
	let width = document.getElementById('inputWidth').value;
	makeGrid(height, width);
	//Make Grid
});

function makeGrid(height, width) {


	let row = table.insertRow(0);
	
	for(var x = 0; x <= height; x++){
		let row = table.insertRow(x);
		console.log(row) 
		for(var y = 0; y <= width;y++){
			let column = table.insertCell(y);
		}
	}


}


