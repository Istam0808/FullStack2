// function sumUp() {
//     let a = 5
//     let b = 5
//     return a + b
// }
// let r = sumUp()
// console.log(r)



// function sumUp(a,b) {
//     // let a = 5
//     // let b = 5
//     return a + b
// }
// console.log(sumUp(5,5))
// console.log(sumUp(5,2))
// console.log(sumUp(10,2))


// function blender(friut) {
//     console.log(`${friut} juice is ready!`)
// }

// blender('apple')
// blender('banana')
// blender('pineapple')

// let blender = (fruit) => {
//     let result = `${fruit} juice is ready`
//     return result
// }
// console.log(blender('pineapple'))





// function reverseNumber(number) {
//     // return String(number).split("").reverse().join("")
//     let number_as_text = String(number)
//     let split_text = number_as_text.split("")
//     let return_text = split_text.reverse()
//     let result = return_text.join("")
//     return result 
// }
// console.log(reverseNumber(1234))



let fizz_buzz = function (num) {
    if (num % 3 == 0 && num % 5 !== 0) {
        console.log("fizz")
    } else if (num % 5 == 0 && num % 3 !== 0) {
        console.log("buzz")
    } else if (num % 3 == 0 && num % 5 == 0) {
        console.log("fizzbuzz")
    } else {
        console.log(num)
    }
}
fizz_buzz(5)