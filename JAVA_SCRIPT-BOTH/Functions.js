function addTwoNumbers(n1,n2){
 return (n1+n2);
 
}
//  const Result=addTwoNumbers(1,8)
//  console.log("result:",Result);
 
function loginUserMessage(username="Anoy"){
    if (!username) {
        console.log("Enter a valid name");
        return
    }
    return`${username} just logged in`
}
//console.log(loginUserMessage("Shivam"));

function calculateCartPrice(...num1){    //rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500))


const User={
    name:"shivam",
    n:1234
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.name}and number is ${anyObject.n}`);
}
handleObject(User)