document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("tMIQMWlEFiskMT7U3"); // <-- ✅ Replace this with your actual public key

    const form = document.getElementById("bookingForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector('input[name="name"]').value.trim();

        if (!name) {
            alert("Please fill in your name.");
            return;
        }

        // ✅ Send form via EmailJS
        emailjs.sendForm("service_9bx5qfh", "template_014197c", form)
            .then(function () {
                alert(`Thank you, ${name}! Your booking was successfully sent.`);
                form.reset();
            }, function (error) {
                alert("Oops! Something went wrong: " + error.text);
                console.error("EmailJS error:", error);
            });
    });

    // ✅ Back to Top Button (should be outside form submit handler)
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
