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


