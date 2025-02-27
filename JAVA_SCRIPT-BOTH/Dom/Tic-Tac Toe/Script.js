let box=document.querySelectorAll(".box")
let reset=document.querySelector("#Reset")
let ngb=document.querySelector("#new-btn")
let msgc=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let ms=document.querySelector("#ms")
let pngb=document.querySelector("#newbtn")
let TurnO=true;//playerX,playerO

const resetbtn=()=>{
    TurnO=true;
    ebtn();
    msgc.classList.add("hide");
}




const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box Was clicked");
        if (TurnO) {
            box.innerText="O";
            TurnO=false;
        } else {
             box.innerText="X";
             TurnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const dbtn=()=>{
    for(let boxes of box){
        boxes.disabled=true;
    }
}



const ebtn=()=>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }
}




const showWinner=(Winner)=>{
msg.innerText=`Congratulation!, Winner is${Winner}`
msgc.classList.remove("hide")
dbtn()
}





//draw case

box.forEach((box)=>{
    
    box.addEventListener("click",()=>{
      
    });
msgc.classList.remove("hide");
});









const checkWinner=()=>{
    for(let pattern of win){
    let pos1Val=box[pattern[0]].innerText;
    let pos2Val=box[pattern[1]].innerText;
    let pos3Val=box[pattern[2]].innerText;
    if(pos1Val !="" && pos2Val !="" && pos3Val!=""){
         if(pos1Val ===pos2Val && pos2Val===pos3Val){
            console.log("Winner",pos1Val);
            showWinner(pos1Val);
         }
    }
    }
}





ngb.addEventListener("click",resetbtn);
reset.addEventListener("click",resetbtn);