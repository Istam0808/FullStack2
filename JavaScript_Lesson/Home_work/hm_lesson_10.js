// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0; 
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 === 0) { 
//     sum += nums[i]; 
//   }
// }
// console.log("Сумма всех чётных чисел:", sum);

//=======================================================================================



// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12];
// let pool = nums[0]
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > pool){
//         pool = nums[i]
//     }
// }
// console.log("Самое большое число", pool)

//=======================================================================================

// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12];
// let pool = nums[0]
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < pool){
//         pool = nums[i]
//     }
// }
// console.log("Самое маленькое число", pool)

//=======================================================================================

// let str = "aj1dfd2km4dfd5mk3df4k2m4"
// let sum = 0
// let splited_str = str.split('')
// for(let i = 0; i < splited_str.length; i++){
//     if(!isNaN(Number(splited_str[i]))){
//         sum += Number(splited_str[i])
//     }
// }
// console.log(sum)

//=======================================================================================

// nums = 1
// for (let i = 101; i > nums; nums++) {
//     if (nums % 3 == 0 && nums % 5 !== 0) {
//         console.log(nums+":"+"Fizz")
//     } else if (nums % 5 == 0 && nums % 3 !== 0) {
//         console.log(nums+":"+"Buzz")
//     } else if (nums % 3 == 0 && nums % 5 == 0) {
//         console.log(nums+":"+"Fizz Buzz")
//     } else {
//         console.log(nums)
//     }
// }

//=======================================================================================

// let num = 123456
// num = String(num)
// num = num.split('')
// sum = 0

// for (let i=0; i < num.length; i++){
//     if (num[i] % 2 == 0){
//         sum += Number(num[i])
//     }
// }
// console.log(sum)

//=======================================================================================

// function countVowels(text) {
//     let pool = {
//         uppercases: "",
//         lowercases: ""
//     }
//     let vowels = 'aeiou'
//     let vowels_upper = vowels.toUpperCase()

//     for (let letter of text) {
//         if (vowels.includes(letter)) {
//             pool.lowercases += letter 
//         }else if (vowels_upper.includes(letter)) {
//             pool.uppercases += letter 
//         }
//     }
//     return pool

// }
// console.log(countVowels("MicroSOFT"))


