"use strict";

function validateForm() {
    let fname = document.forms["myForm"]["fname"];
    let lname = document.forms["myForm"]["lname"];
    let Email = document.forms["myForm"]["email"];
    let mobile = document.forms["myForm"]["mobile"];
    let password = document.forms["myForm"]["password"];
    let cpassword = document.forms["myForm"]["cpassword"];
    var regXFirstName = /^([a-zA-Z]+)$/;
    if (fname.value.length < 6) {
        alert("The username needs to be at least 6 character long");
        fname.focus();
        return false();

    }
    if (!regXFirstName.test(fname.value)) {
        fname.style.border = "solid 2px red";
        document.getElementById("fnameLabel").innerHTML = 'the name can only have alphabet';
        document.getElementById("fnameLabel").style.visible = "visible";
        return false();
    } else {
        fname.style.border = "solid 2px green";
        document.getElementById("fnameLabel").innerHTML = 'The user is valid';
        document.getElementById("fnameLabel").style.color = "green";
        document.getElementById("fnameLabel").style.visible = "visible";

    }
}