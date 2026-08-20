// console.log("Heyy... I am using JS ")

//let and Var keyword

// function sum(a,b){
//     return a+b;
// }
// // const a=sum();
// // console.log("a="+a);
// function sumofsum(){
//     console.log(sum(40,30)+sum(10,400));
// }
// sumofsum();

// function info(Roll,name,college,branch){
//     return "Roll"+Roll+"name"+name+"college"+college+"branch"+branch;
// }
// function myinfo(){
//     const a =info("9005","chandra shekhar shah","abes","cse");
//     console.log(a);
// }
// myinfo();

// function generateNumber(){
//     return Math.floor(Math.random()*400);
// }
// const randomNumber=generateNumber();

// function findEvenNumber(){
//     const number1=generateNumber();
//     if(randomNumber%2==0){
//         console.log("Even number");
//     }

// }
// console.log(randomNumber);


// const sum=(a,b)=>{
//     return a+b;
// }
// const result=sum(20,50);


//IIFE
// (()=>{console.log("Hey....using IIFE")})();


// callback function 

// function sum(a,b);{
//     return a+b;
// }

// function sumWithMsg(clbk,msg){
//     const result=clbk(20,40);
//     return mag + result;
// }
// // sumWithMsg(sum, "Hii...Sum=");
// console.log(sumWithMsg(sum, "sum of two number is : "));


// function login(msg,error){
//     if (error){
//         console.log(error)
//     }else{
//         console.log(msg);
//     }
// }
// function loginhandler(username,password,callback){
//     const myusername = "Chandra";
//     const mypassword = "1234";
    
//     if (username === myusername && password === mypassword) {
//         callback("Login successful!", null);
//     } else {
//         callback(null, "Invalid username or password");
//     }
// }
// loginhandler("Chandra", "1234", login);

// setTimeout(()=>{console.log("Hello")},11000)


// setTimeout(() => {
//     console.log("One");

//     setTimeout(() => {
//         console.log("Two");

//         setTimeout(() => {
//             console.log("Three");

//             setTimeout(() => {
//                 console.log("Four");

//                 setTimeout(() => {
//                     console.log("Five");

//                     setTimeout(() => {
//                         console.log("Six");

//                         setTimeout(() => {
//                             console.log("Seven");

//                             setTimeout(() => {
//                                 console.log("Eight");

//                                 setTimeout(() => {
//                                     console.log("Nine");

//                                     setTimeout(() => {
//                                         console.log("Ten");
//                                     }, 1000);

//                                 }, 1000);

//                             }, 1000);

//                         }, 1000);

//                     }, 1000);

//                 }, 1000);

//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);



console.log( "One");
console.log( "Two");
console.log( "Three");