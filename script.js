const contactForm = document.querySelector(".contact-form");
const thankyouPopup = document.querySelector(".thankyou-popup");
const btnOk = document.querySelector(".btn-ok")


contactForm.addEventListener("submit",(event) => {
    event.preventDefault();
    const errorMessage = document.querySelector("#input-error");
    if (!validateName() || !validateEmail() || !validateSubject() || !validateMessage()){
        errorMessage.innerHTML="Please fill the following fields correctly";
        return false;
    }
    contactForm.style.display="none";
    thankyouPopup.classList.add("active");
})

btnOk.addEventListener("click",(event) => {
    thankyouPopup.classList.remove("active");
    contactForm.style.display="block";
    contactForm.reset();
})

function validateName(){
    let name = document.querySelector("#f-name");
    if (name.value.length == 0){
        name.classList.add("invalidInput");
        return false;
    }
    if(!name.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name.classList.add("invalidInput");
        return false;
    }
    name.classList.remove("invalidInput");
    name.classList.add("validInput");
    return true;
}

function validateEmail(){
    let email = document.querySelector("#f-email");
    if (email.value.length == 0){
        email.classList.add("invalidInput");
        return false;
    }
    if(!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email.classList.add("invalidInput");
        return false;
    }
    email.classList.remove("invalidInput");
    email.classList.add("validInput");
    return true;
}

function validateSubject(){
    let subject = document.querySelector("#f-subject");
    if (subject.value.length == 0){
        subject.classList.add("invalidInput");
        return false;
    }
    if(!subject.value.match(/^([A-Za-z0-9]+( [A-Za-z0-9]+)+)$/)){
        subject.classList.add("invalidInput");
        return false;
    }
    subject.classList.remove("invalidInput");
    subject.classList.add("validInput");
    return true;
}

function validateMessage(){
    let message = document.querySelector("#f-message");
    if (message.value.length <= 20){
        message.classList.add("invalidInput");
        return false;
    }
    message.classList.remove("invalidInput");
    message.classList.add("validInput");
    return true;
}