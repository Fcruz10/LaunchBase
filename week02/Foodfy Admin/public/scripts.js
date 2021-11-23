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

function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
  
    // Clone of las ingredient added
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Doesn't add a new input if the last is empty
    if (newField.children[0].value == "") return false;
  
    // Makes the input value empty
    newField.children[0].value = "";
    ingredients.appendChild(newField);
  }
  
  document
    .querySelector(".add-ingredient")
    .addEventListener("click", addIngredient);