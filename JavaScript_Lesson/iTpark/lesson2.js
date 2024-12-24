
let numbersLesson

// integer   =>   целое число      =>  10
// float     =>   не целое число   =>  10.2

// String + Number == String
// ex:   "Hello " + 5  => "Hello 5"
// -----------------------------------
// Number + Number == Number
// ex:    5 + 5  => 10
// -----------------------------------
// parseInt(...) =>  converts a string into a number
//              RU:  преобразует строку в целое число
// console.log("5" + 5)  // =>   "55"
// console.log(parseInt("5") + 5) //  =>   10


// let x = parseInt('qwe')
// console.log(x) // NaN   ->  Not a Number
// let a = NaN
// console.log(typeof(a)) // number

// let x = parseInt('123qwe')
// console.log(x)
// -----------------------------------
// let x = 5
// let a = typeof(x)
// let b = typeof("x")
// console.log(a)
// console.log(b)
// -----------------------------------
// let x = 5
// console.log("10a" - x)  // -> NaN  -> Not a Number
// console.log("10" - x)  // -> 5
// Here JS tries to help by converting a string into number 
// and then subtracting x from it
// RU: Здесь JS пытается помочь, преобразовав строку в число
//     и затем вычитая x из него
// -----------------------------------
// let x = 5
// EVAL => is a calculator that takes a string and calculates it
// RU: EVAL => это калькулятор, который берет строку и вычисляет ее
// let calc = eval("(100 - 1 + 10 - 9) / 10")
// console.log(calc)
// -----------------------------------
// let x = 5
// console.log(x ** 3) // 125   =>  5 * 5 * 5
// console.log(2 ** 3) // 8     =>  2 * 2 * 2
// -----------------------------------
// let x = 5
// % => Modulus (Division Remainder)  =>  Остаток от деления
// console.log(x / 2) // 2.5
// console.log(x % 2) // 1
// console.log(11 % 5) // 1
// console.log(15 % 2) // 1
// console.log(18 % 7) // 4
// -----------------------------------
// let x = 5
// x ++   // first it shows the original value of x, then adds 1
// ++ x   // 
// x ++

// x = x + 2
// x += 2

// console.log(x++) // 5
// console.log(x)  // 6
// =============
// console.log(++x) // 6
// console.log(x)  // 6
// -----------------------------------
// let x = 5
// x --   // first it shows the original value of x, then subtructs 1
// -- x   // 
// console.log(x--) // 5
// console.log(x)  // 4
// =============
// console.log(--x) // 4
// console.log(x)  // 4
// -----------------------------------
// let x = 5
// console.log(x == 5)  // true
// console.log(x == 10) // false
// -----------------------------------
// let x = 5
// console.log(x + 5)  // x == 10   (-, *, /, **, %) are the same
// console.log(x)      // x == 5  
// console.log(x += 5) // x == 10   (-=, *=, /=, **=, %=) are the same
// console.log(x)      // x == 10  
// -----------------------------------

//! integer  =>  целая цыфра  =>  int       =>  1
//! float    =>  не целая цыфра  => float   =>  1.100
//! +  Addition
//! -  Subtraction
//! *  Multiplication
//! /  Division
//! **  Exponentiation (ES2016) => степень
//! %  Modulus (Division Remainder)  =>  остаток
//! ++  Increment
//! --  Decrement
//! =    x = y         x = y
//! +=    x += y     x = x + y
//! -=    x -= y     x = x - y
//! *=    x *= y     x = x * y
//! /=    x /= y     x = x / y
//! %=    x %= y     x = x % y
//! **=   x **= y     x = x ** y


//!  ==  equal to (проверяет только значения)
//!  ===  equal value and equal type
//!  !=  not equal
//!  !==  not equal value or not equal type
//!  >      greater than
//!  <      less than
//!  >=  greater than or equal to
//!  <=  less than or equal to

// 2==2 && 3==3  // true
// 2==2 && 3==4  // false


2==4 || 2==3  // false
2==2 || 2==3 || 5==1 || 55==12  // true


//!  &&  and  =>  и      ...ham    
// ex:   1 == 1  &&  3 == 3  &&  5 == 5  =>  true
//       1 == 2  &&  3 == 3  &&  5 == 5  =>  false
//!  ||  or   =>  или    ... yoki ...
// ex:   1 == 1  ||  3 == 2  ||  5 == 2  =>  true
// ex:   1 == 2  ||  3 == 2  ||  5 == 2  =>  false
//!  !  not  =>  не ... ... emas
// ex:   1 != 1   =>  false
//       1 != 2   =>  true

//! typeof      Returns the type of a variable
// ex:  typeof("John")   =>  string



//! The maximum number of decimals is 17

//! NaN       =>  is a 'not a number'
//! parseInt(Number) => converts a number into Number() object
// RU:                 преобразует строку в целое число
// ex:  parseInt("10")  =>  10
//      parseInt("qwe") =>  NaN - Not a Number

//! isNaN() => checks if the object inside paratneses 
//            appears to not be a Number
//            Returns a Boolean value that indicates whether 
//            a value is the reserved value NaN (not a number)
//          RU: возвращает логическое значение, указывающее,
//              является ли значение зарезервированным значением NaN 
//              (не число)
// ex:   isNaN(10)     =>  false
//       isNaN("qwe")  =>  true


//! Division by 0 (zero) generates Infinity
// Infinity is a number: typeof Infinity returns number


//! .toFixed()      Returns a number written with a number of decimals
// ex: 10.345.toFixed(2)  =>  10.35

//!  .toPrecision()  Returns a number written with a specified length  
//  ex: 10.345.toPrecision(2)  =>  10
