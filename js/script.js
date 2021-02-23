document.querySelector(".meny_knapp").addEventListener("click", showMeny)
document.querySelector(".fade_layer").addEventListener("click", showMeny)

function showMeny() {
    document.querySelector("nav").classList.toggle("visa")
    document.querySelector(".fade_layer").classList.toggle("synlig")
}