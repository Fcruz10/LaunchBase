const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', function () {
        const pageId = card.getAttribute('id');
        card.addEventListener('click', function() {
            window.location.href = `courses/${pageId}`
        })
    })
};