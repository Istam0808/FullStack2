// nums = [1,2,3,4]
// triple = nums.map((num) => num * 3)
// console.log(triple) 


// let x = [1,2,3,4]
// let z = [3,4,5,2]
// let pool = []
// x.forEach((number)=>{
//     if (z.includes(number)){
//         pool+=number
//     }
// })
// console.log(pool)


let strings = ["CYBER", "SECURITY", "JS", "HTML", "Web"]
let n = 3
let result = strings.filter((word)=>word.length > n)
console.log(result)