(function(){
  emailjs.init("ghekNt92PrBCNHBjG"); // public key 
})();

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // 🔐 honeypot check
    if (form.company.value !== "") {
        return; // bot detectado
    }

    const btn = form.querySelector("button");
    btn.textContent = "Sending...";
    btn.disabled = true;

    emailjs.sendForm("service_hv5lx9n", "template_kel3sct", this)
        .then(() => {
            btn.textContent = "Message Sent ✔";
            form.reset();

        setTimeout(() => {
                btn.textContent = "Contact Me";
                btn.disabled = false;
            }, 2000);
        })
        .catch(() => {
            btn.textContent = "Error ❌";
            btn.disabled = false;
        });
});