const links = document.querySelectorAll('.link');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        for (let j = 0; j < links.length; j++) {
            links[j].classList.remove('active');
        }

        this.classList.toggle('active');
    });
}