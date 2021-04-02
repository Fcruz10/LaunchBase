const recipes = document.querySelectorAll('.card');
const content = document.querySelectorAll('.wrapper-content');

for (let i = 0; i < recipes.length; i++) {
    recipes[i].addEventListener("click", function () {
        window.location.href = `recipes/${i}`
    })
};

for (let button of content) {
    const hide = button.querySelector('.hide');
    const info = button.querySelector('.info');

    hide.addEventListener('click', function () {
        if (hide.textContent == 'Hide') {
            hide.textContent = 'Show';
            info.classList.add('hidden');
        } else {
            hide.textContent = 'Hide';
            info.classList.remove('hidden');
        }
    })
};