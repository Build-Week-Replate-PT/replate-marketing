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

    checkbox.addEventListener('change', function() {
        const head = document.querySelector('header');

        if (this.checked) {

            if (!head.classList.contains('box-shadow')) {
                head.classList.add('box-shadow');
            }

            const header = document.getElementById('header');

            document.addEventListener('click', function closeMenu(e) {
                let isClickInside = header.contains(e.target);

                if (!isClickInside) {
                    checkbox.checked = false;

                    if (window.scrollY === 0) {
                        head.classList.remove('box-shadow');
                    }

                    document.removeEventListener('click', closeMenu);
                }
            })
        } else if (!this.checked && window.scrollY == 0 && head.classList.contains('box-shadow')) {
            head.classList.remove('box-shadow');
        }
    })
});
