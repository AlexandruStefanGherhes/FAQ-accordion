const questions = document.querySelectorAll(".question");
const btns = document.querySelectorAll(".question__btn");
const text = document.querySelectorAll(".question__title");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target.closest(".question");
    questions.forEach((article) => {
      if (article !== target) {
        article.classList.remove("active");
      }
    });
    target.classList.toggle("active");
  });
});

text.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target.closest(".question");
    questions.forEach((question) => {
      if (question !== target) {
        question.classList.remove("active");
      }
    });
    target.classList.toggle("active");
  });
});
