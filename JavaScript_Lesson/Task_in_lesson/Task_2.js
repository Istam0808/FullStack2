// let typeFirstElement = function(list){
//     first_el = list[0]
//     return typeof(first_el)
// }
// console.log(typeFirstElement([2,"Istam", 1, 1]))


// let minut_to_sec = function(num){
//     return num * 60
// }
// console.log(minut_to_sec(2))






// let max_num = function(arr1 , arr2){
//     if (arr1 > arr2){
//         return `${arr1} is max num` 
//     }else{
//         return `${arr2} is max num`
//     }
// }
// console.log(max_num(3,2))



// function reverseText(text) {
//     return String(text).split("").reverse().join("")
// }
// console.log(reverseText("Hello"))




// function reverseNumber(number) {
//     return String(number).split("").reverse().join("")
// }
// console.log(reverseNumber(1234))


// let first_last_reverse = function(text){
//     let text_middle = text.slice(1,-1)
//     let first_letter = text[0]
//     let last_letter = text.slice(-1)
//     return last_letter + text_middle + first_letter
// }
// console.log(first_last_reverse("Hello"))



// let fizz_buzz = function (num) {
//     if (num % 3 == 0 && num % 5 !== 0) {
//         console.log("fizz")
//     } else if (num % 5 == 0 && num % 3 !== 0) {
//         console.log("buzz")
//     } else if (num % 3 == 0 && num % 5 == 0) {
//         console.log("fizzbuzz")
//     } else {
//         console.log(num)
//     }
// }
// fizz_buzz(5)



// function title(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
// let result = title("istam shoxa istam aaaa dsds");
// console.log(result);




// function max_word(text) {
//     let splited_text = text.split(" ");
//     return splited_text.reduce((current, next) => {
//         if (current.length > next.length) {
//             return current;
//         } else {
//             return next;
//         }
//     });
// }

// console.log(max_word("q qw qwe qweq qweqw qweqwe"));


// "aeiou"
// function length_vowels(text) {
//     return text.toLowerCase().split('').filter((letter) => "aeiou".includes(letter)).length;
// }
// console.log(length_vowels("Istam")); 







// function second_max_min(numbers){
//     numbers.sort((a, b) => a - b)
//     return console.log(`second min: ${numbers[1]} || second max: ${numbers[numbers.length-2]}`)
// }
// second_max_min([3,2,1,5,6,4,7])

