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

  } else alert("password confirm is incorrect!");
}
function logout(){
  const user = document.querySelector('.header__user')
  user.classList.remove('ds-fl')
  for(dangky of dangkys) {
    dangky.classList.remove('ds-none')
  }
  
  for(dangnhap of dangnhaps) {
    dangnhap.classList.remove('ds-none')
  }
}
function login() {
  //event.preventDefault();
  const email = document.getElementById("email_log").value;
  const password = document.getElementById("password_log").value;

  modal.classList.remove("modal__open");
  for (const authForm of authForms) {
    authForm.classList.remove("ds-none");
  }
  const user = document.querySelector('.header__user')
  user.classList.add('ds-fl')
  for(dangky of dangkys) {
    dangky.classList.add('ds-none')
  }
  
  for(dangnhap of dangnhaps) {
    dangnhap.classList.add('ds-none')
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
