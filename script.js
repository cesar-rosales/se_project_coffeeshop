console.log("script loaded ✅");

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const toast = document.createElement("div");
    toast.textContent = "Thank you! We’ll be in touch shortly ☕";

    toast.style.position = "fixed";
    toast.style.bottom = "24px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.padding = "14px 18px";
    toast.style.borderRadius = "999px";
    toast.style.background = "#2b2b2b";
    toast.style.color = "#fff";
    toast.style.fontSize = "14px";
    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
    toast.style.zIndex = "9999";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 200ms ease";

    document.body.append(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = "1";
    });

    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 200);
    }, 2600);

    form.reset();
  });
}

const backToTopBtn = document.querySelector(".back-to-top");
console.log("backToTopBtn:", backToTopBtn);

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

