var demoElement = document.getElementById("demo")
var imgElement = document.getElementById("img")
var turnOnOffbtnElement = document.getElementById("turnOnOffbtn")

function turnOn() {
    demoElement.style.backgroundColor = "white"
    imgElement.src = "./imag/pic_bulbon.gif"
    turnOnOffbtnElement.innerHTML = "Turn Off"
}
function turnOff() {
    demoElement.style.backgroundColor = "black"
    imgElement.src = "./imag/pic_bulboff.gif"
    turnOnOffbtnElement.innerHTML = "Turn On"

}
function turnOnOff() {
    if (demoElement.style.backgroundColor == "white") {
        turnOff()
    } else {
        turnOn()
    }
}