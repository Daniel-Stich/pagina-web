// ===============================
// MENÚ RESPONSIVO
// ===============================
function toggleMenu() {
    document.getElementById("nav").classList.toggle("show");
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav").classList.remove("show");
    });
});

// ===============================
// SCROLL SUAVE
// ===============================
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// ANIMACIÓN DE APARICIÓN
// ===============================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".card, .card-service, .galeria-grid img").forEach(el => {
    el.classList.add("fade-element");
    observer.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-element");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
});

// ===============================
// ANIMACIÓN EXCLUSIVA PARA IMAGEN DE "OFRECEMOS"
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const imgOfrecemos = document.getElementById("ofrecemos-img");

    if (!imgOfrecemos) return;

    imgOfrecemos.style.opacity = "0";
    imgOfrecemos.style.transform = "scale(0.8)";
    imgOfrecemos.style.transition = "all 0.8s ease";

    const observerOfrecemos = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                imgOfrecemos.style.opacity = "1";
                imgOfrecemos.style.removeProperty("transform");
            }
        });
    }, { threshold: 0.3 });

    observerOfrecemos.observe(imgOfrecemos);
});
