const body = document.body;
const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu');
const closeButton = document.querySelector('.burger-menu__close-button');
const navigation = document.querySelector('.header__nav-list');
const searchButton = document.querySelector('.header__search-button');
const entryField = document.querySelector('.header__input');
const crossButton = document.querySelector('.header__cross-button');

burgerButton.addEventListener('click', function openMenu() {
    burgerMenu.classList.remove('hidden');
    body.style.overflowY = 'hidden';

    closeButton.addEventListener('click', function closeMenu() {
        burgerMenu.classList.add('hidden');
        body.style.overflowY = '';
        this.removeEventListener('click', closeMenu);
    });
});

let searchItems = [
    searchButton,
    entryField,
    crossButton
];

const toggle = (arr, className) => {
    arr.map(item => {
        item.classList.toggle(className);
    });
};

searchButton.addEventListener('click', () => {
    toggle(searchItems, 'hidden');

    entryField.focus();

    if (document.body.offsetWidth > 1023)
        navigation.style.gap = '40px';

    crossButton.addEventListener('click', function defineCross() {
        toggle(searchItems, 'hidden');

        if (document.body.offsetWidth > 1023)
            navigation.style.gap = '60px';

        this.removeEventListener('click', defineCross);
    });
});