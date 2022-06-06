const mainContainer = document.querySelector(".main-container")
const gridContainer = document.querySelector(".grid-container")

const gridTotalHeight = gridContainer.clientHeight;
const gridTotalWidth = gridContainer.clientWidth;
console.log(gridTotalHeight);
console.log(gridTotalWidth);

let gridSquareHeight = gridTotalHeight / 20;
let gridSquareWidth = gridTotalWidth / 27;

console.log(gridSquareWidth)
console.log(gridSquareHeight)

for(let row=0; row<gridSquareHeight; row++){
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    gridContainer.appendChild(rowDiv);
    for(let cols=0; cols<gridSquareWidth; cols++){    
        const colsDiv = document.createElement("div");
        colsDiv.className = "cols";
        rowDiv.appendChild(colsDiv);
        colsDiv.style.width = `${gridSquareWidth}px`;
        colsDiv.style.height = `${gridSquareHeight}px`;
        
    }
   
}
