const burgur = document.querySelector(".burgur");
const nav = document.querySelector(".nav-items");
const navLink = document.querySelectorAll(".nav-item");
const heroSection = document.querySelector(".hero-section");

burgur.addEventListener("click", () => {
  // heroSection.classList.toggle("hero-index");
  burgur.classList.toggle("toggle");

  nav.classList.toggle("active");

  navLink.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }

    nav.onanimationend = () => {
      console.log("ended");
    };

    // burgur animation
  });
});

new Glider(document.querySelector(".glider"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: {
    prev: "#prev-btn",
    next: "#next-btn",
  },
  duration: 1,
  responsive: [
    {
      // screens greater than >= 554
      breakpoint: 554,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: "2",
        // slidesToScroll: "auto",
        // itemWidth: 150,
        // duration: 0.25,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

AOS.init();
