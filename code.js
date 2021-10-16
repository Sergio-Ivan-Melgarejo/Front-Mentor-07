const BUTTON = document.querySelector(".form__submit");
const EMAIL = document.querySelector(".form__email");
const MENSEGE = document.querySelector(".meseges-error");
const CONTAINER_EMAIL = document.querySelector(".container-email");

function submit(){
    if (EMAIL.value !== undefined &&
        EMAIL.value.includes("@") == true &&
        EMAIL.value.includes(".com") == true &&
        EMAIL.value.length > 10){
            BUTTON.style.animation = "submit-2 6s linear";
            BUTTON.value = "SENTING";
            CONTAINER_EMAIL.style.animation = "submit-1 6s linear";
            setTimeout(()=>{
                EMAIL.value = "sent";
                BUTTON.value = "Notify Me";
                CONTAINER_EMAIL.style.animation = "none";
                BUTTON.style.animation = "none";
            },6000);
            setTimeout(()=>{EMAIL.value = "sent";},3000);
        }
    else{
        EMAIL.style.animation = "error-2 6s alternate";
        MENSEGE.style.animation = "error-1 6s forwards";
        setTimeout(()=>{
            EMAIL.style.animation = "none";
            MENSEGE.style.animation = "none";
        },6000);
    }
}

BUTTON.addEventListener("click", (e)=>{
    e.preventDefault();
    submit();
});


// quitar text