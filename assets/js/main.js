const aboutMeInterval = setInterval(() => {
    if (document.getElementById("tab-1").checked) {
        document.getElementById("tab-2").checked = true;
    } else if (document.getElementById("tab-2").checked) {
        document.getElementById("tab-3").checked = true;
    } else if (document.getElementById("tab-3").checked) {
        document.getElementById("tab-4").checked = true;
    } else if (document.getElementById("tab-4").checked) {
        document.getElementById("tab-5").checked = true;
    } else {
        document.getElementById("tab-1").checked = true;
    } 
}, 5000);

function showHome() {
    document.getElementById("home-container").style.display = "block";
    document.getElementById("experience-container").style.display = "none";
    document.getElementById("about-container").style.display = "none";

    document.getElementById("bmenu").checked = false;
}

function showExperience() {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("experience-container").style.display = "block";
    document.getElementById("about-container").style.display = "none";

    document.getElementById("bmenu").checked = false;
}

function showAbout() {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("experience-container").style.display = "none";
    document.getElementById("about-container").style.display = "block";

    document.getElementById("bmenu").checked = false;
}

function changeExperienceRight() {
    if (document.getElementById("tabC-1").checked) {
        document.getElementById("tabC-2").checked = true;
    } else if (document.getElementById("tabC-2").checked) {
        document.getElementById("tabC-3").checked = true;
    } else {
        document.getElementById("tabC-1").checked = true;
    }
}

function changeExperienceLeft() {
    if (document.getElementById("tabC-1").checked) {
        document.getElementById("tabC-3").checked = true;
    } else if (document.getElementById("tabC-2").checked) {
        document.getElementById("tabC-1").checked = true;
    } else {
        document.getElementById("tabC-2").checked = true;
    }
}

function cancelAboutMeGallery() {
    clearInterval(aboutMeInterval);
}
