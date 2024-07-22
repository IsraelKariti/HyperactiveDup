const top1 = document.getElementById("top1");
top1.scrollIntoView();

const hamburgerButton = document.getElementsByClassName("hamburger-button")[0];
const headerExtension = document.getElementsByClassName("header-extension")[0];
const homeCloseExtension = document.getElementById("home-close-menu");
const hamburger1 = hamburgerButton.getElementsByClassName("hamburger-1")[0];
const hamburger2 = hamburgerButton.getElementsByClassName("hamburger-2")[0];
const hamburger3 = hamburgerButton.getElementsByClassName("hamburger-3")[0];
const careerExtDrop = document.getElementById("career-extension-drop");
const careerExtDropList = careerExtDrop.getElementsByClassName("list")[0];

const modal1 = document.getElementsByClassName("modal-1")[0];
const modalIntro = document.getElementsByClassName("modal-intro")[0];
const modalCircle = document.getElementsByClassName("modal-circle")[0];
const modal3 = document.getElementsByClassName("modal-3")[0];
const modal3ButtonClose = modal3.getElementsByClassName("button-close")[0];
const modalIntroForm = modalIntro.getElementsByTagName("form")[0];
const modalntroFormFullName = modalIntroForm.getElementsByClassName("full-name")[0];
const modalntroFormPhoneNumber = modalIntroForm.getElementsByClassName("phone-number")[0];
const modalntroFormEmailAddress = modalIntroForm.getElementsByClassName("email-address")[0];
const modalntroFormButton = modalIntroForm.getElementsByTagName("button")[0];
const modalThankYouContainer = modalIntro.getElementsByClassName("thank-you-container")[0];
const modalThankYou = modalIntro.getElementsByClassName("modal-thank-you")[0];
const modalThankYouCloseButton = modalThankYou.getElementsByClassName("close-button")[0];
const main = document.getElementsByTagName("main")[0];
const mainForm = main.getElementsByTagName("form")[0];
const mainFormSubmitButton = mainForm.getElementsByClassName("submit-button")[0];
const mainFormInputName = mainForm.getElementsByClassName("full-name")[0];
const mainFormInputPhone = mainForm.getElementsByClassName("phone-number")[0];
const mainFormInputEmail = mainForm.getElementsByClassName("email-address")[0];
const mainGreyShade = main.getElementsByClassName("grey-shade")[0];
const mainThankYouContainer = main.getElementsByClassName("thank-you-container")[0];
const mainThankYoucloseButton = mainThankYouContainer.getElementsByClassName("close-button")[0];
const howITWords = document.getElementsByClassName("how-it-works")[0];
const howITWorksExpandablesContainer = howITWords.getElementsByClassName("expandables")[0];
const howITWorksExpandables = howITWorksExpandablesContainer.getElementsByClassName("expandable");
const questionsContainer = document.getElementsByClassName("questions")[0];
const questions = questionsContainer.getElementsByClassName("question");
const serviceContainer = document.getElementsByClassName("service")[0];
const services = serviceContainer.getElementsByClassName("question");

const conenct = document.getElementsByClassName("connect")[0];
const connectFormSubmitButton = conenct.getElementsByClassName("submit-button")[0];
const connectFormInputName = conenct.getElementsByClassName("full-name")[0];
const connectFormInputPhone = conenct.getElementsByClassName("phone-number")[0];
const connectFormInputEmail = conenct.getElementsByClassName("email-address")[0];

const base = document.getElementsByClassName("base")[0];
base.addEventListener("click",(event)=>{
    console.log("");
});

const logoContainer = document.getElementsByClassName("logo-container")[0];
logoContainer.addEventListener("click", (event)=>{
    location.reload();  
});

careerExtDrop.addEventListener("click",(event)=>{
    careerExtDropList.classList.toggle("shown");
});

function animateHamburgerToX(){
    hamburger1.classList.toggle("hamburger-1-x");
    hamburger2.classList.toggle("hidden");
    hamburger3.classList.toggle("hamburger-3-x");
}

hamburgerButton.addEventListener("click",(event)=>{
    animateHamburgerToX();
    headerExtension.classList.toggle("hidden");
});

homeCloseExtension.addEventListener("click", (event)=>{
    headerExtension.classList.toggle("hidden");
    hamburger1.classList.toggle("hamburger-1-x");
    hamburger2.classList.toggle("hidden");
    hamburger3.classList.toggle("hamburger-3-x");
});

modalCircle.addEventListener("click",(event)=>{
    event.stopPropagation();
})

modal3ButtonClose.addEventListener("click",(event)=>{
    modalIntro.remove();
}); 

