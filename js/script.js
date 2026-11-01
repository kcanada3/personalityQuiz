console.log("script.js connected!");

let title = document.getElementById("page-title");
let description = document.getElementById("description");
console.log(title);
console.log(description);

// select all question blocks
let questions = document.querySelectorAll(".question-block");

// empty object that will store user answers
let userAnswers = {};

// loop through each question
questions.forEach(function(question, index) {
    // get the answer buttons inside this question
    let buttons = question.querySelectorAll(".answer-btn");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // remove the selected class from all buttons
            buttons.forEach(function(btn) {
                btn.classList.remove("selected"); 
            });

            // add the selected class to only the one that is clicked
            button.classList.add("selected");

            // store the user's answer
            userAnswers[index + 1] = button.dataset.answer;

            console.log(userAnswers);
        });
    });
});

// function to calculate and display quiz results
function displayResult() {
    // check if all questions have been answered
    if(Object.keys(userAnswers).length < questions.length) {
        alert("Please answer all questions before submitting.");
        return;
    }

    // create object to track each character's score
    let scores = {
        "Deadpool": 0,
        "Punisher": 0,
        "Venom": 0,
        "Red Hood": 0
    };

    // count the user's answers
    for(let question in userAnswers) {
        let answer = userAnswers[question];
        scores[answer]++;
    }

    // determine which character has the highest score
    let result = "Deadpool"; // default result

    for(let character in scores) {
        if(scores[character] > scores[result]) {
            result = character;
        }
    }

    // associate each character with an image
    let characterImages = {
        "Deadpool": "./img/deadpool.png",
        "Punisher": "./img/punisher.png",
        "Venom": "./img/venom.png",
        "Red Hood": "./img/redhood.png"
    };

    // associate each character with a description
    let descriptions = {
        "Deadpool": "You're funny, unpredictable, and always ready with a joke, even in the worst situations. You don't take life too seriously and prefer doing things your own way rather than following the rules. Although your methods can be chaotic, you genuinely care about the people close to you. You might not be everyone's idea of a hero, but you'll always find a way to get the job done!",
        "Punisher": "You're serious, determined, and have a strong sense of justice. When you set your mind to something, nothing can easily stand in your way. You believe actions have consequences and aren't afraid to make difficult decisions. While others might question your methods, you stand firmly behind what you believe is right.",
        "Venom": "You're passionate, powerful, and fiercely loyal to the people you care about. Your emotions sometimes get the best of you, but they also drive you to protect those closest to you. You may come across as intimidating, but underneath that tough exterior is someone who values loyalty and connection. When someone threatens the people you love, you won't hesitate to defend them!",
        "Red Hood": "You're independent, intelligent, and always thinking one step ahead. You prefer relying on your own judgment rather than blindly following rules or authority. You're strategic in difficult situations and believe that sometimes unconventional methods are necessary to achieve justice. Although you may keep your emotions hidden, you're deeply loyal to those who earn your trust."
    };

    // display the result
    let resultContainer = document.getElementById("result-container");
    let resultText = document.getElementById("result-text");
    let resultImage = document.getElementById("result-image");
    let resultDescription = document.getElementById("result-description");

    resultText.textContent = "You are " + result + "!";

    resultImage.src = characterImages[result];
    resultImage.alt = result;
    
    resultDescription.textContent = descriptions[result];

    resultContainer.style.display = "block";
    resultContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}

// add event listener to the results button
let resultButton = document.getElementById("show-result");
resultButton.addEventListener("click", displayResult);