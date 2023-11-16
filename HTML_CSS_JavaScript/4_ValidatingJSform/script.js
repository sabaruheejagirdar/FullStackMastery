function checkdata(){
    var username = document.getElementById("name");
    var emailid = document.getElementById("emailid");
    var isValid = true;

    if(username.value.trim() === "") {
        document.getElementById("name-error").innerText = "Please enter a valid name";
        isValid = false;
    } else {
        document.getElementById("name-error").innerText = "";
    }

    if(emailid.value.trim() === "") {
        document.getElementById("email-error").innerText = "Please enter a valid email";
        isValid = false;
    } else {
        document.getElementById("email-error").innerText = "";
    }

    return isValid;
}