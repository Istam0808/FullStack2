// 1 objct inter 4
// ====////////////////////////////////////////////////////============
// Создайте функцию, которая принимает объект в качестве параметра и возвращает объект, отсортированный по его ключам 


// function Sort_Keys(obj) {
//     let sorted = Object.keys(obj).sort();  
//     let result = {};  

//     for (let key of sorted) {
//         result[key] = obj[key];  
//     }
//     return result;
// }

// let object = { 
//     b: 2, 
//     a: 1, 
//     e: 5,
//     c: 3,
//     d: 4
// };
// console.log(Sort_Keys(object));


// 2 fnc inter 5
// ====////////////////////////////////////////////////////============
// Напишите функцию, которая принимает два аргумента, строку и букву, и функция будет подсчитывать количество этой указанной буквы в строке.


// let word = "IIIiiiistam"
// let letter = "i"

// function find_letter(word,letter){
//     pool = 0
//     word = word.toLowerCase()
//     for(let i = 0; i < word.length; i++){
//         if(word[i].includes(letter)){
//             pool+=1
//         }
//     }
//     return pool
// }
// console.log(find_letter(word, letter))  


// 3 array inter 5
// ====////////////////////////////////////////////////////============
// Создайте функцию, которая принимает объект в качестве параметра и преобразует каждый ключ в обратный регистр (назад-вперёд) и возвращает новый объект. 


// function reverse_keys(obj) {
//     let result = {};
//     Object.keys(obj).forEach(key => {
//         let reversedKey = key.split("").reverse().join("");
//         result[reversedKey] = obj[key];
//     });
//     return result;
// }

// let obj = {
//     Allo: 1,
//     second: "Istam",
//     third: "Apple", 
//     istam:"1233"
// };

// console.log(reverse_keys(obj)); 



// ====////////////////////////////////////////////////////============

// function generate_ID(leng) {
//     let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-';
//     let result = '';
//     let charsLength = chars.length;

//     for (let i = 0; i < leng; i++) {
//         result += chars[Math.floor(Math.random() * charsLength)];
//     }
//     return result;
// }
// console.log(generate_ID(20));  


// ====////////////////////////////////////////////////////============


// function replace_vowel_to_next_vowel(str){
//     let vowels = ['a','e','i','o','u']
//     result = ''
//     for (let char of str) {
//         if (vowels.includes(char.toLowerCase())) {
//           let vowel_index = vowels.indexOf(char.toLowerCase());
//           let next_vowel_index = vowel_index + 1
//           if (next_vowel_index >= vowels.length) {
//             next_vowel_index = 0; 
//           }
//           let next_vowel = vowels[next_vowel_index];
    
  
//           if (char === char.toUpperCase()) {
//             result += next_vowel.toUpperCase();
//           } else {
//             result += next_vowel;
//           }
//         } else {
//           result += char;
//         }
//       }
//       return result;
//     }
    
//   console.log(replace_vowel_to_next_vowel("IstAm")); 
  

