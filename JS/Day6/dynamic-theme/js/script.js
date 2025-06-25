let theme = document.documentElement;

let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnClass = e.currentTarget.classList;
    if (btnClass.contains("btn-1")) {
      theme.style.setProperty("--theme-color", "#333");
    } else if (btnClass.contains("btn-2")) {
      theme.style.setProperty("--theme-color", "#1c11ea");
    } else if (btnClass.contains("btn-3")) {
      theme.style.setProperty("--theme-color", "#eb1479");
    } else {
      theme.style.setProperty("--theme-color", "#1dcd14");
    }
  });
});
