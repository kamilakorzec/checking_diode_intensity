/**
 * Created by Klara on 2017-02-11.
 */
document.addEventListener("DOMContentLoaded", function() {

    var colorDisplay = document.querySelector("div.display");

    var colorType = document.querySelector('input[name=color-type]'), //display purpose only
        colorValue = document.querySelector('input[name=color-value]'),
        redButton = document.querySelector('button#red-button'),
        greenButton = document.querySelector('button#green-button'),
        blueButton = document.querySelector('button#blue-button');

    redButton.addEventListener("click", function() {
        colorDisplay.style.backgroundColor = "rgb(255,0,0)";
        colorValue.value=255;
        colorType.value="red"
    });

    greenButton.addEventListener("click", function() {
        colorDisplay.style.backgroundColor = "rgb(0,255,0)";
        colorValue.value=255;
        colorType.value="green"
    });

    blueButton.addEventListener("click", function() {
        colorDisplay.style.backgroundColor = "rgb(0,0,255)";
        colorValue.value=255;
        colorType.value="blue"
    })

    colorValue.addEventListener("change", function() {
        if(colorType.value === "red") colorDisplay.style.backgroundColor = "rgb(" + colorValue.value + ",0,0)";
        if(colorType.value === "green") colorDisplay.style.backgroundColor = "rgb(0," + colorValue.value + ",0)";
        if(colorType.value === "blue") colorDisplay.style.backgroundColor = "rgb(0,0," + colorValue.value + ")";
    })


});