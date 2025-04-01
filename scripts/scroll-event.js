
const btnRight = document.getElementById('agenda-button-right');
const btnLeft = document.getElementById('agenda-button-left');

const agenda = document.getElementById('agenda-list');

btnLeft.addEventListener('click', function() {
    const scrollAgenda = agenda.clientWidth * 0.4;
    agenda.scrollBy({
        left: -scrollAgenda,
        behavior: 'smooth'
    });
});

btnRight.addEventListener('click', function() {
    const scrollAgenda = agenda.clientWidth * 0.4;
    agenda.scrollBy({
        left: scrollAgenda,
        behavior: 'smooth'
    });
});
