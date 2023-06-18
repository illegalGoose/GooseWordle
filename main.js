const array = [document.getElementById('keyQ'),
    document.getElementById('keyW'),
    document.getElementById('keyE'),
    document.getElementById('keyR'),
    document.getElementById('keyT'),
    document.getElementById('keyY'),
    document.getElementById('keyU'),
    document.getElementById('keyI'),
    document.getElementById('keyO'),
    document.getElementById('keyP'),
    document.getElementById('keyA'),
    document.getElementById('keyS'),
    document.getElementById('keyD'),
    document.getElementById('keyF'),
    document.getElementById('keyG'),
    document.getElementById('keyH'),
    document.getElementById('keyJ'),
    document.getElementById('keyK'),
    document.getElementById('keyL'),
    document.getElementById('keyZ'),
    document.getElementById('keyX'),
    document.getElementById('keyC'),
    document.getElementById('keyV'),
    document.getElementById('keyB'),
    document.getElementById('keyN'),
    document.getElementById('keyM')];

const keyBack = document.getElementById('keyBack');
const keyEnter = document.getElementById('keyEnter');

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

for (let  button of array){
    button.addEventListener('click', row1);
}

keyBack.addEventListener('click', back);
keyEnter.addEventListener('click', analyze);
