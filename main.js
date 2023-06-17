// Need to add keyBack and solve the problem with the pre-existing letter color.
const keyQ = document.getElementById('keyQ'),
    keyW = document.getElementById('keyW'),
    keyE = document.getElementById('keyE'),
    keyR = document.getElementById('keyR'),
    keyT = document.getElementById('keyT'),
    keyY = document.getElementById('keyY'),
    keyU = document.getElementById('keyU'),
    keyI = document.getElementById('keyI'),
    keyO = document.getElementById('keyO'),
    keyP = document.getElementById('keyP'),
    keyA = document.getElementById('keyA'),
    keyS = document.getElementById('keyS'),
    keyD = document.getElementById('keyD'),
    keyF = document.getElementById('keyF'),
    keyG = document.getElementById('keyG'),
    keyH = document.getElementById('keyH'),
    keyJ = document.getElementById('keyJ'),
    keyK = document.getElementById('keyK'),
    keyL = document.getElementById('keyL'),
    keyZ = document.getElementById('keyZ'),
    keyX = document.getElementById('keyX'),
    keyC = document.getElementById('keyC'),
    keyV = document.getElementById('keyV'),
    keyB = document.getElementById('keyB'),
    keyN = document.getElementById('keyN'),
    keyM = document.getElementById('keyM'),
    keyBack = document.getElementById('keyBack'),
    keyEnter = document.getElementById('keyEnter');

let cellNum = 1;
let cellString = 'cell';
let cellStringNum = cellString + cellNum.toString();
let pressedKeys = [];
let greenLetters = [];
let yellowLetters = [];
let nonExistentKeys = [];
let finalResult = [];
let win = [];

const word = 'GOOSE';
let supposedWord = '';

function back(){
    console.log(cellStringNum);
    supposedWord = supposedWord.slice(0, -1);
    if(cellStringNum == 'cell5' || cellStringNum == 'cell10' ||
       cellStringNum == 'cell15' || cellStringNum == 'cell20' ||
       cellStringNum == 'cell25' || cellStringNum == 'cell30'){
        if(document.getElementById(cellStringNum).value != ''){
            document.getElementById(cellStringNum).value = '';
            return;
        }
    }
    if(cellStringNum == 'cell2' || cellStringNum == 'cell7' ||
             cellStringNum == 'cell12' || cellStringNum == 'cell17' ||
             cellStringNum == 'cell22' || cellStringNum == 'cell27'){
                cellNum = cellNum - 1;
                cellStringNum = cellString + cellNum.toString();
                document.getElementById(cellStringNum).value = '';
    }else{
        if(cellStringNum == 'cell1'){
            return;
        }else{
            cellNum = cellNum - 1;
            cellStringNum = cellString + cellNum.toString();
            document.getElementById(cellStringNum).value = '';
        }
    }
    
}

function analyze(){
    let cellValue = document.getElementById(cellStringNum).value;
    if(cellValue != ''){
        let i = 0;
        cellNum = cellNum - 4;
        while(i < 5){
            cellStringNum = cellString + cellNum.toString();
            finalResult.push(cellStringNum);
            if(supposedWord[i] == word[i]){
                document.getElementById(cellStringNum).style.background = "#538d4e";
                greenLetters.push(supposedWord[i]);
            }else{
                if(word.includes(supposedWord[i])){
                    document.getElementById(cellStringNum).style.background = "#b59f3b";
                    yellowLetters.push(supposedWord[i]);
                }else{
                    nonExistentKeys.push(supposedWord[i]);
                }
            }
            document.getElementById(cellStringNum).style.transform = "rotateY(1turn)";
            document.getElementById(cellStringNum).style.transition = "1s";
            cellNum = cellNum + 1;
            i = i + 1;
        }
        supposedWord = '';
        cellStringNum = cellString + cellNum.toString();
        for(let key of pressedKeys){
            for(let letter of greenLetters){
                if(key[3] == letter){
                    document.getElementById(key).style.background = "#538d4e";
                }
            }
            for(let letter of yellowLetters){
                if(key[3] == letter){
                    document.getElementById(key).style.background = "#b59f3b";
                }
            }
            for(let letter of nonExistentKeys){
                if(key[3] == letter){
                    document.getElementById(key).style.background = "#444747";
                }
            }
        }
        greenLetters = [];
        yellowLetters = [];
        pressedKeys = [];
        for(let cell of finalResult){
            if(document.getElementById(cell).style.background == "rgb(83, 141, 78)"){
                win.push(true);
            }
        }
        if(win.length == 5){
            document.getElementById('visibility').style.visibility = "visible";
            document.getElementById('visibility').style.opacity = "5";
            document.getElementById('visibility').style.transition = "1s";
        }
        finalResult = [];
    }else{
        return;
    }
    
}


function row1(){
    if(win.length == 5){
        return;
    }else{
        win = [];
    }
    if (cellStringNum == 'cell5' ||
        cellStringNum == 'cell10' ||
        cellStringNum == 'cell15' ||
        cellStringNum == 'cell20' ||
        cellStringNum == 'cell25' ||
        cellStringNum == 'cell30'){
            if(document.getElementById(cellStringNum).value == ''){
                pressedKeys.push(this.id);
                let cell = document.getElementById(cellStringNum);
                cell.value = this.value;
                cell.style.color = 'white';
                cell.style.fontSize = '30px';
                cell.style.fontFamily = 'Courier New', 'Courier', 'monospace';
                cell.style.fontWeight = '900';
                cell.style.background = "rotate(180 deg)";
                supposedWord = supposedWord + this.value;
            }
            return;
    }else{
        pressedKeys.push(this.id);
        let cell = document.getElementById(cellStringNum);
        cell.style.color = 'white';
        cell.style.fontSize = '30px';
        cell.style.fontFamily = 'Courier New', 'Courier', 'monospace';
        cell.style.fontWeight = '900';
        cell.value = this.value;
        cell.style.background = "rotate(180 deg)";
        supposedWord = supposedWord + this.value;
        cellNum = cellNum + 1;
        cellStringNum = cellString + cellNum.toString();
    }
}

keyQ.addEventListener('click', row1);
keyW.addEventListener('click', row1);
keyE.addEventListener('click', row1);
keyR.addEventListener('click', row1);
keyT.addEventListener('click', row1);
keyY.addEventListener('click', row1);
keyU.addEventListener('click', row1);
keyI.addEventListener('click', row1);
keyO.addEventListener('click', row1);
keyP.addEventListener('click', row1);
keyA.addEventListener('click', row1);
keyS.addEventListener('click', row1);
keyD.addEventListener('click', row1);
keyF.addEventListener('click', row1);
keyG.addEventListener('click', row1);
keyH.addEventListener('click', row1);
keyJ.addEventListener('click', row1);
keyK.addEventListener('click', row1);
keyL.addEventListener('click', row1);
keyZ.addEventListener('click', row1);
keyX.addEventListener('click', row1);
keyC.addEventListener('click', row1);
keyV.addEventListener('click', row1);
keyB.addEventListener('click', row1);
keyN.addEventListener('click', row1);
keyM.addEventListener('click', row1);
keyEnter.addEventListener('click', analyze);
keyBack.addEventListener('click', back);
