const input = document.querySelector('#text-input');
const button = document.querySelector('button');
const ul = document.querySelector('.items');
const input_color = document.querySelector('#color-input')
const box = document.querySelector('.box')
const input_for = document.querySelector('#text-input-2');

input_for.addEventListener('input', duplicateLetters);

function duplicateLetters(e) {
    const originalText = e.target.value;
    let duplicatedText = '';

    for (let char of originalText) {
        duplicatedText += char.repeat(2);
    }
    e.target.value = duplicatedText;
}




function createItem(e) {
    if (input.value == "") {
        alert("please enter a text")
        return
    }
    

const li2 = `
<li class="item2">
    <span class="item-text">${input_for.value}</span>
    <span> <input onclick="changeText(event)" class="input-check" type='checkbox'></span>
    <span> <input oninput="changeColor(event)" class="color-input" type='color'></span>
    <span onclick="deleteItem(event)" class="delete-item">❌</span>
    <span> <input oninput="changeSize(event)" class="size-range" type='range' max="60" min="6" value='6'></span>
    <span> <input oninput="changeSizeBar(event)" class="size-range-bar" type='range' min="-200" max="200"></span>
</li>
`
ul.innerHTML += li2
input_for.value = ""
}

                                                                                                                      
          
button.addEventListener('click', createItem)


function createItem(e) {
    if (input.value == "") {
        alert("please enter a text")
        return
    }
    
    // const li = document.createElement('li')
    // li.textContent = input.value
    // ul.appendChild(li)
    
    const li = `
    <li class="item">
        <span class="item-text">${input.value}</span>
        <span> <input onclick="changeText(event)" class="input-check" type='checkbox'></span>
        <span> <input oninput="changeColor(event)" class="color-input" type='color'></span>
        <span onclick="deleteItem(event)" class="delete-item">❌</span>
        <span> <input oninput="changeSize(event)" class="size-range" type='range' max="60" min="6" value='6'></span>
        <span> <input oninput="changeSizeBar(event)" class="size-range-bar" type='range' min="-200" max="200"></span>
    </li>
    `
    ul.innerHTML += li
    input.value = ""
}




function deleteItem(e){
    e.target.parentElement.remove()
}

function changeColor(e){
    e.target.parentElement.parentElement.style.backgroundColor = e.target.value; 
}
     
function changeSize(e){
    e.target.parentElement.parentElement.style.fontSize = `${e.target.value}px`; 
}

function changeText(e) {
    const li = e.target.closest('.item'); 
    const itemText = li.querySelector('.item-text'); 
    
    if (e.target.checked) {  
        itemText.style.textDecoration = "line-through";
        itemText.style.color = "#333";
        e.target.parentElement.parentElement.style.opacity = "0.5"; 


    } else {
        itemText.style.textDecoration = "none"; 
        e.target.parentElement.parentElement.style.opacity = "1"; 

    }
}

function changeSizeBar(e) {
    const li = e.target.closest('.item'); 
    const value = e.target.value; 
    li.style.transform = `translateX(${value}px)`; 

}

 



