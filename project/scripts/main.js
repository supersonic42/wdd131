/* Main */
const menuLinks = document.getElementsByClassName('desktop-menu-link');
const content = document.getElementsByClassName('content')[0];
const spinnerHTML = '<div class="spinner"></div>'; 
const mobileMenuLinks = document.getElementsByClassName('mobile-menu')[0].getElementsByTagName('a');

for (const mobileMenuLink of mobileMenuLinks) {
    mobileMenuLink.addEventListener('click', function(e) {
        document.getElementsByClassName('burger')[0].click();
    });
}

function onHashChange() {
    const hash = window.location.hash.slice(1);

    for (const el of menuLinks) {
        el.classList.remove('active');

        if (el.getAttribute('href') === '#' + hash) {
            el.classList.add('active');
        }
    };

    switch (hash) {
      case 'news':
        loadNews();
        break;
      case 'guides':
        loadGuides();
        break;
      case 'review':
        loadReview();
        break;
      default:
        loadHome();
        break;
    }
}

async function loadNews() {
    content.innerHTML = spinnerHTML;

    await sleep(300);
    
    let newsContent = '';

    const news = [
        {
            title: "Elden Ring: Nightreign",
            text: "We played the new Elden Ring spin-off and talked with FromSoftware about what to expect from the 2025 game.",
            imgPath: "images/news/elden-ring.jpg",
        },
        {
            title: "WoW Classic Phase 1 - Molten Core",
            text: "Our Class Writers have prepared Best-in-Slot Gear Guides for every Class and Role combination for WoW Classic Phase 1. Between Molten Core and Onyxia's Lair, there are plenty of options to choose from - and we've looked at all of them!",
            imgPath: "images/news/wow.jpg",
        },
        {
            title: "Diablo 4 Slay Holiday Event",
            text: "Starting on December 17, 10 a.m.—January 2, 10 a.m. PST, fight with your fellow wanderers across the globe to beat back the incursions of greedy mongrels for a heap of rewards. Band together with the entire Diablo IV community to reach global goblin slaying milestones, and tantalizing rewards will be yours for the taking.",
            imgPath: "images/news/diablo.jpg",
        },
    ];

    news.forEach(newsItem => {
        newsContent += `
            <section class="news">
                <div class="news-img-wrapper">
                    <img src="${newsItem.imgPath}" alt="${newsItem.title}">
                </div>
                <div class="news-content">
                    <h2>${newsItem.title}</h2>
                    <div class="news-content-text">${newsItem.text}</div>
                </div>
            </section>
        `;
    });

    content.innerHTML = newsContent;
}

async function loadGuides() {
    content.innerHTML = spinnerHTML;

    await sleep(300);
    
    let guidesContent = '';

    const guides = [
        {
            title: "Hogwarts Legacy Guide",
            contributors: 100,
            imgPath: "images/guides/hogwarts.webp",
        },
        {
            title: "Indiana Jones Guide",
            contributors: 200,
            imgPath: "images/guides/indiana-jones.webp",
        },
        {
            title: "GTA 5 Newbie Guide",
            contributors: 5000,
            imgPath: "images/guides/gta5.webp",
        },
    ];

    guides.forEach(guide => {
        guidesContent += `
            <section class="guide">
                <div class="guide-img-wrapper">
                    <img src="${guide.imgPath}" alt="${guide.title}">
                </div>
                <div class="guide-content">
                    <h2>${guide.title}</h2>
                    <div class="guide-contributors">Contributors: ${guide.contributors}</div>
                </div>
            </section>
        `;
    });

    content.innerHTML = '<div class="guides">' + guidesContent + '</div>';
}

async function loadReview() {
    content.innerHTML = spinnerHTML;

    await sleep(1000);

    content.innerHTML = '';
}

async function loadHome() {
    content.innerHTML = spinnerHTML;

    await sleep(3000);

    content.innerHTML = 'Welcome, Gamer!';
}

window.addEventListener('hashchange', onHashChange);

onHashChange();

// Service function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
