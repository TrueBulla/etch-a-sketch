const mainContainer = document.querySelector(".main-container")
const gridContainer = document.querySelector(".grid-container")
const gridTotalHeight = gridContainer.clientHeight;
const gridTotalWidth = gridContainer.clientWidth;
//main function 
function createGrid(){
    //need to clear the grid of any previous grids before we begin
    clearGrid();
    //collect a number n to make a square grid of n tiles
    const userPrompt = prompt("How many squares do you want? You must select a number less than 100");
    //if inputted number is greater than 100, restart the function
    if(userPrompt > 100){
        return createGrid();
    }
    //creating varibles to collect width of tiles so the number of tiles fit in the alloted space
    let gridSquareHeight = gridTotalHeight / userPrompt;
    let gridSquareWidth = gridTotalWidth / userPrompt;
    //loop through and create the correct number of rows/columns
    for(let row=0; row<userPrompt; row++){
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        gridContainer.appendChild(rowDiv);
        for(let cols=0; cols<userPrompt; cols++){    
            const colsDiv = document.createElement("div");
            colsDiv.className = "cols";
            rowDiv.appendChild(colsDiv);
            colsDiv.style.width = `${gridSquareWidth}px`;
            colsDiv.style.height = `${gridSquareHeight}px`;
        }
    }
    //call function to add event listeners to each tile that was created
    addGridListeners();
}
createGrid();
//This function adds the event listeners to each square on the grid so they can change color after the mouse moves over them 
function addGridListeners(){
    //create a nodelist of all grid tiles
    const gridDivs = document.querySelectorAll(".cols");
    //adds the event listener to each tile and changes their background when the mouse moves over that tile
    gridDivs.forEach(gridDiv => {
        gridDiv.addEventListener("mouseover", () => {
        // gridDiv.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        gridDiv.style.background = "black";
        })
    })
}
//This function will reset the grid to all white spaces
function clearGrid(){
    //create a nodelist of all grid tiles
    const gridDivs = document.querySelectorAll(".cols");
    //takes each tile and removes its background color 
    gridDivs.forEach(gridDiv => {
        gridDiv.style.background = "none";
    })
}
//This function removes the grid and then offers to recreate the grid with a different number of rows/columns
function resetGrid(){
    //create a nodelist of all grid tile rows
    const rowDivs = document.querySelectorAll('.row')
    //removes each row of tiles 
    rowDivs.forEach(rowDiv => {
        gridContainer.removeChild(rowDiv)
    })
    //calls the createGrid function to recreate a grid after the previous one is removed.
    createGrid();
}
