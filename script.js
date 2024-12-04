document.addEventListener("DOMContentLoaded", function () {
    var mainDiv = document.getElementById("main");
    var container = document.querySelector(".container");
    var isVisible = false;


    function toggleKitty() {
        if (isVisible) {
            mainDiv.style.display = "none"; 
        } else {
            mainDiv.style.display = "flex";
        }
        isVisible = !isVisible; 
    }

    container.addEventListener("click", toggleKitty);
});



document.addEventListener("DOMContentLoaded", function () {
    var mainDiv = document.getElementById("main2");
    var container2 = document.querySelector(".container2");
    var isVisible = false;


    function toggleSam() {
        if (isVisible) {
            mainDiv.style.display = "none"; 
        } else {
            mainDiv.style.display = "flex"; 
        }
        isVisible = !isVisible; 
    }


    container2.addEventListener("click", toggleSam);
});




document.addEventListener("DOMContentLoaded", function () {
    var mainDiv = document.getElementById("main3");
    var container3 = document.querySelector(".container3");
    var isVisible = false;


    function toggleBadtz() {
        if (isVisible) {
            mainDiv.style.display = "none"; 
        } else {
            mainDiv.style.display = "flex"; 
        }
        isVisible = !isVisible; 
    }


    container3.addEventListener("click", toggleBadtz);
})



document.addEventListener("DOMContentLoaded", function () {
    var mainDiv = document.getElementById("main4");
    var container4 = document.querySelector(".container4");
    var isVisible = false;


    function toggleSayuri() {
        if (isVisible) {
            mainDiv.style.display = "none"; 
        } else {
            mainDiv.style.display = "flex"; 
        }
        isVisible = !isVisible; 
    }


    container4.addEventListener("click", toggleSayuri);
})



document.addEventListener("DOMContentLoaded", function () {
    var mainDiv = document.getElementById("main5");
    var container5 = document.querySelector(".container5");
    var isVisible = false;


    function toggleKeroppi() {
        if (isVisible) {
            mainDiv.style.display = "none"; 
        } else {
            mainDiv.style.display = "flex"; 
        }
        isVisible = !isVisible; 
    }


    container5.addEventListener("click", toggleKeroppi);
})



document.addEventListener("DOMContentLoaded", function () {
    var mainDiv = document.getElementById("main6");
    var container6 = document.querySelector(".container6");
    var isVisible = false;


    function toggleDaniel() {
        if (isVisible) {
            mainDiv.style.display = "none"; 
        } else {
            mainDiv.style.display = "flex"; 
        }
        isVisible = !isVisible; 
    }


    container6.addEventListener("click", toggleDaniel);
})