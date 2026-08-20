// Refresh
window.addEventListener("load", function() {
    window.scrollTo(0,0);
    history.replaceState(null, null, window.location.pathname);
});

// Skill button
document.getElementById("skill-btn")
.addEventListener("click", function () {
    document.getElementById("skills").scrollIntoView({
        behavior:"smooth",
        block:"center"
    });
});

// Download CV button
document.getElementById("cv-btn")
.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "CV-Marwan-Moqbel.pdf";
    link.download = "CV-Marwan-Moqbel.pdf";
    link.click()
});