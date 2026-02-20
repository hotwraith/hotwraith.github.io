isChromium = !!window.chrome

let title = document.getElementById("name")
let image = document.getElementsByClassName("portrait")[0]

if(isChromium) {
    title.innerHTML = "Yes lul"
    image.src = "./assets/sop/ewicursed.webp"
} else {
    title.innerHTML = "Nop"
}