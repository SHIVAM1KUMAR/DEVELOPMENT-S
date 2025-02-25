let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("Btn1 Wa clicked");
//     let a=25;
//     a++;
//     console.log(a);
    
    
// }

btn1.addEventListener("click",(evt)=>{
    console.log("Button 1 was clicked");
    console.log(evt);
    
    
})
btn1.addEventListener("click",()=>{
    console.log("Button 1 was clicked 2 time");
    
})

let box=document.querySelector("div");
// box.onmouseover=()=>{
//     console.log("Div Inside r u");
    
// }

let mbtn=document.querySelector("#m");
let currm="light";
mbtn.addEventListener("click",()=>{
    //console.log("You are trying to change mode");
    if(currm==="light"){
       currm="dark";
        document.querySelector("body").style.backgroundColor="Black"
    }else{
        currm="light";
           document.querySelector("body").style.backgroundColor="white"
    }
    console.log(currm);
    
})