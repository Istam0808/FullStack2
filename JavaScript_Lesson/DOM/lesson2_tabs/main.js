const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');



for (let tab of tabs) {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        // Удаление класса 'active' у всех вкладок и контента
        for (let t of tabs) {
            t.classList.remove('active');
        }
        for (let c of contents) {
            c.classList.remove('active');
        }

        // Добавление класса 'active' для выбранной вкладки и соответствующего контента
        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
}
