const mainContainer = document.querySelector(".main-container")
const gridContainer = document.querySelector(".grid-container")
const gridTotalHeight = gridContainer.clientHeight;
const gridTotalWidth = gridContainer.clientWidth;

function createGrid(){
    clearGrid();
    const userPrompt = prompt("How many squares do you want? You must select a number less than 100");
    if(userPrompt > 100){
        return createGrid();
    }
    let gridSquareHeight = gridTotalHeight / userPrompt;
    let gridSquareWidth = gridTotalWidth / userPrompt;
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
    addGridListeners();
}
createGrid();

function addGridListeners(){
    const gridDivs = document.querySelectorAll(".cols");
    gridDivs.forEach(gridDiv => {
        gridDiv.addEventListener("mouseover", () => {
        gridDiv.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        })
    })
}

function clearGrid(){
    const gridDivs = document.querySelectorAll(".cols");
    gridDivs.forEach(gridDiv => {
        gridDiv.style.background = "none";
    })
}

function resetGrid(){
    const rowDivs = document.querySelectorAll('.row')
    rowDivs.forEach(rowDiv => {
        gridContainer.removeChild(rowDiv)
    })
    createGrid();
}
