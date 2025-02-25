// function search_bin(arr, target) {
//     let first = 0;
//     let last = arr.length - 1;

//     for (let i = 0; first <= last; i++) {
//         let mid = Math.floor((first + last) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             first = mid + 1;
//         } else {
//             last = mid - 1;
//         }
//     }

//     return -1;
// }

// let numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// let target = 11;

// let result = search_bin(numbers, target);

// if (result == -1) {
//     console.log("Элемент не найден в массиве");
// } else {
//     console.log(`Элемент найден в индексе ${result}`);
// }









// function Pyramid(levels, current = 1, current2 = levels) {
//     if (current > levels) return;
//     if (current2 == 0) return

//     const sstars = ' '.repeat(2 * current - 1);   
//     const stars = '*'.repeat(2 * current2 - 1)
//     console.log(sstars + stars);        

//     Pyramid(levels, current + 1, current2 -1);           
//   }

//   Pyramid(5); 



// function InvertedPyramid(levels, current = levels, current2 = 1) {
//     if (current == 0) return;  
//     else if (current2 > levels) return;

//     const sstars = ' '.repeat(2 * current - 1);
//     const stars = '*'.repeat(2 * current2 - 1);   

//     console.log(sstars+ stars);  
//     InvertedPyramid(levels, current - 1,current2 + 1);  
// }

// InvertedPyramid(5);




// function factorial(n) {
//   if (!typeof(n == Number) || n < 0) {
//     return 1;
//   }
//   else {
//     return n * factorial(n - 1)
//   }
// }
// let result = factorial(5);
// console.log(result);




// function factorial(n) {
//   if (!Number.isInteger(n) || n < 0) {
//     console.log("Аргумент должен быть неотрицательным целым числом.");
//     return;
//   }
  
//   return n === 0 ? 1 : n * factorial(n - 1);
// }

// console.log(factorial(5.5));






// const shoppingMallData = {
//   shops: [
//       {
//           width: 10,
//           length: 5
//       },
//       {
//           width: 15,
//           length: 7
//       },
//       {
//           width: 20,
//           length: 5
//       },
//       {
//           width: 8,
//           length: 10
//       }
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 5000000
// }



// function isBudgetEnough(data) {
//   let totalArea = data.shops.reduce((sum, shop) => sum + (shop.width * shop.length), 0);
//   let totalVolume = totalArea * data.height;
//   let totalCost = totalVolume * data.moneyPer1m3;
  
//   return totalCost <= data.budget ? 'Бюджета достаточно' : 'Бюджета недостаточно';
// }

// console.log(isBudgetEnough(shoppingMallData));










