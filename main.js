const id = 123456;
const parol = "akmal123";

const idInput = document.querySelector(".id-input");
const passwordInput = document.querySelector(".password-input");
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (idInput.value == "" || passwordInput.value == "") {
    return alert("Iltimos login qilish uchun id va password kiriting!");
  }
  if (idInput.value != id || passwordInput.value != parol) {
    return alert("Id number yoki password xato. Qayta urunib koring");
  }
  if (idInput.value == id && passwordInput.value == parol) {
    alert("Siz Tizimga muvaffaqiyatli kirdingiz!");
    setTimeout(() => {
      window.location.href = "./home.html";
    }, 1500);
  }
});
