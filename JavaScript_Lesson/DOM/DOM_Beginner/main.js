// const bodyElement = document.body;
// const FirstChild = bodyElement.firstChild;
// const LastChild = bodyElement.LastChild;

// console.log(bodyElement.hasChildNodes()) 


const tabButtons = document.querySelectorAll('.header button')
const bodyTabs = document.querySelectorAll('.body > div')


for (let btn of tabButtons) {
    btn.addEventListener('click', activateTab)

}


function activateTab(e){
    for (let btn of tabButtons) {
        btn.classList.remove('active')
    }
    for (let tab of bodyTabs) {
        tab.classList.remove('active')
    }

    const button = e.target
    button.classList.add('active')

    const cls = button.classList[0]
    const div = document.querySelector(`.${cls}-info`)
    div.classList.add('active')
}



























