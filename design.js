// Select color input
const colorChosen = document.getElementById('colorPicker');
colorChosen.addEventListener('change',getColor);

function getColor(){
  console.log('This color has changed');
  let newColor = document.getElementById('colorPicker').value;
  console.log(newColor);
  return newColor;
}


// Select size input
const submitButton = document.getElementById('sbmit');
submitButton.addEventListener('click',getFormData);

function getFormData(event) {
  const gridHeight = document.getElementById('grid-height').value;
  const gridWidth = document.getElementById('grid-width').value;

  makeGrid(gridHeight, gridWidth);

  event.preventDefault();
}


// When size is submitted by the user, call makeGrid()
//* FUNCTION THAT CREATES GRID *
function makeGrid(height,width) {
    const newCanvas = document.getElementById('pixelCanvas');

    //Resets the table if a current grid is in place
    if(newCanvas.hasChildNodes()){
      newCanvas.removeChild(newCanvas.firstChild);
    }

    for(let i = 0; i < height; i++){
      //Create a for loop to build the rows, and set the attribute for the row
      const row = newCanvas.insertRow();
      row.setAttribute('id','row'+i);
      for(let x=0; x < width; x++){
        //Create a nested for loop to target the row number and build the # of columns for each rows
        row.insertCell().setAttribute('id','r'+i+'_c'+x);
      }
    }



}
