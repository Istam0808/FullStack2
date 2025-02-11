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









    function Pyramid(levels, current = 1, current2 = levels) {
        if (current > levels) return;
        if (current2 == 0) return

        const sstars = ' '.repeat(2 * current - 1);   
        const stars = '*'.repeat(2 * current2 - 1)
        console.log(sstars + stars);        
      
        Pyramid(levels, current + 1, current2 -1);           
      }
      
      Pyramid(5); 
      


    // function InvertedPyramid(levels, current = levels, current2 = 1) {
    //     if (current == 0) return;  
    //     else if (current2 > levels) return;
    
    //     const sstars = ' '.repeat(2 * current - 1);
    //     const stars = '*'.repeat(2 * current2 - 1);   

    //     console.log(sstars+ stars);  
    //     InvertedPyramid(levels, current - 1,current2 + 1);  
    // }
    
    // InvertedPyramid(5);
    







