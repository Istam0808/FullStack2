// 1. у вас есть текст. Поменяйте местами первый и последний буквы в строке.
// обращайте внимание на большие и на маленькие буквы
// Например:  Cyber  ->  Rybec
// -----------------------------------
// let str = "Bimmiya"

// let first_letter = str[0]
// let last_letter = str.slice(-1)

// first_letter = first_letter.toLowerCase()
// last_letter = last_letter.toUpperCase()

// result = last_letter + str.slice(1,-1) + first_letter
// console.log(result)

// -----------------------------------

// 2. у вас есть текст. Найдите серединную букву и повторите его 3 раза в оригинальном тексте.
// Например:  Cyber  ->  Cybbber
// -----------------------------------

// let str = "Alisher"

// const MIDDLE = str.length / 2 
// let middle_letter = str.charAt(MIDDLE)
// let start_text = str.slice(0, MIDDLE)
// let end_text = str.slice(MIDDLE+1)
// let result = start_text + middle_letter.repeat(3) + end_text

// console.log(result)
// -----------------------------------




// 3. у вас есть текст и номер. Повторите пред-последнюю и вторую буквы по номер разу.
// Например:  
//   let str = "Cyber"
//   let num = 3
//   Результат должен быть: "Cyyybeeer"

// let str = "istam"
// let num = 5

// let before_last_letter = str[str.length-2]
// let second_letter = str[1]

// let result = str[0] + second_letter.repeat(num) + str.slice(2, -2) + before_last_letter.repeat(num) + str.slice(-1) 

// console.log(result)



let str = "istam"
let symbol = "$"

let before_last_letter = str[str.length-2]
let second_letter = str[1]

let result = str[0] + second_letter.replace(second_letter , symbol) + str.slice(2, -2) + before_last_letter.replace(before_last_letter, symbol) + str.slice(-1) 

console.log(result)


