/* Wind Chill */
const windChillValue = document.querySelector(".windChillValue");
const temperature = 5;
const windSpeed = 10;
let windChillText = 'N/A';

const calculateWindChill = (temperature, windSpeed) => {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
};

if (temperature <= 10 && windSpeed > 4.8) {
    windChillText = calculateWindChill(temperature, windSpeed);
}

windChillValue.textContent = windChillText;

/* Footer */
const today = new Date();
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = 'Last Modification: ' + document.lastModified;
