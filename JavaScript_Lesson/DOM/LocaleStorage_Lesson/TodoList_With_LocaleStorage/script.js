const nameInp = document.querySelector("#todo-name")
const addTodoBtn = document.querySelector("#add-todo")
const todosBox = document.querySelector('.todos')
setUpTodos()

addTodoBtn.addEventListener('click', addTodo)

function addTodo(e) {
    if (nameInp.value.length == 0) return alert("Enter todo first ...")
    let todo = `
    <li>
        <span class="text">${nameInp.value}</span>
        <input type="color" class="color-picker" onchange="changeTextColor(event)">
        <span class="delete" onclick="DeleteTodo(event)">❌</span>
        <span class="change" onclick="ChangeTodo(event)">🔃</span>
    </li>
`
    saveTodos(todo)
    nameInp.value = ''
}

function changeTextColor(event) {
    const todoItem = event.target.previousElementSibling
    todoItem.style.color = event.target.value
}

function saveTodos(newTodo) {
    const todos = getTodosFromLS()
    todos.push(newTodo)
    localStorage.setItem("todos", JSON.stringify(todos))
    setUpTodos()
}

function setUpTodos() {
    todosBox.innerHTML = ""
    const todos = getTodosFromLS()
    for (let todo of todos) {
        todosBox.innerHTML += todo
    }
}

function getTodosFromLS() {
    return JSON.parse(localStorage.getItem("todos") || "[]")
}

function DeleteTodo(event) {
    const todoItem = event.target.parentElement
    const todoText = todoItem.querySelector('.text').textContent

    if (confirm(`Вы точно хотите удалить ToDo: "${todoText}"?`)) {
        const todos = getTodosFromLS()
        const updatedTodos = todos.filter(todo => !todo.includes(todoText))
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
        todoItem.remove()
    } else {
        event.preventDefault()
    }
}


function ChangeTodo(event) {
    const todoItem = event.target.parentElement
    const todoText = todoItem.querySelector('.text').textContent

    const todos = getTodosFromLS()
    const updatedTodos = todos.filter(todo => !todo.includes(todoText))
    localStorage.setItem("todos", JSON.stringify(updatedTodos))

    todoItem.remove()
    nameInp.value = todoText
}
