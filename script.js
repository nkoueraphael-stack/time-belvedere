const filterLinks = document.querySelectorAll('[data-filter]');
const movies = document.querySelectorAll('.movie-card');
const rows = document.querySelectorAll('.catalog-row');

filterLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const filter = link.dataset.filter;
        const targetId = link.getAttribute('href');

        // Scroll vers la section
        if (targetId && targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Affichage des sections
        rows.forEach(row => row.style.display = 'none');

        if (filter === 'all') {
            rows.forEach(row => row.style.display = 'block');
        } else {
            document
                .querySelector(targetId)
                .style.display = 'block';
        }

        // Filtre des cartes
        movies.forEach(movie => {
            if (filter === 'all' || movie.dataset.category === filter) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    });
});
