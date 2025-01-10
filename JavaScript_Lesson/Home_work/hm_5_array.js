// Создайте массив с 4 элементами. Выведите в консоль второй элемент массива.

// let array = ["apple", "orange", "coconut", "mango"];
// console.log(array[1]);

//  --------------------------------------------------------------------------------------------------
// Создайте массив с 5-ю числами. Получите первое с конца число и проверьте его 
// на четность. Выведите  результат в консоль.

// let nums = [1,2,3,4,5]
// let last_num = nums.slice(-1)
// if(last_num % 2 == 0){
//     console.log("ваше последнее число в массиве ЧЕТНАЯ")
// }else{
//     console.log("ваше последнее число в массиве НЕ ЧЕТНАЯ")
// }

//  --------------------------------------------------------------------------------------------------

// const number = 7; 
// let isPrime = true; // Предполагаем, что число простое

// // Проверка чисел меньше 2
// if (number <= 1) {
//   isPrime = false;
// }

// // Проверяем делимость вручную для чисел от 2 до number / 2 (в данном случае фиксированные числа)
// else if (number > 1 && number % 2 === 0 && number !== 2) {
//   isPrime = false;
// }
// else if (number > 3 && number % 3 === 0) {
//   isPrime = false;
// }

// // Вывод результата
// console.log(`${number} ${isPrime ? "является" : "не является"} простым числом.`);









// let a = prompt("istam")
// let result = prompt("Istam", ["Istam_Ake"]);



// let age = prompt('Сколько тебе лет?');
// alert(`Тебе ${Number(age)} лет!`); // Тебе 100 лет!




// // Получаем число от пользователя
// let userInput = prompt("Введите любое число:");
// let number = Number(userInput); // Преобразуем ввод в число

// if (!isNaN(number)) { // Проверяем, что пользователь ввел корректное число
//   // Вычисляем значения
//   let half = number / 2; 
//   let quarter = number / 4; 

//   // Добавляем в массив
//   let numbersArray = [number, half, quarter];

//   // Считаем сумму
//   let sum = numbersArray.reduce((acc, current) => acc + current, 0);

//   // Выводим результат в консоль
//   console.log("Сумма всех чисел:", sum);
// } else {
//   console.log("Пожалуйста, введите корректное число!");
// }




// let z ="hello world"
// z.charAt(4)

// let num = [1, 5, 2, 22, 4, 33, 10]
// let fruits = ['mango', 'apple', 'banana', 'coconout']

// console.log(fruits.sort())
// console.log(num.sort((a, b) => a - b))



// 4 = Создайте массив с несколькими строками. Затем добавьте в середину массива
//  текст, который запрашивается у пользователя с помощью prompt(). Затем покажите массив в консоли. 


// let text = prompt("Enter Text")
// let list = ["ARR", "ARR", "ARR", "ARR", "ARR", "ARR"]
// const MIDDLE = Math.floor(list.length / 2)
// list.splice(MIDDLE, 0 , text)
// console.log(list)


// 5  ====  Создайте массив с несколькими числами. Затем удалите последний элемент в массиве и
// сохраните его в другую переменную.
// Затем проверьте, четное ли это число или нет. Выведите результат в консоль. 


// let nums = [1,2,3,4,5,6]
// let last = nums[nums.length-1]

// if (last % 2 == 0){
//   console.log("even")
// }else{
//   console.log("odd")
// }

// console.log(last)














