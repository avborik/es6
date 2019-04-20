// function *generator(){
//     yield 'First run';
//     yield 'second run';
//     yield 'third run';
//     return 'DONE';
// }

// const gen = generator();

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// function getOrder() {
//     return 'Pizza and cake'
// }

// function* logGenerator(){
//     alert('Hello, how can I help you')
//     yield 'Step 1 completed'

//     alert(`your order was ${getOrder()}`)
//     yield 'Step 2 completed'

//     alert('Thanks for eating here')
//     yield 'Step 3 completed'

//     return 'finished'
// }

// let gen = logGenerator();

// function* brands(){
//     yield 'Ford';
//     yield 'Nissan';
//     yield 'Chevy',
//     yield 'Toyota',
//     yield 'Honda'
// }

// const gen = brands();

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// let array = [];

// for(var i of brands()){
//     array = [...array,i]
// }
// console.log(array)

const stores = {
    store1: 'New York',
    store2: 'india'
}

const car = {
    id:1,
    brand:'Ford',
    doors:4,
    wheels:4,
    color:'Red',
    year:2017,
    model:'Mustang',
    stores:stores
}

// console.log(car.brand)
// console.log(car.year)
// console.log(car.model)
function *storesGenerator(storesObj){
    yield storesObj.store1;
    yield storesObj.store2;

}

function* carsGenerator(carObj){
    yield carObj.brand;
    yield carObj.year;
    yield carObj.model;
    // yield carObj.stores.store1;
    // yield carObj.stores.store2;
    yield* storesGenerator(carObj.stores)

}
let newCar = [];
for (let i of carsGenerator(car)){
    newCar = [...newCar,i]
} 
console.log(newCar)