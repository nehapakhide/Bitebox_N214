// let a=10;
// let b=30;


// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

//ASSIGNMENT OPERATOR

// let a=40;
// let b=a;
// console.log(b);
// console.log(a+=2);
// console.log(a-=2);
// console.log(a*=2);
// console.log(a/=2);
// console.log(a%=2);

//COMPARISION OPERATOR
// let a=5;
// let b=10;
// console.log(a==b);
// console.log(a>b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a<b);
// console.log(a!=b);

 //LOGICAL OPERTAORS
// let a=true;
// let b=true;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

//TERNARY OPERATOR
// let a=25;
// let b=60;
// a>b?console.log("A is Greater"):console.log("b is greater");

// IF STATEMENT
// let a=15;
// let b=20;
// if(a>b){
//        console.log("value of A:" +a);
// }
// else{
//     console.log("value of b:" +b);
// }

//REAL TIME
// let username=prompt("enter username");
// let password=prompt("enter pasword");
// if(username=="User123" && password=="123456"){
//     console.log("User login on dashboard");
// }
// else{
//     console.log("wrong username & password .... Try again");
// }

// NESTED IF ELSE
// let age =15;
// let Nationality="Indian";

// if(age>=18){
//     if(Nationality=="Indian"){
//         console.log("You can vote");
//     }
//     else{
//       console.log("You are not eligible for vote");
//     }
// }
//     else{
//         console.log("Better luck next time")
//     }

//SWITCH STATEMENT CALCULATOR
// console.log("=======CALCULATOR=======");
// console.log("1.Addition\n2.Subtraction\n3.Multiplication\n4.Division");
// let choice= Number(prompt("enter the choice...!!!"));

// let a,b;

// switch(choice){
//     case 1 :
//         a=Number(prompt("enter first number"));
//         b=Number(prompt("enter second number"));
//       console.log("Addition:" +(a+b));
//     break;
//     case 2: 
//      a=Number(prompt("enter first number"));
//      b=Number(prompt("enter second number"));
//      console.log("Subtraction:" +(a-b));
//     break;
//     case 3: 
//      a=Number(prompt("enter first number"));
//      b=Number(prompt("enter second number"));
//      console.log("Multiplication:" +(a*b));
//     break;
//     case 4:
//       a=Number(prompt("enter first number"));
//       b=Number(prompt("enter second number"));
//      console.log("Divison:" +(a/b));
//      break;
//      default:
//         console.log("====Exit=====")
//     break;
// }

//FIND THE EVEN NUMBER FROM 1 TO 10

// let n=50

// for(let i=20;i<n;i++){
//     if(i%2!=0){
//     console.log(i);
// }
// }
//find sum of all numbers from 1 to 10
//2+4+6+8+10=30
// let sum=0;
// for(let i=1; i<=10; i++){
//     if(i%2==0){
//         console.log(sum);
//     }
//     sum+=i;
// }
// console.log(sum);
// let i=1;
// while(i<10){
//     if(i%2==0){
//     console.log(i);
//     }
//     i++;
// }
// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);
// let a=10;
// let b=23;
// function add(){
// console.log(a+b);
// }
// add();
// add();

//User define function
//function definition
// function greet(name){
//  console.log("Hello " + name     +"!!!!");
// }
// //function calling
// greet("Neha");

// function display(){
//     console.log("This is a display function");
// }
// display();
// function add(a,b){
//     console.log(a+b);
// }
// add(20,56);
// alert("Hi!!!");

// function salary( per_day,hr){
//     let overtime=100*hr
//     let sal_month=per_day * 30+overtime;
//     console.log(sal_month);
// }
// //for jan
// salary(1000,2);
// //for feb
// salary(1000,6);
// //for mar
// salary(1000,0);
// function evennumbers(){
//     for (let i=1; i<=20; i++){
//         if (i%2==0){
//         console.log(i);
//         }
//     }
// }
//  evennumbers();

// let name= prompt("enter any name: ");
// console.log(`Hello ${name}`);

// function greet(name){
//     console.log(`Hello ${name}`);
// }
// greet("Neha");
// ()=>console.log('Hello Neha');
// const greet=(name)=> `Hello ${name}`;
// console.log(greet("Pankaj"));

// let num=123.3456;
// console.log(num.toFixed(4))
// console.log(num.toPrecision(5))
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

