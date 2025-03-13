// User elements
const username = document.querySelector('#username')
const surname = document.querySelector('#surname')
const food = document.querySelector('#food')
const age = document.querySelector('#age')
const button = document.querySelector('#submit1')
const usersList = document.querySelector('#users-list')
const userForm = document.querySelector('#user-form')
const updateUserBtn = document.querySelector('#update-user-btn')
const cancelUserBtn = document.querySelector('#cancel-user-btn')
const userIdInput = document.querySelector('#user-id')

// Product elements
const brand = document.querySelector('#brand')
const cost = document.querySelector('#cost')
const button2 = document.querySelector('#submit2')
const productList = document.querySelector('#product-list')
const productForm = document.querySelector('#product-form')
const updateProductBtn = document.querySelector('#update-product-btn')
const cancelProductBtn = document.querySelector('#cancel-product-btn')
const productIdInput = document.querySelector('#product-id')

// Event Listeners
button.addEventListener('click', createUser)
button2.addEventListener('click', createProduct)
updateUserBtn.addEventListener('click', updateUser)
updateProductBtn.addEventListener('click', updateProduct)
cancelUserBtn.addEventListener('click', cancelUserEdit)
cancelProductBtn.addEventListener('click', cancelProductEdit)

// User Functions
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

    clearUserForm()
    getUsers()
}

async function getUsers() {
    const URL = "http://localhost:3000/user"

    let res = await fetch(URL)
    let users = await res.json()

    usersList.innerHTML = ""

    users.forEach(user => {
        let li = document.createElement("li")
        li.innerHTML = `Name: "${user.name}" - Surname: "${user.surname}" - Age <${user.age}> - Favourite_food:"${user.favourite_food}" 
             <span class="edit-user" style="cursor:pointer; margin-left: 10px; color: blue;" data-id="${user.id}">✏️</span>
             <span class="times" style="cursor:pointer; margin-left: 5px;" data-id="${user.id}">❌</span>`
        usersList.appendChild(li)
    })

    document.querySelectorAll('.times').forEach(span => {
        span.addEventListener('click', deleteUser)
    })

    document.querySelectorAll('.edit-user').forEach(span => {
        span.addEventListener('click', editUser)
    })
}

async function deleteUser(e) {
    const userId = e.target.dataset.id
    const URL = `http://localhost:3000/user/${userId}`

    await fetch(URL, { method: "DELETE" })

    getUsers()
}

async function editUser(e) {
    const userId = e.target.dataset.id
    const URL = `http://localhost:3000/user/${userId}`

    let res = await fetch(URL)
    let user = await res.json()

    // Fill the form with user data
    username.value = user.name
    surname.value = user.surname
    food.value = user.favourite_food
    age.value = user.age
    userIdInput.value = user.id

    // Show update and cancel buttons, hide submit button
    button.style.display = 'none'
    updateUserBtn.style.display = 'inline-block'
    cancelUserBtn.style.display = 'inline-block'
}

async function updateUser(e) {
    e.preventDefault()
    const userId = userIdInput.value
    const URL = `http://localhost:3000/user/${userId}`

    const data = {
        "name": username.value,
        "surname": surname.value,
        "favourite_food": food.value,
        "age": age.value
    }

    let res = await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    let info = await res.json()
    console.log(info)

    // Reset the form and buttons
    cancelUserEdit()

    // Refresh the user list
    getUsers()
}

function cancelUserEdit() {
    clearUserForm()
    button.style.display = 'inline-block'
    updateUserBtn.style.display = 'none'
    cancelUserBtn.style.display = 'none'
    return false
}

function clearUserForm() {
    username.value = ''
    surname.value = ''
    food.value = ''
    age.value = ''
    userIdInput.value = ''
}

// Product Functions
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

    clearProductForm()
    getProducts()
}

async function getProducts() {
    const URL = "http://localhost:3000/products"

    let res = await fetch(URL)
    let products = await res.json()

    productList.innerHTML = ""

    products.forEach(product => {
        let li = document.createElement("li")
        li.innerHTML = `Brand Name> "${product.brand}" | Cost>> $${product.cost} 
             <span class="edit-product" style="cursor:pointer; margin-left: 10px; color: blue;" data-id="${product.id}">✏️</span>
             <span class="times" style="cursor:pointer; margin-left: 5px;" data-id="${product.id}">❌</span>`
        productList.appendChild(li)
    })

    document.querySelectorAll('.times').forEach(span => {
        span.addEventListener('click', deleteProduct)
    })

    document.querySelectorAll('.edit-product').forEach(span => {
        span.addEventListener('click', editProduct)
    })
}

async function deleteProduct(e) {
    const productId = e.target.dataset.id
    const URL = `http://localhost:3000/products/${productId}`

    await fetch(URL, { method: "DELETE" })

    getProducts()
}

async function editProduct(e) {
    const productId = e.target.dataset.id
    const URL = `http://localhost:3000/products/${productId}`

    let res = await fetch(URL)
    let product = await res.json()

    // Fill the form with product data
    brand.value = product.brand
    cost.value = product.cost
    productIdInput.value = product.id

    // Show update and cancel buttons, hide submit button
    button2.style.display = 'none'
    updateProductBtn.style.display = 'inline-block'
    cancelProductBtn.style.display = 'inline-block'
}

async function updateProduct(e) {
    e.preventDefault()
    const productId = productIdInput.value
    const URL = `http://localhost:3000/products/${productId}`

    const data = {
        "brand": brand.value,
        "cost": cost.value
    }

    let res = await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    let info = await res.json()
    console.log(info)

    // Reset the form and buttons
    cancelProductEdit()

    // Refresh the product list
    getProducts()
}

function cancelProductEdit() {
    clearProductForm()
    button2.style.display = 'inline-block'
    updateProductBtn.style.display = 'none'
    cancelProductBtn.style.display = 'none'
    return false
}

function clearProductForm() {
    brand.value = ''
    cost.value = ''
    productIdInput.value = ''
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    getUsers()
    getProducts()
})