

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
console.log(String.raw`This is awesome`);   

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

 
 // ForEach
 const artists = ['Claption', 'U2', 'Bruno Mars', 'Lamar'];

//  for(var i = 0; i <artists.length; i++){
//      console.log(artists[i])
//  }

// ES6

artists.forEach(function(artist){
console.log(artist)
})

// forEach 2
const names = ['francis','lisa','marions','ron'];
let template = '';

names.forEach(function(name){
  //  document.body.insertAdjacentHTML("afterbegin", `<div>Hi, my name is ${name}</div>`)
template += `<div>Hi, my name is ${name}</div>`
});

document.body.insertAdjacentHTML('beforeend', template)

//forEach 3
var purchases = [
    {quantity: 2, amount: 100},
    {quantity: 5, amount: 100},
    {quantity: 10, amount: 100}
]

var total = 0;

for(var i = 0; i < purchases.length; i++){
    total += purchases[i].quantity * purchases[i].amount
}
console.log(total)
total = 0;

//ES6
purchases.forEach(function(item){
    total += item.quantity * item.amount
})

console.log(total) 

// exersize 1 foreach
const products = [
    {name:'Iphone',price:200},
    {name:'Motorola',price:70},
    {name:'Samsung',price:150},
    {name:'Sony',price:98},
    {name:'Windows pone',price:10}
 ];

 let template = "";
 
 products.forEach(function(product){
     function discount(){
         if(product.price < 100){
             return `<span>On sale !!</span>`
         }
     }
    
     template += `<div class="product"> 
      <h1>${product.name}</h1>
      ${discount()}
      <strong>Price: $ ${product.price} </strong>
      </div>`
 })

 document.body.insertAdjacentHTML('beforeend', template)
 

 const numbers = [1,2,3,4,5];
 const otherArray = numbers.map(function(number){
     return number * 10
 })
 //var otherArray = [];

//  for(var i = 0; i < numbers.length; i++){
//      otherArray.push(numbers[i]*10)
//  }
 console.log(otherArray)

 const users = [
     {user: 'Martin Jones', age: 32, eyes: 'brown'},
     {user: 'Jane Doe', age: 20, eyes: 'blue'},
     {user: 'Brian Wrecker', age: 40, eyes: 'brown'}
 ];

 const listOfUsers = users.map(function(user){
     return user.user

 })
 listOfUsers.forEach(function(name){
     const select = document.querySelector('select')

     select.insertAdjacentHTML("afterbegin", `<option value="${name}">${name}</option>`)
 })

 console.log(listOfUsers)

 //exersize 1 maps
 const paintings = [
    {name:'Mona lisa',width:200,height:200},
    {name:'The scream',width:400,height:600},
    {name:'The last supper',width:600,height:700}
 ]

 const messages = paintings.map(function(painting){
     return `The ${painting.name} is ${painting.width} X ${painting.height}`
 })
    console.log(messages)

    //exersize 2 maps
    const cars = [
        {name:'Ford',price:200},
        {name:'Nissan',price:400},
        {name:'Nissan',price:600}
     ]
     function convertPrice() {

     }
     const messages = cars.map(function(car){
         return `${car.name} is ${car.price * 1000} rubles`
     })
     console.log(messages)

const products = [
    {name: 'ipad', category: 'devices', number: 20, price: 200 },
    {name: 'Sony 3d', category:'TV', number: 0, price: 400},
    {name: 'E256', category:'Blender', number: 3, price: 50},
    {name: 'Super vision', category:'TV', number: 7, price: 500},
    {name: 'iphone 6+', category:'phones', number: 40, price: 2},
    
];
const result = products.filter(function(product){
    if (product.category === 'TV' && product.number > 0 && product.price > 200){
        return true
    } 
    return false
})
console.log(result)

//exercise 1 filters
const channels = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'Max',premium:true},
    {name:'Cooking channel',premium:false},
    {name:'WOBI',premium:false}
 ];

 const user = {
    name:'Francis',
    premium:true,
    premiumChannels:function(){
        // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
        const $this =this;
        return channels.filter(function(channel){
                return channel.premium && this.premium
        })
        
    },
    channels:function(){
        // GET THE NON-PREMIUM CHANNELS
        return channels.filter(function(channel){
                return channel.premium === false;
        })
    }
 }
 console.log(user.premiumChannels())
 // brings HBO and MAX
 console.log(user.channels())
 // brings LIFE, COOCKING CHANNEL AND WOBI
*/
//  const brands = [
//      {name: 'govnoapple', id:1},
//      {name: 'HP', id:2},
//      {name: 'Samsung', id:3},
//      {name: 'Samsung', id:4}
//  ];

//  const result = brands.find(function(brand){
//      return brand.name === 'Samsung'
//  })
//  console.log(result)

