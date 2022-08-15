"";

const question = document.querySelectorAll(".button-heading");
const arrowdown = document.querySelectorAll(".icon-btn-down");
const arrowup = document.querySelectorAll(".icon-btn-up");

question.forEach(list => {
  list.addEventListener("click", function () {
    for (let i = 0; i < question.length; i++) {
      question[i].classList.remove("active");
    }

    console.log(this);
    
    if (this.classList.contains("active")) {
      this.classList.toggle("active");
    } else {
      this.classList.toggle("active");
    }

    for (let i = 0; i < arrowdown.length; i++) {
      if (question[i].classList.contains("active")) {
        arrowdown[i].classList.add("btn-hide");
        arrowup[i].classList.remove("btn-hide");
      } else {
        arrowdown[i].classList.remove("btn-hide");
        arrowup[i].classList.add("btn-hide");
      }
    }

    if (this.classList.contains("active")) {
      this.addEventListener("click", function () {
        this.classList.toggle(`active`);

        for (let i = 0; i < arrowdown.length; i++) {
          if (question[i].classList.contains(`active`)) {
            arrowdown[i].classList.add(`btn-hide`);
            arrowup[i].classList.remove(`btn-hide`);
          } else {
            arrowdown[i].classList.remove(`btn-hide`);
            arrowup[i].classList.add(`btn-hide`);
          }
        }
      });
    } else {
      this.classList.toggle(`active`);
    }
  });
});
