function showHome() {
    document.getElementById("home-container").style.display = "block";
    document.getElementById("experience-container").style.display = "none";
    document.getElementById("about-container").style.display = "none";
}

function showExperience() {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("experience-container").style.display = "block";
    document.getElementById("about-container").style.display = "none";
}

function showAbout() {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("experience-container").style.display = "none";
    document.getElementById("about-container").style.display = "block";
}