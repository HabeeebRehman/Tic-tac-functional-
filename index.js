let winngCombination =[
    [1,2,3],
    [4,5,6], 
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];

const boxElement =document.querySelectorAll(".box");
let click =0 
let xAttempts =[]
let oAttempts =[]
let gamewin =false;

const msgBox=document.getElementById("message")
const resultBox = document.getElementById("result")

boxElement.forEach((box, index) =>{
    box.onclick = handleClick;
});

function handleClick(event) {
    let id =event.target.id;
    let pTag =document.createElement("p");

    pTag.setAttribute("class","text");
    pTag.style.color ="#F6B343";
    pTag.innerText = "X"

    boxElement[id -1].appendChild(pTag);
    
    if (click % 2 ==0){
        pTag.innerText = "X";
        
        xAttempts.push(parseInt(id));
        result(xAttempts, "X")
    } else{
        pTag.innerHTML ="O"

        oAttempts.push(parseInt(id));
        result(oAttempts,"O")
    }
    click++;

    if (click ==9 && gamewin ==false){
        resultBox.style.visibility = "visible"
        msgBox.innerText ="It's the tie"

    }

}

function result(playersArray,player){
    for(let i =0; i < winngCombination.length; i++ ){
        let check =true;
        for (let j=0;j <winngCombination[i].length; j++){
            if(!playersArray.includes(winngCombination[i] [j]))
            {
                check =false;
                break;
            }
   
      }
 
      if (check){
        gamewin = true;
        resultBox.style.visibility ="visible";
        msgBox.innerText = `${player}'s has won...`;
      }
    }

}

document.getElementById("button").onclick = () => {
    location.reload();

};