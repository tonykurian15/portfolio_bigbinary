
let exploreButton = document.querySelector('#explore');
let myWorkButton = document.querySelector('#works');
let aboutButton = document.querySelector('#about');

let sectionNavigation = document.querySelector('#main');
let titleDiv = document.querySelector('.titlePage');
let secondDiv = document.querySelector('.secondPage');
let thirdDiv = document.querySelector('.thirdPage');
let fourthDiv = document.querySelector('.fourthPage');
let aboutDiv = document.querySelector('.aboutPage');
let navDiv = document.querySelector('#navBar');


secondDiv.style.display = "none";
thirdDiv.style.display = "none";
fourthDiv.style.display = "none";
aboutDiv.style.display = "none";
navDiv.style.display = "none";


particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

sectionNavigation.addEventListener('click', (e) => {
    if (e.target.id === "explore") {
        document.documentElement.scrollTop = 0;
        titleDiv.style.display = "none";
        navDiv.style.display = "block";
        secondDiv.style.display = "block";
        thirdDiv.style.display = "block";
        fourthDiv.style.display = "block";
        aboutDiv.style.display = "none";
    }
    else if (e.target.id === "works") {
        titleDiv.style.display = "none";
        secondDiv.style.display = "block";
        thirdDiv.style.display = "block";
        fourthDiv.style.display = "block";
        aboutDiv.style.display = "none";
    }
    else if (e.target.id === "about") {
        titleDiv.style.display = "none";
        secondDiv.style.display = "none";
        thirdDiv.style.display = "none";
        fourthDiv.style.display = "none";
        aboutDiv.style.display = "block";
    }
});

//hiding the navBar

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        navDiv.classList.add("nav--hidden");
    } else {
        navDiv.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
});

