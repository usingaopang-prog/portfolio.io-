// Portfolio JS - Black / Red / Blue Theme

// 1. Typing effect for hero
const typingText = ["digital systems.", "web experiences.", "clean code."];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".hero h1.typing");

function typeLoop() {
  if (!typingElement) return;
  const current = typingText[textIndex];

  if (isDeleting) {
    typingElement.textContent = current.substring(0, charIndex--);
  } else {
    typingElement.textContent = current.substring(0, charIndex++);
  }

  let speed = isDeleting? 40 : 90;

  if (!isDeleting && charIndex === current.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingText.length;
    speed = 500;
  }
  setTimeout(typeLoop, speed);
}

// 2. Sticky nav + active link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  // add background blur intensity
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(10,10,11,0.95)";
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
  } else {
    nav.style.background = "rgba(10,10,11,0.8)";
    nav.style.boxShadow = "none";
  }
});

// 3. Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".card,.skill,.contact-box,.section-head").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});

// 4. Project filter (optional - add buttons with data-filter)
const filterBtns = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
        setTimeout(() => { card.style.opacity = "1"; card.style.transform = "scale(1)"; }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.95)";
        setTimeout(() => card.style.display = "none", 300);
      }
    });
  });
});

// 5. Contact form validation + fake send
const form = document.querySelector("#contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    if (!name ||!email ||!message) {
      showToast("Please fill all fields.", "red");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      showToast("Invalid email.", "red");
      return;
    }

    // simulate send
    const btn = form.querySelector("button");
    const original = btn.textContent;
    btn.textContent = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = "Message Sent ✓";
      btn.style.background = "#2D5BFF";
      showToast("Message sent! I'll reply soon.", "blue");
      form.reset();
      setTimeout(() => { btn.textContent = original; btn.disabled = false; btn.style.background = ""; }, 2000);
    }, 1200);
  });
}

// 6. Toast notification
function showToast(msg, color = "red") {
  let toast = document.createElement("div");
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed; bottom: 24px; right: 24px; z-index: 999;
    background: ${color === "red"? "#FF2D2D" : "#2D5BFF"};
    color: white; padding: 14px 22px; border-radius: 100px;
    font-weight: 700; font-size: 13px; letter-spacing: 0.5px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    transform: translateY(20px); opacity: 0; transition: 0.3s;
  `;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.transform = "translateY(0)"; toast.style.opacity = "1"; }, 10);
  setTimeout(() => { toast.style.opacity = "0"; toast.style.transform = "translateY(20px)"; setTimeout(()=> toast.remove(), 300); }, 3000);
}

// 7. Magnetic buttons effect
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

// 8. Init
document.addEventListener("DOMContentLoaded", () => {
  typeLoop();
  console.log("%cPortfolio loaded // black red blue", "color:#FF2D2D; font-weight:bold; font-size:14px;");
});