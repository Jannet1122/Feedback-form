
console.log("feedback");
let form = document.querySelector("form");
form.addEventListener("submit", Response);

function Response() {
    document.body.innerHTML="Form submitted successfully!";
}

