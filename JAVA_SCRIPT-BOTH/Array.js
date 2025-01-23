const myArray=[1,2,3,4,5,true,"Shivam"]
// console.log(myArray);

// console.log(myArray[1]);

//methods
myArray.push(6)
//console.log(myArray);
myArray.pop()
//console.log(myArray);

myArray.unshift(9)
//console.log(myArray);
myArray.shift()
//console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));


const Arr=[1,2,3,4]
const Arrr=[5,6,7,8]

//Arr.push(Arrr)
// console.log(Arr)[[]]
const finalArr=Arr.concat(Arrr)
//console.log(finalArr);

const all_Final_Arr=[...Arr,...Arrr]
console.log(all_Final_Arr);
