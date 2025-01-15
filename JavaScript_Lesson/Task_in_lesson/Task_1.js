let str = "Hello world"

let vowels = ""
let constanst = ""

str.toLowerCase().split("").forEach((letter) => {
    if (("a,e,i,o,u").includes(letter)){
        vowels += letter
    }else {
        constanst += letter
    }
})
console.log(`volwes: ${vowels}`)
console.log(`constants: ${constanst}`)