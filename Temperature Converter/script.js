const celciusC = document.getElementById("Celcius");
const fahrenheitF = document.getElementById("Fahrenheit");
const kelvinK = document.getElementById("Kelvin");

function calTemp(event) {
    const tempValue = event.target.value;

    switch (event.target.name) {
        case "Celcius":
            fahrenheitF.value = (tempValue * 9 / 5) + 32;
            kelvinK.value = parseFloat(tempValue) + 273.15;
            break;

        case "Fahrenheit":
            celciusC.value = (tempValue - 32) * 5 / 9;
            kelvinK.value = (tempValue - 32) * 5 / 9 + 273.15;
            break;

        case "Kelvin":
            celciusC.value = tempValue - 273.15;
            fahrenheitF.value = (tempValue - 273.15) * 9 / 5 + 32;
            break;

        default:
            break;
    }
}