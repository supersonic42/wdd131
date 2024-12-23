const menuToggler = document.querySelector('.menu-toggler');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');
const mainTitle = document.querySelector('main h2');

menuToggler.addEventListener('click', function() {
    header.classList.add('menu-active');
});

menuCloseBtn.addEventListener('click', function() {
    header.classList.remove('menu-active');
});

navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(e) {
        e.preventDefault();
        mainTitle.textContent = this.textContent;
        header.classList.remove('menu-active');

        /* Render filtered cards for each nav link */
        let linkId = navLink.getAttribute('id');
        let filteredTemples = temples;
        
        switch (linkId)
        {
            case 'nav-home':
                break;
            case 'nav-old':
                filteredTemples = temples.filter(temple => temple.dedicated.split(',')[0] < 1900);
                break;
            case 'nav-new':
                filteredTemples = temples.filter(temple => temple.dedicated.split(',')[0] > 2000);
                break;
            case 'nav-large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'nav-small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
        }

        createCards(filteredTemples);
    });
});

window.onload = (event) => {
    createCards(temples);
};

function createCards(filteredTemples) {
    let album = document.querySelector('.album');
    album.innerHTML = '';

    filteredTemples.forEach(temple => {
        let card = document.createElement('section')
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedication = document.createElement('p');
        let area = document.createElement('p');
        let img = document.createElement('img');

        card.classList.add('temple');
        name.textContent = temple.templeName;
        location.innerHTML = `<span>Location: </span><span>${temple.location}</span>`;
        dedication.innerHTML = `<span>Dedicated: </span><span>${temple.dedicated}</span>`;
        area.innerHTML = `<span>Size: </span><span>${temple.area} sq ft</span>`;

        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');
        
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        album.appendChild(card);
    });
}

/* Footer */
const today = new Date();
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = 'Last Modification: ' + document.lastModified;

/* Dynamic temples */
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
      templeName: "Santa Cruz Bolivia",
      location: "Santa Cruz, Bolivia",
      dedicated: "2024, June, 8",
      area: 29000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/santa-cruz-bolivia-temple/santa-cruz-bolivia-temple-48551-main.jpg"
    },
    {
      templeName: "San Jose California",
      location: "Sunnyvale, California, United States",
      dedicated: "2023, April, 2",
      area: 30000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-jose-california-temple/san-jose-california-temple-54993-main.jpg"
    },
    {
      templeName: "San Antonio Texas",
      location: "San Antonio, Texas, United States",
      dedicated: "2005, May, 22",
      area: 16800,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-antonio-texas-temple/san-antonio-texas-temple-55647.jpg"
    },
];
