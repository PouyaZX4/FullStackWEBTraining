/* 
1. GRAB ELEMENTS 
Make sure these IDs match your HTML exactly
*/
const inputEL = document.getElementById("inputnumber")
const convertBtn = document.getElementById("convert-btn")
const lengthEL = document.getElementById("length-el")
const volumeEL = document.getElementById("volume-el")
const massEL = document.getElementById("mass-el")

/* 
2. CONVERSION CONSTANTS
*/
const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

/* 
3. INITIALIZE 
This runs when the page first loads.
It calculates for 20 so the cards aren't empty.
*/
render(20)

/* 
4. BUTTON CLICK LISTENER
*/
convertBtn.addEventListener("click", function() {
    let baseValue = parseFloat(inputEL.value)
    
    // If the input is empty, default to 20 (the placeholder value)
    if (isNaN(baseValue)) {
        baseValue = 20
    }

    render(baseValue)
})

/* 
5. THE RENDER FUNCTION
Handles all the math and updates the text on the screen
*/
function render(num) {
    // LENGTH (Meters/Feet)
    const feet = (num * meterToFeet).toFixed(3)
    const meters = (num / meterToFeet).toFixed(3)
    lengthEL.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`

    // VOLUME (Liters/Gallons)
    const gallons = (num * literToGallon).toFixed(3)
    const liters = (num / literToGallon).toFixed(3)
    volumeEL.textContent = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`

    // MASS (Kilograms/Pounds)
    const pounds = (num * kiloToPound).toFixed(3)
    const kilos = (num / kiloToPound).toFixed(3)
    massEL.textContent = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos`
}