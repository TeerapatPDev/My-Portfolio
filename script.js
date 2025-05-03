// Website-learning/script.js
class WebsiteUI {
    constructor() {
        this.header = document.querySelector("header");

        this.setSmoothScroll();
        this.setHeaderScrollEffect();
        this.setFormSubmit();
    }

    setSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", e => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    }

    setHeaderScrollEffect() {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                this.header.style.padding = "0.5rem 0";
                this.header.style.backgroundColor = "rgba(74, 111, 165, 0.9)";
            } else {
                this.header.style.padding = "1rem 0";
                this.header.style.backgroundColor = "var(--primary-color)";
            }
        });
    }

}

//  เรียกใช้เมื่อหน้าโหลด
document.addEventListener("DOMContentLoaded", () => {
    new WebsiteUI();
});
