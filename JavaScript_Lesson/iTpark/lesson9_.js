// let x = ["a", "b", "c"]
// console.log(x)
// console.table(x)

// let tabel = {
//     color:"red",
//     color:"blue"
// }

// console.log(tabel)
// tabel["color"] = 'w'
// console.log(tabel)




// let client = {
//     name:"Istam",
//     surname:"mamadaliyev",
//     age:16
// }

// let keys = Object.keys(client)
// console.log(keys)
// let values = Object.values(client)
// console.log(values)
// let entries = Object.entries(client)
// console.log(entries)


let person = {
    name: "Istam",
    surname: "Mamadaliyev",
    age: 16
}


function Person(name, surname , age){
    this.name = name
    this.surname = surname
    this.age = age
    this.fullname = function() {
        return this.name + " " + this.surname
    }
}

let person1 = new Person("Warren", "Buffet", 80)
let person2 = new Person("Bill", "Gates", 70)
let person3 = new Person("Amal", "Jekson", '1200')

console.table(person1)
console.table(person2)
console.table(person3)
console.table(person3.fullname())


