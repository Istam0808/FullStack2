// arr = ["qwe", "Qweqwe", "qweqweqweqwe", "ihfkjnkjvnekjnklververvegv"]
// function big_text (argument){

//     let result = argument.reduce((current, next) => {
//         if (current.length > next.length) {
//             return current
//         } else {
//             return next
//         }
//     })
//     return result
// }
// console.log(big_text(arr))





// let arr = [1,2,3,4 ,'5a','g',5]
// result =  arr.filter((value)=>Number(value)).reduce((current, next)=> current + next)
// console.log(result)



// let arr = ['el2', 'el', 'str', 22, 11, '15www'];

// let result = arr
//   .filter(value => typeof value === 'number' || (typeof value === 'string' && !isNaN(parseInt(value)))) 
//   .map(value => parseInt(value)) 
//   .reduce((current, next) => current + next, 0); 
// console.log(result);




// let str = "Heooooooooiiiiiillo World"

// function vowels_big(sentence) {
//     return sentence.split('').map(letter => {
//         if('aioue'.includes(letter)){
//             return letter.toUpperCase()
//         }else{
//             return letter
//         }
//     }).join('');
// }
// console.log(vowels_big(str));