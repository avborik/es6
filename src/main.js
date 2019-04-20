let mySet = new Set(['Harry','Ron','hermione','Hagrid','Harry']);

// for(let item of mySet){
//     console.log(item)
// }

// mySet.forEach((item)=>{
//     console.log(item)
// })

let filtered = [...mySet].filter((item)=>{
    return item.startsWith('H')
})

console.log(filtered)