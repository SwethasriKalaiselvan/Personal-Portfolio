let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    header.classList.toggle('active');
    document.body.classList.toggle('active');
}

window.onscroll = () => {
    if (window.innerWidth < 991) {
        menu.classList.remove('bx-x');
        header.classList.remove('active');
        document.body.classList.remove('active');
    }
}
