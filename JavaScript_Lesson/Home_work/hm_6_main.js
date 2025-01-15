// let number = 3
// let text = "Hello world"

// let pool = ''
// text.split("").forEach((letter) => {
//     pool += letter.repeat(number)
// })
// console.log(pool)




// let colors   = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
// let suffixes = ["th","st","nd","rd"]
// colors.forEach((color,index) =>{
//     let current = index + 1
//     // let suffix = index < 4 ? suffixes[current] : suffixes[0]
//     let suffix = "th"
//     if (current < 4){
//         suffix = suffixes[current]
//     }
//     let res = `${current + suffix} choise is ${color}`
//     console.log(res)
// })





// let arr = [NaN, 0, 15, false, -22, '' ,undefined,47,null]
// let pool= []
// arr.forEach((item) => {
//     if (item) {
//         pool.push(item)
//     }
// })
// console.log(pool)




// RU: Найти разницу между двумя массивами.
// -------------------
// let z = [1, 2, 3]
// let x = [100, 2, 1, 10]

// let pool = []
// z.forEach((zitem) => {
//     if (!x.includes(zitem)) {
//         pool.push(zitem)
//     } 
// })
// x.forEach((xitem) => {
//     if (!z.includes(xitem)) {
//         pool.push(xitem)
//     }
// })
// console.log(pool)
// Result  =>  ["3", "10", "100"]
// -------------------
// let z2 = [1, 2, 15]
// let x2 = [11, 3, 4, 1, 2]
// Result  =>  ["15", "11", "4", "3"]












