const themeBtn = document.querySelector(".sidebar__theme-btn");
const themeIcon = themeBtn.querySelector("img");

let isDark = false;

themeBtn.addEventListener("click", () => {

    // 🔥 animación fade OUT
    themeBtn.classList.add("fade");

    setTimeout(() => {

        // cambiar tema
        isDark = !isDark;

        if (isDark) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");

            themeIcon.src = "assets/icons/dark.ico";
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");

            themeIcon.src = "assets/icons/light.ico";
        }

        // 🔥 fade IN
        themeBtn.classList.remove("fade");

    }, 200); // sincroniza con CSS
});