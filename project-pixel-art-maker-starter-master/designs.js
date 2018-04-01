// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// .addClass("newDiv purple bloated")


$(document).ready(function() {

});


$('form').on('submit', function(event) {
	event.preventDefault();
	makeGrid();
});

$('td').click(function(e) {	 
	selectACell(this);
	console.log(this+'clicked');
	});
	
	
function makeGrid() {

// Your code goes here!
var row = $('#inputHeight').val(), 
col = $('#inputWidth').val();
console.log("row="+row+"  col="+col);
	for( var iRow=0; iRow < row; iRow++){
		colTag = '', rowTag='';
		rowTag = $('<tr/>').attr("id", "id"+iRow)
		for( var iCol=0; iCol < col; iCol++){
			colTag = rowTag.append(
							$('<td/>').attr("id", "id"+iRow+iCol).css("cursor", "pointer").click(function(e) {	
							let selectedCell = e.target;
							let colorPicker = $("#colorPicker").val();	
							$(selectedCell).css("background-color",colorPicker);							
						})
	);
		}	
		$('#pixelCanvas').append(colTag);
		colTag = '';
		rowTag='';
	}	
}

function selectACell(selectedCell){
	let colorPicker = $("#colorPicker").val();
	selectedCell.css("background-color",colorPicker);
	console.log("color:",colorPicker);
}
