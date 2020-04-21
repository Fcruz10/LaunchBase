const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', function(){
        let cardImg = card.getElementsByTagName('img')[0];
        let imgSrc = cardImg.getAttributeNode('src').value;
        let imgAlt = cardImg.getAttributeNode('alt').value;

        modalOverlay.classList.add('active');

        modalOverlay.querySelector('img').src = `${imgSrc}`;
        modalOverlay.querySelector('img').alt = `${imgAlt}`

        modalOverlay.querySelector('.modal_title').innerHTML = card.querySelector('.card_title').textContent;
        modalOverlay.querySelector('.modal_author').innerHTML = card.querySelector('.card_author').textContent;
    })
};

document.querySelector('.modal_close').addEventListener('click', function(){

    modalOverlay.classList.remove('active');
});