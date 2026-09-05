const btn = document.getElementById("downloadBtn");

btn.addEventListener("click", function () {
  const bar = this.querySelector(".progress-bar");
  const text = this.querySelector(".btn__text");

  this.classList.add("is-loading");

  // cambiar texto
  text.textContent = "Downloading...";

  const userLang  = navigator.language || navigator.userLanguage;
  const isSpanish = userLang.startsWith("es");
  const filePath = isSpanish 
    ? "assets/CV/es/CV.pdf" 
    : "assets/CV/en/CV.pdf"; 
  // Name Of File
  const fileName = isSpanish 
    ? "IngenieroDeSoftwareSebastianChisavoForero.pdf" 
    : "SoftwareEngineerSebastianChisavoForero.pdf"; 

  bar.style.width = "0%";
  void bar.offsetWidth;
  bar.style.width = "100%";

  setTimeout(() => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // reset
    bar.style.width = "0%";
    text.textContent = "Download CV";
    this.classList.remove("is-loading");
  }, 1600);
});