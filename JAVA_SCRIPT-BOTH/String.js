//console.log("Hello" +"Shivam");

const name="Shivam"
const age=22

//console.log(name + age + "value");

//console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName= new String('Shivam-sc')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString =gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);


const newStringOne ="    Shivam       "
console.log(newStringOne);
console.log(newStringOne.trim());//space gayab

const url="https://shivam.com/shivam%20Kumar"

console.log(url.replace('%20','_'));