modalntroFormButton.addEventListener("click",(event)=>{
    event.preventDefault();
    let error = false;
    const fullName = modalntroFormFullName.value;
    fullNameTrimmed = fullName.split(" ").join("");
    if(fullNameTrimmed === "")
    {
        modalntroFormFullName.value = "";
        modalntroFormFullName.placeholder = "נא להזין שם תקין*";
        modalntroFormFullName.classList.add("wrong-input");
        error = true;
    }

    const phoneNumber = modalntroFormPhoneNumber.value;
    if(phoneNumber.length !== 10 || isNaN(phoneNumber))
    {
        modalntroFormPhoneNumber.value = "";
        modalntroFormPhoneNumber.placeholder = "נא להזין מספר טלפון*";
        modalntroFormPhoneNumber.classList.add("wrong-input");
        error = true;
    }

    const email = modalntroFormEmailAddress.value;
    const re = /^\S+@\S+\.\S+$/;
    if(!re.test(email)){
        modalntroFormEmailAddress.value = "";
        modalntroFormEmailAddress.placeholder = "נא להזין כתובת אימייל*";
        modalntroFormEmailAddress.classList.add("wrong-input");
        error = true;
    }
    
    if(error === false)
    {
        const modals = modalIntro.getElementsByClassName("modal-front");
        [].forEach.call(modals, (modal)=>{
            modal.classList.add("modal-slide-out");
        })
        modalThankYouContainer.style.display = "block";
    }
});


modalThankYouCloseButton.addEventListener("click",(event)=>{
    console.log(mainFormInputName.val);
    modalIntro.remove();
});


mainFormSubmitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    let error = false;

    let fullName = mainFormInputName.value;
    fullName = fullName.split(" ").join("");
    if(fullName === "")
    {
        mainFormInputName.value = "";
        mainFormInputName.placeholder = "נא להזין שם תקין*";
        mainFormInputName.classList.add("wrong-input");
        error = true;
    }

    const phoneNumber = mainFormInputPhone.value;
    if(phoneNumber.length !== 10 || isNaN(phoneNumber))
    {
        mainFormInputPhone.value = "";
        mainFormInputPhone.placeholder = "נא להזין מספר טלפון*";
        mainFormInputPhone.classList.add("wrong-input");
        error = true;
    }

    const email = mainFormInputEmail.value;
    const re = /^\S+@\S+\.\S+$/;
    if(!re.test(email)){
        mainFormInputEmail.value = "";
        mainFormInputEmail.placeholder = "נא להזין כתובת אימייל*";
        mainFormInputEmail.classList.add("wrong-input");
        error = true;
    }

    if(error === false){
        mainGreyShade.classList.toggle("shown");
        mainThankYouContainer.classList.toggle("shown");

        mainFormInputName.value = "";
        mainFormInputPhone.value = "";
        mainFormInputEmail.value = "";

        mainFormInputName.placeholder = "";
        mainFormInputPhone.placeholder = "";
        mainFormInputEmail.placeholder = "";
    }
});

mainThankYoucloseButton.addEventListener("click",(event)=>{
    mainGreyShade.classList.toggle("shown");
    mainThankYouContainer.classList.toggle("shown");
});

[].forEach.call(howITWorksExpandables,(ex)=>{
    ex.addEventListener("click",(event)=>{
        const rod1 = ex.getElementsByClassName("rod1")[0];
        const rod2 = ex.getElementsByClassName("rod2")[0];
        const content = ex.getElementsByClassName("content")[0];
        rod1.classList.toggle("expanded");
        rod2.classList.toggle("expanded");
        content.classList.toggle("expanded");
    });
});
[].forEach.call(questions, (q)=>{
    q.addEventListener("click",(event)=>{
        const c = q.getElementsByClassName("content")[0];
        const up = q.getElementsByClassName("fa-arrow-circle-up")[0];
        const down = q.getElementsByClassName("fa-arrow-circle-down")[0];
        c.classList.toggle("shown");
        up.classList.toggle("shown");
        down.classList.toggle("shown");
    })
});

[].forEach.call(services, (q)=>{
    q.addEventListener("click",(event)=>{
        const c = q.getElementsByClassName("content")[0];
        const up = q.getElementsByClassName("fa-arrow-circle-up")[0];
        const down = q.getElementsByClassName("fa-arrow-circle-down")[0];
        c.classList.toggle("shown");
        up.classList.toggle("shown");
        down.classList.toggle("shown");
    })
});



connectFormSubmitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    let error = false;

    let fullName = connectFormInputName.value;
    fullName = fullName.split(" ").join("");
    if(fullName === "")
    {
        connectFormInputName.value = "";
        connectFormInputName.placeholder = "נא להזין שם תקין*";
        connectFormInputName.classList.add("wrong-input");
        error = true;
    }

    const phoneNumber = connectFormInputPhone.value;
    if(phoneNumber.length !== 10 || isNaN(phoneNumber))
    {
        connectFormInputPhone.value = "";
        connectFormInputPhone.placeholder = "נא להזין מספר טלפון*";
        connectFormInputPhone.classList.add("wrong-input");
        error = true;
    }

    const email = connectFormInputEmail.value;
    const re = /^\S+@\S+\.\S+$/;
    if(!re.test(email)){
        connectFormInputEmail.value = "";
        connectFormInputEmail.placeholder = "נא להזין כתובת אימייל*";
        connectFormInputEmail.classList.add("wrong-input");
        error = true;
    }

    if(error === false){
        mainGreyShade.classList.toggle("shown");
        mainThankYouContainer.classList.toggle("shown");

        connectFormInputName.value = "";
        connectFormInputPhone.value = "";
        connectFormInputEmail.value = "";

        connectFormInputName.placeholder = "";
        connectFormInputPhone.placeholder = "";
        connectFormInputEmail.placeholder = "";
    }
});
