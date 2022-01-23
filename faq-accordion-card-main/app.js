function showAnswer(e) {

    var answer = e.target.closest(".qa-container").children[1];
    var paragraph = e.target.closest(".qa-container").children[0];
    var button = e.target.closest(".qa-container").children[0].children[1];

    if (answer.style.display === "none") {
        answer.style.display = "flex";
        paragraph.classList.add("active");
        button.style.transform = "scaleY(-1)";
    }
    else {
        answer.style.display = "none";
        paragraph.classList.remove("active");
        button.style.transform = "scaleY(1)";
    }
}

const questions = document.querySelectorAll(".question");
for (const question of questions) {
    question.addEventListener("click", showAnswer);
}
