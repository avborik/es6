

/*var divs = document.getElementsByTagName('div');
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

// template strings 2

const names = ["James", "Rone", "Ace"]

console.log(`The name is ${names}`)
console.log(`The name is ${names[Math.floor(Math.random() * names.length) + 1]}`)

const user = {
    name: 'Boris',
    age: 28,
    position: 'Senior developer king'
}
console.log(`My name is ${user.name}, I am ${user.age}, I work as ${user.position}`)

function request(page, id){
    var URL = "http://server.com/" + page + "/" + id;

    const URL1 = `http://server.com/${page}/${id}`;

    console.log(URL)
    console.log(URL1)
}

request('pages', 5)

// temlate strings 3
var list = document.querySelector('.user_list')

function addUser (name, lastname){
    /*var template = '';

   template += '<div class="user">'
   template += '<div>' + name + '</div>'
   template += '<div>' + lastname + '</div>'
   template += '</div>'

   

   // ES6
   var template =`
   <div class="user">
      <div>${name}</div>
      <div>${lastname}</div>
      </div>  
   `;
   list.insertAdjacentHTML("beforeend", template)

}

addUser('Francis','Jones');
addUser('Jane', 'Doe');

// Template strings 4

console.log("This\nis\nawesome\xa0")
//ES6
console.log(String.raw`This is awesome`);   */

//exersize 1 templates
const name = "Borik";
const lastname = "DevMaster";
let age = 28;
let profession = "Web developer";
let salary = 5000;

console.log(`My name is ${name}, i'm ${age} years old, I work as ${profession} and make ${salary}`);

// exersize 2 templates
const ul = document.querySelector('.players');
const players = [
    {jersey:56,name:"Djounte Murray",position:"Point guard",PPG:2.6},
    {jersey:98,name:"Dennis Rodman",position:"Small Forward",PPG:10.8},
    {jersey:1,name:"Michael Jordan",position:"Small Forward",PPG:345.6},
    {jersey:2,name:"Lebron James",position:"Shooting Guard",PPG:26.7},
    {jersey:33,name:"Patrick Ewing",position:"Center",PPG:20.2}
 ];

 let list = '';

 for(let i = 0; i < players.length; i++) {
     let player = players[i];

     list += `<li>${player.jersey} - ${player.name} -- Position: ${player.position} -- PPG: ${player.PPG}</li>`
 }

 ul.insertAdjacentHTML("beforeend",list)

 