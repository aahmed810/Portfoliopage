// slideshow home page // 
var i = 0;
var images = [];
var time = 2000;

// Image List
images[0] = "Images/Self1-0.png";
images[1] = "Images/saltflats.png";
images[2] = "Images/Fahzysalt.png";
images[3] = "Images/Whitesands.png";
images[4] = "Images/fahzy+ahmed.png";

// Change Image

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;


window.onload = swapBanners;
console.log("yo")

// enlarge image after click // 

// moving letter // 

// hover elements on //

/* validate contact form */
var form = document.getElementById('form');
var name = document.getElementById('name');
var email = document.getElementById('email');
var phonenum = document.getElementById('phonenum');
function validateForm() {
    if (name1.value == '') {
        alert('Name is required.');
        name1.focus();
        return false;
    }
    if (email.value == '') {
        alert('Email is required.');
        email.focus();
        return false;
    }
    if (email.value.indexOf('@', 0) < 0) {
        alert('Please enter a valid e-mail address.');
        email.focus();
        return false;
    }
    if (email.value.indexOf('.', 0) < 0) {
        alert('Please enter a valid e-mail address.');
        email.focus();
        return false;
    }
    if (phonenum.value == '') {
        alert('Please provide a Phone Number.');
        message.focus();
        return false;
    }
    return true;
}
form.onsubmit = validateForm;


//typewriter effect//
var messageArray = ["Front-end Developer + Film Photographer"];
var textPosition = 0;
var speed = 100;

typewriter = () => {
    document.querySelector("#message").
        innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

    if (textPosition++ != messageArray[0].length)
        setTimeout(typewriter, speed);
}
window.addEventListener("load", typewriter)




var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.src = "Images/moon.png";
    } else {
        icon.src = "Images/sun.png";
    }
}
