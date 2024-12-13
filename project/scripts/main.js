/* Main */
const menuLinks = document.getElementsByClassName('desktop-menu-link');
const content = document.getElementsByClassName('content')[0];
const spinnerHTML = '<div class="spinner"></div>'; 

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
      case 'feedback':
        loadFeedback();
        break;
      default:
        loadHome();
        break;
    }
}

async function loadNews() {
    // content.innerHTML = spinnerHTML;

    // await sleep(1000);

    // content.innerHTML = '';
}

async function loadGuides() {
    content.innerHTML = spinnerHTML;

    await sleep(1000);

    content.innerHTML = '';
}

async function loadFeedback() {
    content.innerHTML = spinnerHTML;

    await sleep(1000);

    content.innerHTML = '';
}

async function loadHome() {
    content.innerHTML = spinnerHTML;

    await sleep(1000);

    content.innerHTML = 'Welcome, Gamer!';
}

window.addEventListener('hashchange', onHashChange);

onHashChange();

// Service function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
