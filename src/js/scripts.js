(() => {
    'use strict'

    var grid = document.querySelector('.grid');
    var iso = new Isotope( grid, {
        itemSelector: '.grid-item',
        layoutMode: 'masonry'
    });

    var filters = document.querySelectorAll('[data-filter]');

    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();
            filters.forEach(filter => {
                filter.classList.remove('filter-active');
            });

            e.target.classList.add('filter-active');

            let target = e.target.getAttribute('data-filter');

            target = target == '*' ? target : `.${target}`;

            iso.arrange({ filter: target });
        });
    })

})();