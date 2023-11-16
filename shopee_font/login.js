// document.getElementById("registerForm").addEventListener("submit", register);
// document.getElementById("loginForm").addEventListener("submit", login);

function register() {
  //event.preventDefault();
  const email = document.getElementById("email_reg").value;
  const password = document.getElementById("password_reg").value;
  const passwordConfirm = document.getElementById("password_confirm").value;

  if (password === passwordConfirm) {
    modal.classList.add("modal__open");
    for (const authForm of authForms) {
      authForms[0].classList.remove("ds-none");
      authForms[1].classList.add("ds-none");
    }
    // Gửi thông tin đăng ký lên server
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.text())
      .then((data) => console.log(data)) // Log kết quả từ server (có thể thay bằng xử lý khác)
      .catch((error) => console.error("Lỗi:", error));
      alert('Bạn đã đăng ký thành công')
  } else alert("password confirm is incorrect!");
}

function login() {
  //event.preventDefault();
  const email = document.getElementById("email_log").value;
  const password = document.getElementById("password_log").value;

  modal.classList.remove("modal__open");
  for (const authForm of authForms) {
    authForm.classList.remove("ds-none");
  }

  // Gửi thông tin đăng nhập lên server
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.text())
    .then((data) => console.log(data)) // Log kết quả từ server (có thể thay bằng xử lý khác)
    .catch((error) => console.error("Lỗi:", error));
}
