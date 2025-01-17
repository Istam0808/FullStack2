let str = "Hello world"

let vowels = ""
let constanst = ""
let pool = ""

str.toLowerCase().split("").forEach((letter) => {
    if ("aeiou".includes(letter)){
        vowels += letter
    }else if (" ".includes(letter)){
        pool += letter
    }else {
        constanst += letter
    }
})
console.log(`volwes: ${vowels}`)
console.log(`constants: ${constanst}`)