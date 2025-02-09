let a=10
let b=20
let c=30
// console.log(a);
// console.log(b);
// console.log(c);

let g=99//global scope
if (true) {//block scope
    let a=10
    let b=20
    let c=30
    //console.log(g)
}
//console.log(a);//error
//console.log(b);//error
//console.log(c);//30


function one(){
    const userName="shivam"

    function two(){
        const website="github"
        console.log(userName);
        
    }
    // console.log(website);
    two()
}
one()


function addOne(num){
    return num + 1
}
console.log(addOne(8));
