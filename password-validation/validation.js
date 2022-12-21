
let visibility = document.querySelector(".visibility");
let password = document.querySelector("#password");
let count = 0;

visibility.addEventListener("click", (e) => {
    let icon = document.querySelector(".visibility i");
    if (password.getAttribute("type") === "password") {
        password.setAttribute("type","text");
        icon.classList.replace("fa-eye","fa-eye-slash")
    } else {
        password.setAttribute("type","password");
        icon.classList.replace("fa-eye-slash","fa-eye")
    
    }
})

let isExist = (value, pattern, element)=>{
    if (value.match(pattern)) {
        if (element.dataset.found === "false") {
            element.dataset.found = "true";
            count++;
        }
    } else {
        if (element.dataset.found === "true") {
            element.dataset.found = "false";
            count--;
        }
    }
}

//?validate password
password.addEventListener("input", e => {

    let value = password.value;

    let lowercase = document.querySelector(".lowercase");
    let uppercase = document.querySelector(".uppercase");
    let number = document.querySelector(".number");
    let character = document.querySelector(".character");
    let length = document.querySelector(".length");

    isExist(value, /[a-z]/g, lowercase);
    isExist(value, /[A-Z]/g, uppercase);
    isExist(value, /[0-9]/g, number);
    isExist(value, /[@#$%!&*_]/g, character);

    if (value.length >= 8) {
        if (length.dataset.found === "false") {
            length.dataset.found = "true";
            count++;
        } 
    } else {
        if (length.dataset.found === "true") {
            length.dataset.found = "false";
            count--;
        }
    }

    //? check all are found
    if (count == 5) {
        password.dataset.complete = "true";
    } else {
        
        password.dataset.complete = "";
    }
    
});

//? when focus is leave
password.addEventListener("blur", e => {
    if (count < 5) {
        password.dataset.complete = "false";
    }
});