let aboutMeInterval;

function showHome() {
    document.getElementById("home-container").style.display = "block";
    document.getElementById("experience-container").style.display = "none";
    document.getElementById("about-toni-container").style.display = "none";
    document.getElementById("about-sommer-container").style.display = "none";

    document.getElementById("bmenu").checked = false;
}

function showExperience() {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("experience-container").style.display = "flex";
    document.getElementById("about-toni-container").style.display = "none";
    document.getElementById("about-sommer-container").style.display = "none";

    document.getElementById("bmenu").checked = false;
}

function showAboutSommer() {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("experience-container").style.display = "none";
    document.getElementById("about-toni-container").style.display = "none";
    document.getElementById("about-sommer-container").style.display = "block";

    document.getElementById("bmenu").checked = false;

    aboutMeInterval = setInterval(() => {
    if (document.getElementById("tab-1").checked) {
        document.getElementById("tab-2").checked = true;
    } else if (document.getElementById("tab-2").checked) {
        document.getElementById("tab-3").checked = true;
    } else if (document.getElementById("tab-3").checked) {
        document.getElementById("tab-4").checked = true;
    } else if (document.getElementById("tab-4").checked) {
        document.getElementById("tab-5").checked = true;
    } else if (document.getElementById("tab-5").checked) {
        document.getElementById("tab-6").checked = true;
    } else {
        document.getElementById("tab-1").checked = true;
    } 
}, 5000);
}

function showAboutToni() {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("experience-container").style.display = "none";
    document.getElementById("about-toni-container").style.display = "block";
    document.getElementById("about-sommer-container").style.display = "none";

    document.getElementById("bmenu").checked = false;

    aboutMeInterval = setInterval(() => {
    if (document.getElementById("tab-7").checked) {
        document.getElementById("tab-8").checked = true;
    } else if (document.getElementById("tab-8").checked) {
        document.getElementById("tab-9").checked = true;
    } else if (document.getElementById("tab-9").checked) {
        document.getElementById("tab-10").checked = true;
    } else if (document.getElementById("tab-10").checked) {
        document.getElementById("tab-11").checked = true;
    } else {
        document.getElementById("tab-7").checked = true;
    } 
}, 5000);
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
