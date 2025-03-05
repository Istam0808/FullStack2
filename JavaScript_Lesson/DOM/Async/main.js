// let x = {"a":1,"b":2}
// let z = JSON.stringify(x)
// console.log(z)

// let a = JSON.parse(z)
// console.log(a)
// #==========================================================================================

// GET -> получать
// POST -> отправка 


const baseURL = "https://reqres.in"
async function getUsers(){
    const PATH = "/api/users?page=1"

    const response = await fetch(baseURL + PATH) 
    const data = await response.json()
    console.log(data)

for(let i of data.data)

}










