/*toggle for primary nav*/
document.getElementById("drop-menu").onclick = function() {
    var mNav = document.getElementById("main-nav");
    if (mNav.style.display == "none") {
        mNav.style.display = "flex";
    }else {
        mNav.style.display = "none";
    }
}
