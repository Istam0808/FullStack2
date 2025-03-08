const username = document.querySelector('#username')
const surname = document.querySelector('#surname')
const food = document.querySelector('#food')
const age = document.querySelector('#age')
const button = document.querySelector('#submit1')

button.addEventListener('click', createUser)

async function createUser(e) {
    e.preventDefault()
    const URL = "http://localhost:3000/user"

    const data = {
        "name": username.value,
        "surname": surname.value,
        "favourite_food": food.value,
        "age": age.value
    }

    let res = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    let info = await res.json()
    console.log(info)
}

const brand = document.querySelector('#brand')
const cost = document.querySelector('#cost')
const button2 = document.querySelector('#submit2')
const productList = document.querySelector('#product-list')

button2.addEventListener('click', createProduct)

async function createProduct(e) {
    e.preventDefault()
    const URL = "http://localhost:3000/products"

    const data = {
        "brand": brand.value,
        "cost": cost.value
    }

    let res = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    let info = await res.json()
    console.log(info)

    getProducts()
}

async function getProducts() {
    const URL = "http://localhost:3000/products"

    let res = await fetch(URL)
    let products = await res.json()

    productList.innerHTML = ""

    products.forEach(product => {
        let li = document.createElement("li")
        li.innerHTML = `${product.brand} - $${product.cost} <span class="times" style="cursor:pointer" data-id="${product.id}">❌</span>`
        productList.appendChild(li)
    })

    document.querySelectorAll('.times').forEach(span => {
        span.addEventListener('click', deleteProduct)
    })
}

async function deleteProduct(e) {
    const productId = e.target.dataset.id
    const URL = `http://localhost:3000/products/${productId}`

    await fetch(URL, { method: "DELETE" })

    getProducts()
}

document.addEventListener('DOMContentLoaded', getProducts)
