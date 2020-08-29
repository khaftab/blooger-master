const burgur = document.querySelector(".burgur-menu");
const navItem = document.querySelector(".nav-items");
const links = document.querySelectorAll(".nav-item");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");

burgur.addEventListener("click", () => {
  navItem.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  lineOne.classList.add("line-one");
  lineTwo.classList.toggle("line-two");
  lineThree.classList.toggle("line-three");
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
