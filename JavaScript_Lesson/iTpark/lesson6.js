// Array  ->  list  ->  Массив  ->  Список  ->  list
// let a = [1, 2, 3]
// let result = Array.isArray(a)
// console.log(result)
// ------------------------------------------
// Adding elements into Array
// RU: Добавление элементов в массив
// UZ: Massivga element qo'shish

let a = [1, 2, 3]
// --------------------------------------
// PUSH -> adds to the end of the array
// RU: Добавляет в конец массива
// UZ: Massivning oxiriga qo'shadi
// a.push(10)
// console.log(a)
// --------------------------------------
// UNSHIFT -> adds to the beginning of the array
// RU: Добавляет в начало массива
// UZ: Massivning boshiga qo'shadi
// a.unshift(10)
// console.log(a)
// --------------------------------------
// POP -> removes the last element of the array
// RU: Удаляет последний элемент массива
// UZ: Massivning oxirgi elementini o'chiradi
// a.pop()
// console.log(a)
// --------------------------------------
// SHIFT -> removes the first element of the array
// RU: Удаляет первый элемент массива
// UZ: Massivning birinchi elementini o'chiradi
// a.shift()
// console.log(a)
// --------------------------------------
// SPLICE -> adds or removes elements from any position
// RU: Добавляет или удаляет элементы из любой позиции
// UZ: Elementlarni istalgan pozitsiyadan qo'shadi yoki o'chiradi

// SYNTAX:  [...].splice(start, deleteCount, ...items)
// [...].splice(начало, количество_удаленных_элементов, ...элементы)
// [...].splice(boshlash, o'chiriladigan_elementlar_soni, ...elementlar)

// let arr = ['a', 'b', 'c', 'd','a', 'b', 'c', 'd']
// arr.splice(1, 3, 3, 4, 5, 10)
// console.log(arr)

// ----------------------------------------------------------------
// let arr = ['a', '1', 'b', '2', 'c', '3']
// ['a', '1', 'b', '2', 'c', 1,2,3,4,5, '3']
// arr.splice(arr.length-1,  0,   1,2,3,4,5)
// console.log(arr)
// ------------------------------------------
// let arr = [1, 2, 3, 4, 5, 6, 8, 9]
// // ['a', 5, 6, 8, 9]
// arr.splice(0, arr.length/2, 'a')
// console.log(arr)
// -----------------------------------------
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// [1, 3, 4, 50, 6, 7, 9]

// arr.splice(1, 1)
// arr.splice(arr.length - 2, 1)
// arr.splice(arr.length / 2, 1, 50)
