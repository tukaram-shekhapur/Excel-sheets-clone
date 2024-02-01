for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
        let cell=document.querySelector(`.cell[rowId="${i}"][colId="${j}"]`);
        cell.addEventListener("blur",(e)=>{
            let address=addressBar.value;
            let [activeCell,cellProp]=getCellAndCellProp(address);
            let enteredData=activeCell.innerText;

            cellProp.value=enteredData;
            console.log(cellProp.value);
        })
    }
}

let formulaBar=document.querySelector(".formula-bar");
formulaBar.addEventListener("keydown",(e)=>{
    let inputFormula=formulaBar.value;
    if(e.key==="Enter" && inputFormula){
       let evaluatedValue=evaluateFormula(inputFormula);

       //To update UI and cellProp in DB.
       setCellUIAndCellProp(evaluatedValue,inputFormula);
    }
   

})

function evaluateFormula(formula){
    return eval(formula);
}

function setCellUIAndCellProp(evaluatedValue,formula){
    let address=addressBar.value;
    let [cell,cellProp]=getCellAndCellProp(address);
     //UI update
    cell.innerText=evaluatedValue;
    //DB update
    cellProp.value=evaluatedValue;
    cellProp.formula=formula;
}