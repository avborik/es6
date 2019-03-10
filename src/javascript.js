

var divs = document.getElementsByTagName('div');
for(let i = 0; i < divs.length; i++) {
    // node[i] => div 0
    // node[i] => div 1
    // node[i] => div 2
    // node[i] => div 3
    divs[i].addEventListener('click', function(){
        console.log('you clicked div #' + i)

    } )
}

const name = "James";
const employeeId = 25;
const eyes = "Blue";
let age = 25
let position = "Developer";
let salary = 2500;
let knowdlege = ['Javascript','PHP','REACT','Angular 4'];
let married = false;


//exersize 2 change to ES6 format

const cupcake = document.querySelector('.cupcake');
const container = document.querySelector('.orders')
 
const cupcakes = [
 {id:1,flavor:'Strawberry'},
 {id:2,flavor:'Apple'},
 {id:3,flavor:'Banana'}
]
 
let randomCupcake;
let orderNumber = 0;
const baseAmount = 5;
let finalAmount;
const dicountID = 2;
const dicountAmount = 3;
let message
 
cupcake.addEventListener("click",function(){
 // Select a random cupcake
 randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;
 
 // Increment the order number, we get a different order with each cupcake.
 orderNumber += 1;
 
 // Depending on the "dicountID" variable, this cupcake is on sale or not.
 finalAmount = dicountID == cupcakes[randomCupcake].id ? (baseAmount -dicountAmount ):baseAmount;
 
 // Create the message
 message = '<div>- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is '+ orderNumber + '</div>'
 container.insertAdjacentHTML('beforeend',message)
 
});


// lecture 211
function returnEmployee(){
    const name = "Francis";
    const age = 21;
    const position = "Manager";

    console.log(`His name is ${name}, he is ${age} years old and he works as ${position}`)}

returnEmployee();