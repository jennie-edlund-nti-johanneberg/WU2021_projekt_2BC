document.querySelector(".meny_knapp").addEventListener("click", showMeny)
document.querySelector(".fade_layer").addEventListener("click", showMeny)
/*  document.querySelector(".smooth_scroll").addEventListener("click", moreInfoScroll) */

function showMeny() {
    document.querySelector("nav").classList.toggle("visa");
    document.querySelector(".fade_layer").classList.toggle("synlig");
}

/* function moreInfoScroll() {
    document.querySelector("#footer").scrollIntoView({ behavior: "smooth", block: "end"});
} */