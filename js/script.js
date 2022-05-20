Splitting();
ScrollOut({
   targets: '[data-splitting]'
});
AOS.init({
    mirror: true,
    once: true,
});
Array.from(document.querySelectorAll('.portfolio__item1')).forEach((el) => {
    const imgs = Array.from(el.querySelectorAll('img'));
    new hoverEffect({
        parent: el,
        intensity: el.dataset.intensity || undefined,
        speedIn: el.dataset.speedin || undefined,
        speedOut: el.dataset.speedout || undefined,
        easing: el.dataset.easing || undefined,
        hover: el.dataset.hover || undefined,
        imagesRatio: 1 / 3,
        image1: 'img/works/uber_bg.jpg',
        image2: 'img/12uber.jpg',
        displacementImage: 'img/1.jpg'
    });
});

        var myAnimation = new hoverEffect({
            parent: document.querySelector('.portfolio__item'),
            imagesRatio: 1 / 3,
            intensity: 0.3,
            
            image1: 'img/works/pulsebg.jpg',
            image2: 'img/1pulse.jpg',
            displacementImage: 'img/2.jpg'
        });

        var myAnimation = new hoverEffect({
            parent: document.querySelector('.portfolio__item2'),
            imagesRatio: 2 / 1,
            intensity: 0.3,
            
            image1: 'img/works/guitar.jpg',
            image2: 'img/guitarweb.jpg',
            displacementImage: 'img/3.jpg'
        });

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

