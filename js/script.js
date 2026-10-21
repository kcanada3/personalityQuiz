console.log("script.js connected!");

let title = document.getElementById("page-title");
let description = document.getElementById("description");
console.log(title);
console.log(description);

let buttons = document.querySelectorAll(".answer-btn");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // remove the selected class from all buttons
        buttons.forEach(function(btn) {
            btn.classList.remove("selected"); 
        });

        // add the selected class to only the one that is clicked
        button.classList.add("selected");
    });
});