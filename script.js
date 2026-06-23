// Portfolio Script

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 1000);
  }
});

const typingElement = document.querySelector(".typing");
const words = [
  "Machine Learning Engineer",
  "AI Engineer",
  "Python Developer",
  "NLP Enthusiast"
];

if (typingElement) {
  let wordIndex = 0, charIndex = 0, deleting = false;

  function typeEffect() {
    const current = words[wordIndex];

    if (!deleting) {
      typingElement.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        deleting = true;
        return setTimeout(typeEffect, 1500);
      }
    } else {
      typingElement.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
      }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
  }

  typeEffect();
}

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("mobile-open");
  });
}

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;

    if (scrollY >= offset && scrollY < offset + height) {
      current = sec.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".section,.card,.skill,.project-card,.timeline-item")
.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(60px)";
  el.style.transition = ".8s";
  observer.observe(el);
});

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

Object.assign(topBtn.style, {
  position:"fixed",
  right:"25px",
  bottom:"25px",
  width:"50px",
  height:"50px",
  borderRadius:"50%",
  border:"none",
  background:"#00d9ff",
  cursor:"pointer",
  display:"none",
  zIndex:"9999"
});

window.addEventListener("scroll",()=>{
  topBtn.style.display = scrollY > 400 ? "block" : "none";
});

topBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

const form=document.querySelector("form");
if(form){
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
  });
}

console.log("Portfolio Loaded");
