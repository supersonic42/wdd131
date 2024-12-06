/* Products selector */
const productNameSelector = document.getElementById('product_name');
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

products.forEach(product => {
    let option = document.createElement('option');
    option.setAttribute('value', product.id);
    option.innerText = product.name;

    productNameSelector.append(option);
});

/* Star rating */
const ratingWrapper = document.getElementById('rating_wrapper');

for (let i = 1; i <= 5; i++) {
    let starWrapper = document.createElement('label')
    starWrapper.classList.add('star_wrapper');

    let stars = '&star;'.repeat(i);
    starWrapper.innerHTML = `<span>${stars}</span><input id="star${i}" type="radio" name="rating" value="${i}" required>`;

    ratingWrapper.append(starWrapper);
}

/* Useful Features */
const usefulFeaturesWrapper = document.getElementById('useful_features_wrapper');
const usefulFeatures = {
    "Durability": "durability",
    "Ease of Use": "ease_of_use",
    "Performance": "performance",
    "Design": "design",
};

for (const [key, value] of Object.entries(usefulFeatures)) {
    let featureWrapper = document.createElement('label');
    featureWrapper.classList.add('feature_wrapper');

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'useful_feature_' + value);
    checkbox.setAttribute('name', 'useful_feature[]');
    checkbox.setAttribute('value', value);

    let title = document.createElement('span');
    title.innerText = key;

    featureWrapper.append(checkbox);
    featureWrapper.append(title);

    usefulFeaturesWrapper.append(featureWrapper);
};

/* Footer */
const today = new Date();
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = 'Last Modification: ' + document.lastModified;
