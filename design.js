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

function getFormData() {
  const gridHeight = document.getElementById('grid-height').value;
  const gridWidth = document.getElementById('grid-width').value;
  console.log(gridHeight+" x "+gridWidth);
  makeGrid(gridHeight, gridWidth);
}

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  //td = width
  //tr = height

  

}
