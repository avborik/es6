// let mySet = new Set(['Harry','Ron','hermione','Hagrid','Harry']);

// for(let item of mySet){
//     console.log(item)
// }

// mySet.forEach((item)=>{
//     console.log(item)
// })

// let filtered = [...mySet].filter((item)=>{
//     return item.startsWith('H')
// })

// console.log(filtered)

let superHeroe = new Map();

superHeroe.set('Batman',{
    realName:'Bruce Wayne',
    power:'Millonaire',
    weakness:'None'
})

superHeroe.set('Superman',{
    realName:'Clark Kent',
    power:'All',
    weakness:'Not having power'
})

// for(let key of superHeroe){
//     // console.log(key)
//     // console.log(value)
// }

// superHeroe.forEach((value,key)=>{
//     console.log(key)
//     console.log(value)
// })

// console.log(Array.from(superHeroe.keys()));
// console.log(Array.from(superHeroe.values()));

let names = Array.from(superHeroe.values()).map(item =>{
   return item.realName
})

console.log(names)