//object
//  const user={
//      name:"Riya",
//      rollno:101,
//      collegename:"ABC college",
//  }
//  user.city="Nagpur";
//  console.log(user.city);
//  user.name="Neha";
//  console.log(user.name);
//  delete user.rollno;
//      address:{
//          city:"Nagpur",
//          Pincode: 12344555,
//     }
//  };
// console.log(user.name);     
// console.log(user.rollno);
// console.log(user.collegename);
// console.log(address.city);
// console.log(address.Pincode);

// console.log(user);
// const student=new Object();
// student.name="Neha";
// console.log(student.name);

//array store multiple values. in index base 
// let student=["Neha","Nagpur",63,true,1344.244];

// let product=[101,"laptop","blue",312455];
// console.log(product);
// console.log(product[1]);
// product.push("HP");
// product.unshift("A889167352");
// console.log(product.includes("DELL"))
// console.log(product.length);
// console.log(typeof(product));

// let product=[101,"laptop","blue",312455,"HP"];
// //for loop, foreach, for of

//  for(let i=0; i<product.length; i++){
//      console.log(product[i]);
//  }
// product.forEach(a=>{
//     console.log(a);
// })
// for(let value of product){
//     console.log(value);
// }

// let name="IT vedant"; //string
// console.log(name.length);
// console.log(name.charAt(3));
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// let symbol="$";
// console.log(symbol.repeat(5));

// let name="it vedant education pvt ltd";
// console.log(name.includes("pvt"));

// let name="Neha";
// console.log(name.length);
// console.log(name.toUpperCase());
// input=prompt("Enter username");

// let email="nehapakhide@07gmail.com";
// console.log(email.substring(0 , 4));

// let phone="1234567890";
// if(phone.length<=10){
//     console.log("Correct phone");
// }else{
//     console.log("Minimum 10 digits");
// }

// console.log(location.href);
// console.log(location.hostname);
// console.log(history.back());

// function sendOTP(){
//     document.getElementById("msg").innerText ="Sending OTP...";

//     setTimeout(() =>{
//         document.getElementById("msg").innerText ="OTP Sent !";
//     },5000);
// }

// let abc= document.getElementById('head');
// abc.style.color="red";
// abc.style.backgroundColor="pink";

// let tag=document.getElementsByTagName('p');
// // for(let i=0; i<tag.length; i++){
// //     tag[i].style.color ="red";
// // }

// let div1=document.getElementsByClassName('div1');
// for(let i=0; i<div.length; i++){
//     div1[i].style.color='blue';
// }

// // let paragraph=document.querySelector('#para1');
// // paragraph.style.background="red";

// document.querySelector('#para1').style.background="red";
// document.querySelector('.para').style.background="yellow";
// const div=document.querySelectorAll('div1');

// for(let i=0; i<div.length; i++){
//     div1[i].style.color="green";
// }

// let change=document.querySelector('#head');
// change.innerText="IT VEDANT";

// const newItem= document.createElement("li");
// newItem.textContent ="Item2"

// const list = document.getElementById("list");
// list.appendChild(newItem);

// const btn=document.createElement("button");
// btn.textContent="Click me!!";

// const btnappend=document.getElementById('div1');

// btnappend.appendChild(btn);

// btn.style.background="green";
// let head=document.getElementById('demo');

// function add(){
//     console.log("button click!!!");
//     head.innerText="HELLO IT VEDANT";
// }
// click();

// let button=document.getElementById('btn');

// button.addEventListener("mouseover",()=>{
//     console.log("Button was clicked");
// });
// let count=0;
// let head=document.getElementById('num');
// let button=document.getElementById('btn');
// let decrement=document.getElementById('decrement');
// let resetbtn=document.getElementById('reset');
// button.addEventListener("click",()=>{
//     count++;
//     democount();

// });

// decrement.addEventListener("click",()=>{
//     count--;
//     democount();
// });

// resetbtn.addEventListener("click",()=>{
//     count=0;
//     democount();
// });

// function democount(){
//     head.innerText=count;

// }

// const num=[1,2,3,4,5,6,7,8,9,10];
// const result=num.map(num=>num*2);
// console.log(result);

// const even=num.filter(num=>num%2==0);
// console.log(even);

// const sum=num.reduce((a,b)=>a+b,0);
// console.log(sum);

const username=document.getElementById('name');
const useremail=document.getElementById('email');
const usercity=document.getElementById('city');
const button=document.getElementById('btn');

async function clickuser(){
 
try{
    
       
const response= await fetch("https://randomuser.me/api/");
const data=await response.json();

const user=data.results[0];

username.textContent=`${user.name.first} ${user.name.last}`;
useremail.textContent=user.email;
usercity.textContent=user.location.country;
}catch(error){
    username.textContent="Failed to load user";
}
}

button.addEventListener("click",clickuser)