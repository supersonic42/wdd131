const today = new Date();
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = 'Last Modification: ' + document.lastModified;