//  const cars = [
//      {brand: "Ford", price:500, available:2, type: 'Sport car'},
//      {brand: "Nissan", price:200, available:5, type: 'Wagon'},
//      {brand: "Chevy", price:300, available:4, type: 'Sport car'},
//      {brand: "Forsche", price:100, available:1, type: 'Urban'},
//  ];
 
//  function getResults(price, type){
//      return cars.find(function(car){
//          return car.price < price
//          && car.available > 0
//          && car.type === type
//      })
//  }

//  document.querySelector('.search').addEventListener("click",function(){
//      let price = parseInt(document.querySelector('#price').value)
//      let type = document.querySelector('#type').value
//      let results = getResults(price,type)

//      if(results){
//          console.log( `Found ${results.brand} for $ ${results.price}`)
//      } else {
//          console.log('sorry, no car for you, ha ha ha')
//      }
     
//  })

//  const students = [
//      {name: "Francis", grade: 6},
//      {name: "Martin", grade: 4},
//      {name: "Marta", grade: 1},
//  ]
//  let allStudentsPassedTheCourse = students.every(function(student){
//     return student.grade >= 6;
//  })
//  console.log(allStudentsPassedTheCourse);
//every & some
//  let allStudentsPassedTheCourse = students.some(function(student){
//     return student.grade >= 6;
//  })
//  console.log(allStudentsPassedTheCourse);

 //let allStudentsPassedTheCourse = false;

//  for (let i = 0; i < students.length; i++){
//      let student = students[i];

//      if(student.grade < 6){
//          allStudentsPassedTheCourse = false;
//          console.log("not Passed. ahah ha");
//          break;
        
//      }else{
//          allStudentsPassedTheCourse = true;
//          console.log("wow, all passed, lets go drink");
//      }
//  }
//every & some
// let allStudentsPassedTheCourse = false;

//  for (let i = 0; i < students.length; i++){
//      let student = students[i];

//      if(student.grade >= 6){
//          allStudentsPassedTheCourse = true;
//          console.log("not Passed. ahah ha");
//          break;
        
//      }else{
//          allStudentsPassedTheCourse = false;
//          console.log("wow, all passed, lets go drink");
//      }
//  }

// reduce

// const previous = 200;
// const current = [
//     {expense: 'Guitar', amount:200},
//     {expense: 'Mic', amount:100},
//     {expense: 'Starp', amount:100},
// ]

// const results = current.reduce(function(sum, expence){
// return sum + expence.amount 
// },previous)//starting point

// console.log(results)

// // reduce 2
// const users = [
//     {name: "Francis", lastname: 'Norton', age: 25},
//     {name: "Marta", lastname: 'Norton', age: 25},
//     {name: "rob", lastname: 'Norton', age: 25},
// ]

// const name = users.reduce(function(start, user){

//     start.push(user.name)
//         return start;
// },[]) // return array

// console.log(name)

// // reduce exersize 1
// const trips = [
//     {to:'Brazil',distance:1000},
//     {to:'Chine',distance: 2500},
//     {to:'India',distance: 3000}
//  ]

//  const km = trips.reduce(function(sum, to){
//     return sum + to.distance; 
//     },0)//starting point
    
//     console.log(km)
// // exersize 2 reduce
// const computers = [
//     {type:'Laptop',price:124, os:'Windows'},
//     {type:'Desk',price:124, os:'Mac'},
//     {type:'Desk',price:124, os:'Windows'},
//     {type:'Laptop',price:124, os:'Mac'},
//     {type:'Laptop',price:124, os:'Windows'},
//  ];

//  let ostypes = computers.reduce(function(start, item){
     //1 way
    // if (item.os === 'Mac'){
    //     return {mac:start.mac + 1, windows:start.windows}
    // }else{
    //     return {mac:start.mac, windows:start.windows + 1}
    // }
     //2 way
//      return item.os === 'Mac'? {mac:start.mac + 1, windows:start.windows}:
//      {mac:start.mac, windows:start.windows + 1}

//  },{mac:0, windows:0})
//     console.log(ostypes)


// const names = ["Jane","Thomas","James"];
//  for(let name of names){
//      console.log(name)
//  }

// const numbers = [10,20,30,40,50];
// let total = 0;

// for(let number of numbers){
//     total += number
// }
// console.log(total);

// const value = (name,age)=>{
//     return `My name is ${name} and age ${age}`
// }

// console.log(value("James",45));

// const value = (x,y) => x + y ;
// console.log(value(1,2))

// const cars = {
//     brands:['Ford','Audi','BMW'],
//     category:'Sport car',
//     message:function(){
//         return this.brands.map((brand) => {
//             console.log(`${brand} is a ${this.category}`)
//         })
//     }
// }

// cars.message();

//exersize 2

const names= ["James","Ron","Lisa","Tommy"];
let randomName = items => items[Math.floor(Math.random()*items.length)]
let randomNumber = (maxNumber,minNumber) => Math.floor(Math.random() * maxNumber) + minNumber;

console.log(`${randomName(names)} magic number is + ${randomNumber(5,2)}`)