const logOutBtn = document.querySelector(".btn-log-out");

logOutBtn.addEventListener("click", function () {
  let savol = confirm("Siz haqiqatdan ham chiqib ketmqochimisz?");

  if (savol == true) {
    alert("Siz muvaffaqiyatli tizimdan chiqdingiz");
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 1500);
  }
});
