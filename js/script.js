document.querySelector(".meny_knapp").addEventListener("click", showMeny);
document.querySelector(".fade_layer").addEventListener("click", showMeny);
document.addEventListener("scroll", handleScroll);
document.querySelector(".to_top_knapp").addEventListener("click", scrollToTop);

function showMeny() {
    document.querySelector("nav").classList.toggle("visa");
    document.querySelector(".fade_layer").classList.toggle("synlig");
}

var scrollToTopBtn = document.querySelector(".to_top_knapp");
function handleScroll() {
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var GOLDEN_RATIO = 0.15;

    if ((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}