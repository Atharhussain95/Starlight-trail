//scroll 
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)







document.addEventListener("DOMContentLoaded", function () {
  let t1 = gsap.timeline({ paused: true });

  // Select .menu-overlay using the correct class selector (prepend with a dot)
  t1.to(".menu-overlay", {
    duration: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "power2.out",
  });

  t1.from(
    ".menu-link, .btn",
    {
      opacity: 0,
      y: 60,
      stagger: 0.05,
      duration: 0.75,
      ease: "power1.inOut",
    },
    "<"
  );

  t1.to(
    ".video-preview",
    {
      duration: 1,
      height: "200px",
      ease: "power2.out",
    },
    "<"
  );
  t1.to(
    ".menu-divider",
    {
      duration: 2,
      width: "100%",
      ease: "power4.out",
    },
    "<"
  );

  function openMenu() {
    document.querySelector(".menu-overlay").style.pointerEvents = "all";
    t1.play();
  }

  function closeMenu() {
    document.querySelector(".menu-overlay").style.pointerEvents = "none";
    t1.reverse();
  }

  document.querySelector(".menu-open-btn").addEventListener("click", openMenu);
  document
    .querySelector(".menu-close-btn")
    .addEventListener("click", closeMenu);
  // Remove the t1.reverse(); line, as it's not necessary here
});

document.addEventListener("DOMContentLoaded", function () {
  // Centering GSAP effect
  gsap.fromTo(
    "nav",
    { opacity: 0, y: "-50%" },
    { opacity: 1, y: "0%", duration: 1 }
  );

  // Add other animations or functionality as needed
});
document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    ".header",
    { opacity: 0, y: "50%" },
    { opacity: 1, y: "0%", duration: 1, delay: 1 }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const menuOpenBtn = document.querySelector(".menu-open-btn");
  const menuCloseBtn = document.querySelector(".menu-close-btn");
  const menuOverlay = document.querySelector(".menu-overlay");

  menuOpenBtn.addEventListener("click", function () {
    document.body.classList.toggle("menu-open");
    menuOpenBtn.classList.add("hidden");
    menuCloseBtn.classList.remove("hidden"); // Remove 'hidden' class to show the close text
  });

  menuCloseBtn.addEventListener("click", function () {
    document.body.classList.remove("menu-open");
    menuOpenBtn.classList.remove("hidden"); // Remove 'hidden' class to show the open text
    menuCloseBtn.classList.add("hidden");
  });
});

// Audio

let soundButton = document.querySelector(".soundbutton"),
  audio = document.querySelector(".audio");

soundButton.addEventListener("click", (e) => {
  soundButton.classList.toggle("paused");
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  soundButton.classList.contains("paused") ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};

// gsap animation



const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);
function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageView.textContent = "";
  imageView.style.border = 0;
}

dropArea.addEventListener("dragover", function (e) {
  e.preventDefault();
});
dropArea.addEventListener("drop", function (e) {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});

// gsap animation

