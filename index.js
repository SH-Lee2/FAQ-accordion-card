const question = document.querySelector(".faq");

const handleClick = (e) => {
    const target = e.target;
    if (target.matches(".fas")) {
        updateToggleBtn(target);
        const sectionBox = target.parentNode;
        showAndHideAnswer(sectionBox);
    }
};

const updateToggleBtn = (target) => {
    console.log(target);
    if (target.matches(".fa-chevron-down")) {
        target.classList.remove("fa-chevron-down");
        target.classList.add("fa-chevron-up");
    } else {
        target.classList.remove("fa-chevron-up");
        target.classList.add("fa-chevron-down");
    }
};

const showAndHideAnswer = (box) => {
    const answer = box.querySelector(".answer");
    const questionTitle = box.querySelector(".question");
    answer.classList.toggle("hide");
    questionTitle.classList.toggle("hilight");
};

question.addEventListener("click", handleClick);
