const question = document.querySelector(".faq");
const imageBox = document.querySelector(".card__image-box");
const imageRect = imageBox.getBoundingClientRect();
const handleClick = (e) => {
    const target = e.target;
    if (target.matches(".question")) {
        const sectionBox = target.parentNode;
        updateToggleBtn(sectionBox);
        showAndHideAnswer(sectionBox);
    }
};

const updateToggleBtn = (target) => {
    const btn = target.querySelector(".fas");
    if (btn.matches(".fa-chevron-down")) {
        btn.classList.remove("fa-chevron-down");
        btn.classList.add("fa-chevron-up");
    } else {
        btn.classList.remove("fa-chevron-up");
        btn.classList.add("fa-chevron-down");
    }
};

const showAndHideAnswer = (box) => {
    const answer = box.querySelector(".answer");
    const questionTitle = box.querySelector(".question");
    answer.classList.toggle("hide");
    questionTitle.classList.toggle("hilight");
};

question.addEventListener("click", handleClick);
