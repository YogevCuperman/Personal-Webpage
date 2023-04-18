"use strict";

function contactMeButton() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const phonePrefix = document.getElementById("phonePrefix").value;
    const phone = document.getElementById("phone").value;
    if(!isValidName(fname)) {
        alert("Please enter a valid first name.\n" +
            "At least 2 characters which all are letters.");
    } else if(!isValidName(lname)) {
        alert("Please enter a valid last name.\n" +
            "At least 2 characters which all are letters.");
    } else if(!isValidPhoneNumber(phone)) {
        alert("Please enter a valid Israeli phone number.");
    } else {
        let msgSubject = "Please contact me";
        let msgBody = "Hello Yogev, my name is " + fname + " " + lname + ". " +
            "Plase contact me at this phone number: " + phonePrefix + "-" + phone;
        let uri = "mailto:yogev.cuperman@post.runi.ac.il";
        uri += "?subject=" + encodeURIComponent(msgSubject);
        uri += "&body=" + encodeURIComponent(msgBody);
        window.open(uri);
    }
}

function isValidName(name) {
    if(name.length < 2) return false;
    for(let i = 0; i < name.length; i++) {
        let c = Number(name.charCodeAt(i));
        if(c < 65 || (c > 90 && c < 97) || c > 122) return false;
    }
    return true;
}

function isValidPhoneNumber(phone) {
    if(phone.length != 7) return false;
    for(let i = 0; i < 7; i++) {
        let digit = Number(phone.charCodeAt(i)) - 48;
        if(digit < 0 || digit > 9) return false;
    }
    return true;
}

const contactButton = document.getElementById("contactButton");
contactButton.addEventListener('click', contactMeButton);