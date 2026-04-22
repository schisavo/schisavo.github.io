const themeBtn = document.getElementById("themeBtn");

let isDark = false;

themeBtn.addEventListener("click", () => {

    // fade OUT
    themeBtn.classList.add("fade");

    setTimeout(() => {

        // cambiar tema
        isDark = !isDark;

        document.body.classList.toggle("dark", isDark);
        document.body.classList.toggle("light", !isDark);

        // fade IN
        themeBtn.classList.remove("fade");

    }, 250); // sincroniza con CSS
});