/* Wind Chill */
const windChillValue = document.querySelector(".windChillValue");
const temperature = 5;
const windSpeed = 10;

const calculateWindChill = (temperature, windSpeed) => {
    if (temperature > 10 || windSpeed <= 4.8) {
        return "N/A";
    }

    return (
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
};

windChillValue.textContent = calculateWindChill(temperature, windSpeed);

/* Footer */
const today = new Date();
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = 'Last Modification: ' + document.lastModified;
