const navAnimation = () => {
    const minimenu = document.querySelector('.minimenu');
    const nav = document.querySelector('.nav-links');

    minimenu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navAnimation();