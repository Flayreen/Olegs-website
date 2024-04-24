const activeSvgList = document.querySelector('.header__burger-btn');
const hiddenDivList = document.querySelector('.header__navigation');
const closeSvg = document.querySelector('.header__navigation__burger_al svg');
const background = document.querySelector('.header__background');
const bursgerAl = document.querySelector('.header__navigation__burger_al');

activeSvgList.addEventListener('click', function (event) {
    event.stopPropagation();
    const computedStyle = window.getComputedStyle(hiddenDivList);
    if (computedStyle.left === '-235px') {
        hiddenDivList.style.left = '0'; 
        background.style.display = 'block';
        bursgerAl.style.display = 'block';
        document.body.classList.add('no-scroll');
    } else {
        hiddenDivList.style.left = '-235px';
        background.style.display = 'none';
        bursgerAl.style.display = 'none';
        document.body.classList.remove('no-scroll'); 
    }
});

closeSvg.addEventListener('click', function (event) {
    event.stopPropagation();
    hiddenDivList.style.left = '-235px';
    background.style.display = 'none';
    bursgerAl.style.display = 'none';
    document.body.classList.remove('no-scroll'); 
});

document.addEventListener('click', function (event) {
    const targetElement = event.target;
    if (!hiddenDivList.contains(targetElement) && targetElement !== activeSvgList && window.innerWidth < 768) {
        hiddenDivList.style.left = '-235px';
        background.style.display = 'none';
        bursgerAl.style.display = 'none';
        document.body.classList.remove('no-scroll'); 
    }
});

function adjustDivListPosition() {
    if (window.innerWidth < 768) {
        hiddenDivList.style.left = '-235px';  
    } else {
        hiddenDivList.style.left = '0px';
    }
}


// Викликаємо функцію при завантаженні сторінки та при зміні розміру вікна
window.addEventListener('load', adjustDivListPosition);
window.addEventListener('resize', adjustDivListPosition);


//Навігація по блокам

document.querySelectorAll('.header__navigation__nav__link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const yOffset = -120;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

        // Прокрутка до відповідного блоку
        window.scrollTo({ top: y, behavior: 'smooth' });

        // Закриття бургер меню та фонової підкладки, якщо ширина екрану менше 768px
        if (window.innerWidth < 768) {
            hiddenDivList.style.left = '-235px';
            background.style.display = 'none';
            bursgerAl.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    });
});



const burgerSections = [
    { link: document.querySelector('.header__navigation__nav__link[href="#about"]') },
    { link: document.querySelector('.header__navigation__nav__link[href="#skills"]') },
    { link: document.querySelector('.header__navigation__nav__link[href="#portfolio"]') },
    { link: document.querySelector('.header__navigation__nav__link[href="#feedback"]') }
];


function setActiveLink() {
    const screenHeight = window.innerHeight;

    const blockHeights = burgerSections.map(section => {
        const targetId = section.link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        return {
            id: targetId,
            height: targetElement.getBoundingClientRect().height
        };
    });

    const visibleBlocks = blockHeights.filter(block => {
        const targetElement = document.getElementById(block.id);
        const { top, bottom } = targetElement.getBoundingClientRect();
        return top < screenHeight && bottom > 0;
    });

    const maxVisibleBlock = visibleBlocks.reduce((prev, current) => {
        return (prev.height > current.height) ? prev : current;
    }, { height: 0 });

    burgerSections.forEach(section => {
        if (section.link.getAttribute('href').substring(1) === maxVisibleBlock.id) {
            section.link.classList.add('active');
        } else {
            section.link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('resize', setActiveLink);

setActiveLink();