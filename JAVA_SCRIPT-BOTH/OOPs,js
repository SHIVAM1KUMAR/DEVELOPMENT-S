//Singleton onject.create

//object literal
const mySym=Symbol("key1")

const JsUser={
    name:"Shivam",
    [mySym]:"Mysym1",
    age:22,
    email:"S2@gmail.com",
    location:"Dehradun",
    isLoggedIn:false,
    LastLoginDays:["Mondays","Saturdays"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log( typeof JsUser[mySym]);

JsUser.email="S@chatgpt@.com"
//console.log(JsUser)
//Object.freeze(JsUser)
//console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello js User");
    
}
JsUser.greetingTwo=function(){
    console.log(`Hello js User,${this.name}`);
    
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//*************************Part-2 **************************\\

//const tinderUser=new Object()//singleton object
const tinderUser ={}
tinderUser.Id="123abc",
tinderUser.name="Sammy",
tinderUser.isLoggedIn=false

//console.log(tinderUser);


const regularUser={
    email:"S2@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Shivam",
            lastname:"Kumar"
        }
    }
}
//console.log(regularUser.fullname.userFullname.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1 ,obj2}
const obj3 = Object.assign({},obj1,obj2)
const obj4 = {...obj1,...obj2}
//console.log(obj3);


const User =[
    {

    },
    {

    },
    {
        id:1,
        email:"S@gamil.com"
    }
]
User[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

//PART-3\\
const Course ={
    courseName:"JS Hindi ",
    price:"999",
    courseInstructor:"Hitesh"
}

//course.courseInstructor

const{courseInstructor}=Course
console.log(courseInstructor);


// const  navbar =({company})=>{

// }
// navbar(company ="Shivam") react

// {
//     "name":"sk",
//     "cn":"js",
//     "price":"free"
// }