document.addEventListener("DOMContentLoaded", () => {

    const text = document.querySelector(".sec-text");

    if (!text) {
        console.error("No se encontró .sec-text");
        return;
    }

    const words = ["Software Engineer", "Game Developer", "Full Stack Developer"];
    
    // 🔥 velocidades dinámicas por palabra
    const speeds = [80, 60, 100]; // typing speed
    const deleteSpeed = 40;

    let index = 0;

    function typeEffect(word, speed) {
        let i = 0;
        text.textContent = "";

        const typing = setInterval(() => {
            text.textContent += word[i];
            i++;

            if (i === word.length) {
                clearInterval(typing);

                setTimeout(deleteEffect, 1200);
            }
        }, speed);
    }

    function deleteEffect() {
        let word = text.textContent;
        let i = word.length;

        const deleting = setInterval(() => {
            text.textContent = word.substring(0, i - 1);
            i--;

            if (i === 0) {
                clearInterval(deleting);

                index = (index + 1) % words.length;

                setTimeout(() => {
                    typeEffect(words[index], speeds[index]);
                }, 300);
            }
        }, deleteSpeed);
    }

    // 🚀 INICIO REAL
    typeEffect(words[index], speeds[index]);

});