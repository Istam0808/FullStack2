// let name = prompt("Enter name:");
// let surname = prompt("Enter surname:");
// let age = prompt("Enter age:");

// function User(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }

// let user = new User(name, surname, age);

// console.log(user);





// let car = {
//     brand: "BMW",
//     model: "i8",
//     color: "white and blue",
//     year: 2019
// }
// let values = Object.values(car)
// console.log(values)



// let car = {
//     brand: "BMW",
//     model: "i8",
//     color: "white and blue",
//     year: 2019
// }
// let entries = Object.entries(car)
// console.log(entries.length)





let car = {
    brand: "BMW",
    model: "i8",
    color: "white and blue",
    year: 2019
}

function find_key(object, key){
    if (key.includes(object)){
        delete key
        return object
    }else{
        return object
    }
}

console.log(find_key(car,model))
