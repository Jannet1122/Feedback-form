
console.log("feedback");
let form = document.querySelector("form");
form.addEventListener("submit", Response);

function Response(event) {
    event.preventDefault();   
    let response = document.getElementById("confirmation");

    console.log("Inside function");
    response.textContent = "Thank you for your feedback!";
}

