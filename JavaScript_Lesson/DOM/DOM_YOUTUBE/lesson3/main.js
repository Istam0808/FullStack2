const buttons = document.querySelector('button');
const span = buttons.querySelector('span');




buttons.addEventListener('click', toggleDarkTheme)

function toggleDarkTheme(e){
    document.body.classList.toggle('dark-theme')

    if (document.body.classList.contains('dark-theme')) {

        span.textContent = '🌑'
    }else{span.textContent = '☀️'}
    
}








// // button.addEventListener('click', //function_name)

// for (let btn of buttons) {
//     btn.addEventListener('click', handleClick);

// }
// function handleClick(e){
//     e.target.parentElement.style.backgroundColor = 'black';
//     e.target.parentElement.style.color = 'red';
//     // e.target.innerHTML = '<b>Bold Text</b>';
// }