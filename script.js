topBtn = document.querySelector(".topBtn")

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.classList.add("showBtn")
    } else {
        topBtn.classList.remove("showBtn")
    }
}

function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}