let postCode = document.querySelector(".postCode");
let phoneNumber = document.querySelector(".phoneNumber");
let emailAddress = document.querySelector(".emailAddress");
let expText = document.querySelector(".expText");
let a = document.querySelectorAll("a");

// Events
postCode.addEventListener("click",addPostCode);
phoneNumber.addEventListener("click",addPhoneNumber);
emailAddress.addEventListener("click",addEmailAddress);
getPassword.addEventListener("click",addPassword)
// Functions
function addPostCode() {
    let re;
    re = /^[0-9]{4}$/;
    let postCodeNumber =prompt("Enter 4 digit post code number");
    if (re.test(postCodeNumber)) {
        expText.innerHTML = `<h2 class=" jumbotron">Your post code: ${postCodeNumber}</h2>`;
    } else {
        alert("Invalid Post code!")
    }
}

function addPhoneNumber() {
    let re;
    re = /^(\+)?(88)?01[0-9]{9}$/;
    let phone = prompt("Enter your phone number: ")
    if (re.test(phone)) {
        expText.innerHTML = `<h2 class=" jumbotron">Your phone number: ${phone}</h2>`;
    } else {
        alert("Invalid Phone number!")
    }
}

function addEmailAddress() {
    let re;
    re =/^([a-zA-z0-9]\.?)+[^\.]@([a-zA-z0-9]\.?)+$/;
    let email = prompt("Enter your email: ")
    if (re.test(email)) {
        expText.innerHTML = `<h2 class=" jumbotron">Your email address: ${email}</h2>`;
    } else {
        alert("Invalid Email!")
    }
}
