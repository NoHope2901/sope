// MODAL
const dangkys = document.querySelectorAll(".dangky-js");
const dangnhaps = document.querySelectorAll(".dangnhap-js");
const modal = document.querySelector(".modal");
const authForms = document.querySelectorAll(".modal__auth-form");

for (const dangky of dangkys) {
  dangkys[0].addEventListener("click", function () {
    modal.classList.add("modal__open");
    for (const authForm of authForms) {
      authForms[0].classList.add("ds-none");
    }
  });
  dangkys[1].addEventListener("click", function () {
    modal.classList.add("modal__open");
    for (const authForm of authForms) {
      authForms[1].classList.remove("ds-none");
      authForms[0].classList.add("ds-none");
    }
  });
}
for (const dangnhap of dangnhaps) {
  dangnhaps[0].addEventListener("click", function () {
    modal.classList.add("modal__open");
    for (const authForm of authForms) {
      authForms[1].classList.add("ds-none");
    }
  });
  dangnhaps[1].addEventListener("click", function () {
    modal.classList.add("modal__open");
    for (const authForm of authForms) {
      authForms[1].classList.add("ds-none");
      authForms[0].classList.remove("ds-none");
    }
  });
}
modal.addEventListener("click", function () {
  modal.classList.remove("modal__open");
  for (const authForm of authForms) {
    authForm.classList.remove("ds-none");
  }
});
for (const authForm of authForms) {
  authForm.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

// main main cái cc à
