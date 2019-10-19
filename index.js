window.addEventListener('scroll', (e) => {
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    if (window.scrollY > 0) {
        header.classList.add('box-shadow');
    } else if (header.classList.contains('box-shadow')) {
        header.classList.remove('box-shadow');
    }
})

window.addEventListener('load', e => {
    const checkbox = document.getElementById('menu-btn');
    console.log('i am in here');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            const header = document.getElementById('header');
            console.log('here')

            document.addEventListener('click', function closeMenu(e) {
                console.log(e);
                let isClickInside = header.contains(e.target);

                console.log(isClickInside);

                if (!isClickInside) {
                    checkbox.checked = false;
                    document.removeEventListener('click', closeMenu);
                }
            })
        }
    })
});
