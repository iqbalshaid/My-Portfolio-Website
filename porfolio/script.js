// Create a menubar
let navbar = document.querySelector(".navlist");
let menuIcon = document.querySelector(".menu-icon");

console.log("hello");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
  document.body.classList.toggle("open");
});

// Remove the navbar when clicking on it
navbar.addEventListener("click", () => {
  menuIcon.classList.remove("active");
  navbar.classList.remove("active");
  document.body.classList.remove("open");
});

// Highlight active nav link
let menuLi = document.querySelectorAll("nav ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach(sec => sec.classList.remove("active"));
  if (menuLi[len]) menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// Rotate text code
let text = document.querySelector(".text p");
if (text) {
  text.innerHTML = text.innerHTML
    .split("")
    .map((char, i) => `<b style="transform:rotate(${i * 4.3}deg)">${char}</b>`)
    .join("");
}

// About button switch logic
const buttonClick = document.querySelectorAll(".about-btn button");
const content = document.querySelectorAll(".content");

if (buttonClick.length) {
  buttonClick.forEach((button, index) => {
    button.addEventListener("click", () => {
      content.forEach(contents => (contents.style.display = "none"));
      content[index].style.display = "block";
      buttonClick.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
}

// Mixitup for portfolio
var mixer = mixitup(".portfolio-gallery", {
  selectors: {
    target: ".portfolio-box",
  },
  animation: {
    duration: 500,
  },
});


// Skills progress bar
let first_skill = document.querySelector(".skill:first-child");
let sk_counter = document.querySelectorAll(".counter span");
let progress_bars = document.querySelectorAll(".skills svg circle");
let skillPlayed = false;

function hasReached(el) {
  let topPosition = el.getBoundingClientRect().top;
  return window.innerHeight >= topPosition + el.offsetHeight;
}

function updateCount(num, Maxnum) {
  let currentNum = +num.innerHTML;
  if (currentNum < Maxnum) {
    num.innerHTML = currentNum + 1;
    setTimeout(() => updateCount(num, Maxnum), 12);
  }
}

function skillsCounter() {
  if (!hasReached(first_skill) || skillPlayed) return;
  skillPlayed = true;

  sk_counter.forEach((counter, i) => {
    let target = +counter.dataset.target;
    let strokeValue = 465 - 465 * (target / 100);
    progress_bars[i].style.setProperty("--target", strokeValue);
    setTimeout(() => updateCount(counter, target), 400);
  });

  progress_bars.forEach(p => (p.style.animation = "progress 2s ease-in-out forwards"));
}

window.addEventListener("scroll", () => {
  if (skillPlayed) return;
  skillsCounter();
});

// Contact form submission (Web3Forms)
document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: data,
  });

  if (response.ok) {
    document.getElementById("popup").style.display = "block";
    form.reset();
    setTimeout(() => {
      document.getElementById("popup").style.display = "none";
    }, 5000);
  } else {
    alert("❌ Something went wrong. Please try again.");
  }
});

// Scroll progress bar
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #e6006d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
