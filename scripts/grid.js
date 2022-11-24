window.addEventListener('load', (event) => {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.grid-item',
        fitWidth: true
    });
});
