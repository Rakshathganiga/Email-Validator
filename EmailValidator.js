let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");

function checker() {
    let email = emailId.value.trim();

    if (email === "") {
        icon.style.display = "none";
        errorMsg.style.display = "none";
        emailId.style.border = "2px solid #d1d3d4";
    } else if (validateEmail(email)) {
        icon.style.display = "inline-block";
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = "#2ecc71";
        errorMsg.style.display = "none";
        emailId.style.border = "2px solid #2ecc71";
    } else {
        icon.style.display = "inline-block";
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = "#ff2851";
        errorMsg.style.display = "block";
        emailId.style.border = "2px solid #ff2851";
    }
}

function validateEmail(email) {
    let atIndex = email.indexOf("@");
    let dotIndex = email.lastIndexOf(".");
    if(atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 3){
        return true;
    }
    else{
        return false;
    }
}